import { Singleton } from "../../framework/common/Singleton";
import { HeroConfigTB } from "./HeroConfig";
import { SkillConfigTB } from "./SkillConfig";
import { UnitConfigTB } from "./UnitConfig";
export class ExcelManager extends Singleton<ExcelManager>{
	constructor(){
		super();
		HeroConfigTB.Instance(HeroConfigTB);
		SkillConfigTB.Instance(SkillConfigTB);
		UnitConfigTB.Instance(UnitConfigTB);
	}
 }
