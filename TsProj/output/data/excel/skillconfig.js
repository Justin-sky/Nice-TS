"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../../framework/common/Singleton");
class SkillConfigTR {
    constructor(_id, _Name, _Description, _CoolTime, _CostSP, _AttackDistance, _AttackAngle, _AttackTargetTags, _ImpactType, _NextBattlerId, _AtkRatio, _DurationTime, _AtkInterval, _SkillPrefab, _AnimationName, _HitFxPrefab, _Level, _AttackType, _SelectorType) {
        this._id = _id;
        this._Name = _Name;
        this._Description = _Description;
        this._CoolTime = _CoolTime;
        this._CostSP = _CostSP;
        this._AttackDistance = _AttackDistance;
        this._AttackAngle = _AttackAngle;
        this._AttackTargetTags = _AttackTargetTags;
        this._ImpactType = _ImpactType;
        this._NextBattlerId = _NextBattlerId;
        this._AtkRatio = _AtkRatio;
        this._DurationTime = _DurationTime;
        this._AtkInterval = _AtkInterval;
        this._SkillPrefab = _SkillPrefab;
        this._AnimationName = _AnimationName;
        this._HitFxPrefab = _HitFxPrefab;
        this._Level = _Level;
        this._AttackType = _AttackType;
        this._SelectorType = _SelectorType;
    }
}
exports.SkillConfigTR = SkillConfigTR;
class SkillConfigTB extends Singleton_1.Singleton {
    constructor() {
        super();
        this.trs = new Map();
        this.trs.set(1001, new SkillConfigTR(1001, "降龙十八掌", "带有强力攻击技能", 10, 178, 1, 30, ["Enemy"], ["CostSP", "Damage"], 0, 2, 2, 1, "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", "skill1", "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", 1, 1, 1));
        this.trs.set(1002, new SkillConfigTR(1002, "暴雨梨花", "带有强力攻击技能", 10, 178, 1, 30, ["Enemy"], ["CostSP", "Damage"], 0, 2, 2, 1, "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", "skill2", "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", 1, 1, 1));
        this.trs.set(1003, new SkillConfigTR(1003, "排山倒海", "带有强力攻击技能", 10, 178, 1, 30, ["Enemy"], ["CostSP", "Damage"], 0, 2, 2, 1, "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", "skill3", "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", 1, 1, 1));
        this.trs.set(1004, new SkillConfigTR(1004, "葵花点穴手", "带有强力攻击技能", 10, 178, 1, 30, ["Enemy"], ["CostSP", "Damage"], 0, 2, 2, 1, "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", "skill4", "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", 1, 1, 1));
    }
}
exports.SkillConfigTB = SkillConfigTB;
//# sourceMappingURL=SkillConfig.js.map