import { EntityGroup, EntityCombineGroup } from "./EntityGroup";
import { EntityContext } from "./EntityContext";
import { Entity } from "./Entity";
import { GroupID } from "./GroupID";
import { theFramePool } from "../FramePool";

class MatchGroups {
    groupID: GroupID;
    groups: EntityGroup[] = [];

    constructor(groupID: GroupID){
        this.groupID = new GroupID();
        this.groupID.assign(groupID);
    }
}

class GroupContext {
    protected _entityCtx: EntityContext;
    protected _groupIDToGroup: { [id: string]: EntityGroup } = {};
    protected _groupIDToMatchGroups: { [id: string]: MatchGroups } = {};
    protected _groupPropName: string;
    protected _customIDToCombineGroup: { [id: string]: EntityCombineGroup } = {};

    get entityContext() { return this._entityCtx; }
    get groupIDToGoup() { return this._groupIDToGroup; }

    constructor(entityCtx: EntityContext, groupPropName: string) {
        this._entityCtx = entityCtx;
        this._groupPropName = groupPropName;
    }

    reset() {
        let groupMap = this._groupIDToGroup;
        for (let id in groupMap) {
            let group = groupMap[id];
            group.reset();
        }
    }

    clear() {
        let groupMap = this._groupIDToGroup;
        for (let id in groupMap) {
            let group = groupMap[id];
            group.clear();
        }
    }

    getByGroupID(groupID: GroupID): EntityGroup {
        return this._groupIDToGroup[groupID.key];
    }

    getOrCreateGroupByID(groupID: GroupID): EntityGroup {
        let group = this._groupIDToGroup[groupID.key];
        if (group) {
            return group;
        }

        group = new EntityGroup(this.entityContext, groupID);
        this._groupIDToGroup[groupID.key] = group;

        let entityMap = this._entityCtx.entityMap;
        let propName = this._groupPropName;
        for (let key in entityMap) {
            let entity = entityMap[key];
            if (entity[propName].hasMask(groupID)) {
                group.add(entity);
            }
        }

        // matchGroupID我们缓存起来了, 所以这里也还需要重新计算一下.
        let matchGroupMap = this._groupIDToMatchGroups;
        for (let matchGroupIDKey in matchGroupMap) {
            let matchGroups = matchGroupMap[matchGroupIDKey];
            if (matchGroups.groupID.hasMask(groupID)) {
                matchGroups.groups.push(group);
            }
        }

        return group;
    }

    createOrGroups(customID: number, groupIDs: GroupID[]): EntityCombineGroup {
        let result = this._customIDToCombineGroup[customID];
        if (result) {
            return result;
        }

        let self = this;
        let groups = groupIDs.map((groupID: GroupID) => self.getOrCreateGroupByID(groupID));
        result = this._customIDToCombineGroup[customID] = new EntityCombineGroup(groups);
        return result;
    }

    changeEntityGroup(entity: Entity, prevGroupID: GroupID, curGroupID: GroupID) {
        let keepGroupMask = theFramePool.allocItem("GroupID", GroupID);
        curGroupID.intersection(keepGroupMask, prevGroupID);

        let addGroups = this.getOrCreateMatchGroups(curGroupID);
        for (let group of addGroups.groups) {
            if (keepGroupMask.hasMask(group.groupID)) {
                continue;
            }
            group.add(entity);
        }

        let delGroups = this.getOrCreateMatchGroups(prevGroupID);
        for (let group of delGroups.groups) {
            if (group.mute) {
                continue;
            }
            if (keepGroupMask.hasMask(group.groupID)) {
                continue;
            }
            group.del(entity);
        }
    }

    resetEvents() {
        let groupIDToGroup = this._groupIDToGroup;
        for (let key in groupIDToGroup) {
            let group = groupIDToGroup[key];
            group.resetEvents();
        }
    }

    private getOrCreateMatchGroups(groupID: GroupID): MatchGroups {
        let matchGroups = this._groupIDToMatchGroups[groupID.key];
        if (matchGroups) {
            return matchGroups;
        }

        this._groupIDToMatchGroups[groupID.key] = matchGroups = new MatchGroups(groupID);
        let groupIDToGroup = this._groupIDToGroup;
        for (let checkGroupKey in groupIDToGroup) {
            let checkGroup = groupIDToGroup[checkGroupKey];
            let checkGroupID = checkGroup.groupID;
            if (groupID.hasMask(checkGroupID)) {
                matchGroups.groups.push(checkGroup);
            }
        }

        return matchGroups;
    }
}

export class ComponentGroupContext extends GroupContext {
    constructor(entityCtx: EntityContext) {
        super(entityCtx, "groupID");
    }

    create(...classes: any[]): EntityGroup {
        let groupID = theFramePool.allocItem("GroupID", GroupID);
        groupID.reset();

        let ctx = this._entityCtx;
        for (let cls of classes) {
            if (cls) {
                groupID.set(ctx.getOrRegClassID(cls));
            }
        }
        return this.getOrCreateGroupByID(groupID);
    }
}
