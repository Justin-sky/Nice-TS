import { TypedObjectPool } from "../../common/TypedObjectPool";
import { Entity } from "./Entity";
import { ComponentGroupContext } from "./GroupContext";
import { SyncDebugger } from "./SyncDebugger";

type Class<T> = new (...args: any[]) => T;

export enum CompFieldType {
    Normal,
    Array,
    Map,
    Slot
}

export interface ICompFieldDesc {
    type: CompFieldType;
    name: string;
}

let gClassSpecFieldMap: { [name: string]: ICompFieldDesc[][] } = {};

export class EntityContext {
    private _compGroupCtx: ComponentGroupContext;
    private _name: string;
    private _nextID: number = 1;
    private _entityPool: TypedObjectPool<Entity>;
    private _entityMap: { [key: number]: Entity } = {};
    private _debugger: SyncDebugger;
    private _classIDKey: string;
    private _fieldConvertorMap: { [name: string]: Function } = {};
    private _singletonMap: { [id: number]: Entity } = {};

    get contextName() { return this._name; }
    get componentGroupContext() { return this._compGroupCtx; }
    get entityMap() { return this._entityMap; }
    // get debugger() { return this._debugger; }

    constructor(name: string, cls: any) {
        this._name = name;
        this._classIDKey = "__compid_" + name;
        this._entityPool = new TypedObjectPool(cls);
        this._compGroupCtx = new ComponentGroupContext(this);
        this._debugger = new SyncDebugger();
    }

    reset() {
        this._debugger.clearRecord();
        this._compGroupCtx.reset();
        this._nextID = 1;

        let entityMap = this._entityMap;
        let pool = this._entityPool;

        for (let id in entityMap) {
            let entity = entityMap[id];
            entity.reset();
            pool.recover(entity);
        }
        this._entityMap = {};
        this._singletonMap = {};
    }

    clear() {
        let entityMap = this._entityMap;
        let pool = this._entityPool;

        for (let id in entityMap) {
            let entity = entityMap[id];
            entity.reset();
            pool.recover(entity);
            delete entityMap[id];
        }

        this._compGroupCtx.clear();
    }

    entityMapAs<T>(): { [key: number]: T } {
        return <{ [key: number]: T }><any>this._entityMap;
    }

    get<T>(id: number): Entity & T {
        return <Entity & T><any>(this._entityMap[id]);
    }

    getAs<T0, T1, T2, T3, T4>(id: number, cls0: Class<T0>, cls1?: Class<T1>, cls2?: Class<T2>, cls3?: Class<T3>, cls4?: Class<T4>) {
        let result = this._entityMap[id];
        return result ? result.get(cls0, cls1, cls2, cls3, cls4) : null;
    }

    create(): Entity {
        let entity = this._entityPool.get();
        let id = this._nextID++;
        entity.init(this, id);
        this._entityMap[id] = entity;
        return entity;
    }

    recover(entity: Entity): void {
        delete this._entityMap[entity.id];
        entity.beforeRecover();
        this._entityPool.recover(entity);
    }

    postTick() {
        this._compGroupCtx.resetEvents();
    }

    getOrRegClassID(cls: any): number {
        let classID = cls[this._classIDKey];
        if (classID !== undefined) {
            return classID;
        }

        let specFields = gClassSpecFieldMap[this._name];
        if (!specFields) {
            specFields = gClassSpecFieldMap[this._name] = [];
        }

        let descs: ICompFieldDesc[] = [];
        let defInst = new cls();
        // 标记特殊字段.
        for (let key of Object.getOwnPropertyNames(defInst)) {
            let type = CompFieldType.Normal;

            // List/Map/Slot
            let end4Char = key.substr(-4);
            if (end4Char == 'List') {
                type = CompFieldType.Array;
            } else if (end4Char == 'Slot') {
                type = CompFieldType.Slot;
            } else {
                let end3Char = key.substr(-3);
                if (end3Char == 'Map') {
                    type = CompFieldType.Map;
                }
            }

            if (type != CompFieldType.Normal) {
                descs.push({
                    type: type,
                    name: key,
                });
            }
        }

        specFields.push(descs);
        classID = specFields.length - 1;

        if (classID >= 96) {
            // debugger;
            // throw new Error("too much component type")
            console.error("too much component type");
        }

        cls[this._classIDKey] = classID;
        return classID;
    }

    regFieldConvertor(name: string, convertor: Function) {
        this._fieldConvertorMap[name] = convertor;
    }

    getCompSpecFieldDesc(classID: number) {
        return gClassSpecFieldMap[this._name][classID];
    }

    getFieldConvertor(name: string): Function {
        return this._fieldConvertorMap[name];
    }

    hasSingleton(id: number): boolean {
        return !!this._singletonMap[id];
    }

    singleton(id: number): Entity {
        let entity = this._singletonMap[id];
        if (entity) {
            return entity;
        }

        entity = this._singletonMap[id] = this.create();
        return entity;
    }
}