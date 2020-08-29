import { Singleton } from "../../framework/common/Singleton";
export class UnitConfigTR{
	 public _id:number ;
	 public _Name:string ;
	 public _Desc:string ;
	 public _Position:number ;
	 public _Height:number ;
	 public _Weight:number ;

	constructor(_id:number, _Name:string, _Desc:string, _Position:number, _Height:number, _Weight:number){
		this._id = _id;
		this._Name = _Name;
		this._Desc = _Desc;
		this._Position = _Position;
		this._Height = _Height;
		this._Weight = _Weight;

	}
}

export class UnitConfigTB extends Singleton<UnitConfigTB>{ 
	public trs:Map<number, UnitConfigTR> = new Map<number, UnitConfigTR>();
	constructor(){
		super();
		this.trs.set(1001, new UnitConfigTR(1001, "米克尔", "带有强力攻击技能", 1, 178, 68));
	 }
}

