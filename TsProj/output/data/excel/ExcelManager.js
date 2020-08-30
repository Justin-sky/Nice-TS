"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../../framework/common/Singleton");
const HeroConfig_1 = require("./HeroConfig");
const SkillConfig_1 = require("./SkillConfig");
const UnitConfig_1 = require("./UnitConfig");
class ExcelManager extends Singleton_1.Singleton {
    constructor() {
        super();
        HeroConfig_1.HeroConfigTB.Instance(HeroConfig_1.HeroConfigTB);
        SkillConfig_1.SkillConfigTB.Instance(SkillConfig_1.SkillConfigTB);
        UnitConfig_1.UnitConfigTB.Instance(UnitConfig_1.UnitConfigTB);
    }
}
exports.ExcelManager = ExcelManager;
//# sourceMappingURL=ExcelManager.js.map