import { Singleton } from "../../framework/common/Singleton";
export class SkillConfigTR{
	 public _id:number ;
	 public _Name:string ;
	 public _Description:string ;
	 public _CoolTime:number ;
	 public _CostSP:number ;
	 public _AttackDistance:number ;
	 public _AttackAngle:number ;
	 public _AttackTargetTags:Array<string> ;
	 public _ImpactType:Array<string> ;
	 public _NextBattlerId:number ;
	 public _AtkRatio:number ;
	 public _DurationTime:number ;
	 public _AtkInterval:number ;
	 public _SkillPrefab:string ;
	 public _AnimationName:string ;
	 public _HitFxPrefab:string ;
	 public _Level:number ;
	 public _AttackType:number ;
	 public _SelectorType:number ;

	constructor(_id:number, _Name:string, _Description:string, _CoolTime:number, _CostSP:number, _AttackDistance:number, _AttackAngle:number, _AttackTargetTags:Array<string>, _ImpactType:Array<string>, _NextBattlerId:number, _AtkRatio:number, _DurationTime:number, _AtkInterval:number, _SkillPrefab:string, _AnimationName:string, _HitFxPrefab:string, _Level:number, _AttackType:number, _SelectorType:number){
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

export class SkillConfigTB extends Singleton<SkillConfigTB>{ 
	public trs:Map<number, SkillConfigTR> = new Map<number, SkillConfigTR>();
	constructor(){
		super();
		this.trs.set(1001, new SkillConfigTR(1001, "降龙十八掌", "带有强力攻击技能", 10, 178, 1, 30, ["Enemy"], ["CostSP", "Damage"], 0, 2, 2, 1, "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", "skill1", "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", 1, 1, 1));
		this.trs.set(1002, new SkillConfigTR(1002, "暴雨梨花", "带有强力攻击技能", 10, 178, 1, 30, ["Enemy"], ["CostSP", "Damage"], 0, 2, 2, 1, "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", "skill2", "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", 1, 1, 1));
		this.trs.set(1003, new SkillConfigTR(1003, "排山倒海", "带有强力攻击技能", 10, 178, 1, 30, ["Enemy"], ["CostSP", "Damage"], 0, 2, 2, 1, "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", "skill3", "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", 1, 1, 1));
		this.trs.set(1004, new SkillConfigTR(1004, "葵花点穴手", "带有强力攻击技能", 10, 178, 1, 30, ["Enemy"], ["CostSP", "Damage"], 0, 2, 2, 1, "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", "skill4", "Effect/Prefab/UI/ef_ui_TaskFinish.prefab", 1, 1, 1));
	 }
}

