import { Singleton } from "../../framework/common/Singleton";
export class HeroConfigTR{
	 public _id:number ;
	 public _BaseATK:number ;
	 public _SP:number ;
	 public _HP:number ;
	 public _AttackDistance:number ;
	 public _AttackInterval:number ;

	constructor(_id:number, _BaseATK:number, _SP:number, _HP:number, _AttackDistance:number, _AttackInterval:number){
		this._id = _id;
		this._BaseATK = _BaseATK;
		this._SP = _SP;
		this._HP = _HP;
		this._AttackDistance = _AttackDistance;
		this._AttackInterval = _AttackInterval;

	}
}

export class HeroConfigTB extends Singleton<HeroConfigTB>{ 
	public trs:Map<number, HeroConfigTR> = new Map<number, HeroConfigTR>();
	constructor(){
		super();
		this.trs.set(2001, new HeroConfigTR(2001, 100, 200, 200, 1, 1));
		this.trs.set(2002, new HeroConfigTR(2002, 101, 220, 202, 2, 2));
		this.trs.set(2003, new HeroConfigTR(2003, 104, 210, 200, 1, 3));
		this.trs.set(2004, new HeroConfigTR(2004, 109, 200, 200, 1, 2));
	 }
}

