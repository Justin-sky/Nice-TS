import { Entity } from "./Entity";
import { GroupID } from "./GroupID";
import { EntityContext } from "./EntityContext";

function entityCmp(a: Entity, b: Entity): number {
    if (!a) {
        return 1;
    }
    if (!b) {
        return -1;
    }
    return a.id - b.id;
}


let _holdList: number[] = [];
function fastRemoveUndefineInArray(arr: any[]): number {
    _holdList.length = 0;

    let count = arr.length;
    for (let i = 0; i < count; i++) {
        if (arr[i] === undefined) {
            _holdList.push(i);
        }
    }

    let holdListIndex = 0;
    let newArrLength = count - _holdList.length;
    for (let i = newArrLength; i < count; i++) {
        let val = arr[i];
        if (val === undefined) {
            continue;
        }

        let holdIndex = _holdList[holdListIndex++];
        arr[holdIndex] = val;
    }

    arr.length = newArrLength;
    return _holdList.length;
}

function clearMap(map: any) {
    for (let key in map) {
        delete map[key];
    }
}

export class EntityGroup {
    private _groupID: GroupID;
    private _entities: Entity[] = [];
    private _entityCount: number = 0;
    private _entityIDToIndex: { [id: number]: number } = {};
    private _addedEntities: Entity[] = [];
    private _deletedEntities: Entity[] = [];
    private _mute: boolean = false;
    private _needSort: boolean = false;
    private _entityCtx: EntityContext;

    get mute(): boolean { return this._mute; }
    get groupID(): GroupID { return this._groupID; }
    get entityCount(): number { return this._entityCount; }
    get addedEntities(): Entity[] { return this._addedEntities; }
    get deletedEntities(): Entity[] { return this._deletedEntities; }

    constructor(entityContext: EntityContext, groupID: GroupID) {
        this._entityCtx = entityContext;
        this._groupID = new GroupID().assign(groupID);
    }

    reset() {
        this._entities.length = 0;
        this._entityCount = 0;
        clearMap(this._entityIDToIndex);
        this._needSort = false;
        this._addedEntities.length = 0;
        this._deletedEntities.length = 0;
    }

    clear() {
        this.reset();
    }

    forEach<T>(fn: (entity: Entity & T, data?: any) => void, thisArg?: any, data?: any) {
        if (this._needSort) {
            this.sortEntities();
        }

        let entities = this._entities;
        for (let i = 0; i < entities.length; i++) {
            let entity = entities[i];
            if (entity === undefined) {
                continue;
            }
            fn.call(thisArg, entity, data);
        }
    }

    asArrayHasHole<T>(): (Entity & T)[] {
        if (this._needSort) {
            this.sortEntities();
        }

        return <(Entity & T)[]>this._entities;
    }

    added<T>(): (Entity & T)[] {
        return <(Entity & T)[]>this.addedEntities;
    }

    deleted<T>(): (Entity & T)[] {
        return <(Entity & T)[]>this._deletedEntities;
    }

    add(entity: Entity) {
        let length = this._entities.push(entity);
        this._entityIDToIndex[entity.id] = length - 1;
        this._addedEntities.push(entity);
        this._entityCount++;

        if (this._needSort) {
            return;
        }

        this._needSort = this.getLastEntityID() > entity.id;
    }

    del(entity: Entity) {
        this._entityCount--;
        let entityID = entity.id;
        let entities = this._entities;
        let idToIndex = this._entityIDToIndex;

        let index = idToIndex[entityID];
        delete entities[index];
        delete idToIndex[entityID];

        this._deletedEntities.push(entity);
    }

    delAll() {
        let entities = this._entities;
        if (entities.length <= 0) {
            return;
        }

        this._mute = true;
        for (let entity of entities) {
            entity.recover();
            this._deletedEntities.push(entity);
        }

        this._entities.length = 0;
        clearMap(this._entityIDToIndex);
        this._needSort = false;
        this._addedEntities.length = 0;
        this._entityCount = 0;

        this._mute = false;
    }

    resetEvents() {
        this._addedEntities.length = 0;
        this._deletedEntities.length = 0;
        if (fastRemoveUndefineInArray(this._entities)) {
            this.sortEntities();
        }
    }

    private sortEntities() {
        let entities = this._entities.sort(entityCmp);
        let idToIndex = this._entityIDToIndex;
        clearMap(idToIndex);

        let count = entities.length;
        for (let k = 0; k < count; k++) {
            let entity = entities[k];
            if (entity) {
                idToIndex[entity.id] = k;
            }
        }

        this._needSort = false;
    }

    private getLastEntityID(): number {
        let entities = this._entities;
        let count = entities.length;
        for (let i = count - 1; i >= 0; i--) {
            let entity = entities[i];
            if (entity) {
                return entity.id;
            }
        }
        return 0;
    }
}

export class EntityCombineGroup {
    private _groups: EntityGroup[] = [];

    constructor(groups: EntityGroup[]) {
        this._groups = groups;
    }

    get groups() { return this._groups; }

    hasEntity(): boolean {
        for (let group of this._groups) {
            if (group.entityCount > 0) {
                return true;
            }
        }
        return false;
    }
}

export class EntityGroupIter<T> {
    private _group: EntityGroup;

    init(group: EntityGroup) {
        this._group = group;
    }

    get group() { return this._group; }
    get count() { return this._group.entityCount; }

    forEach(fn: (entity: Entity & T, data?: any) => void, thisArg?: any, data?: any) {
        this._group.forEach(fn, thisArg, data);
    }

    asArrayHasHole() {
        return this._group.asArrayHasHole<T>();
    }

    added() {
        return <(Entity & T)[]>this._group.addedEntities;
    }

    deleted() {
        return <(Entity & T)[]>this._group.deletedEntities;
    }
}