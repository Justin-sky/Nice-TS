"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleFactory = void 0;
const ModuleDef_1 = require("../../Game/Modules/ModuleDef");
const LoginModule_1 = require("../../game/Modules/login/LoginModule");
const HomeModule_1 = require("../../game/Modules/home/HomeModule");
const Logger_1 = require("../logger/Logger");
class ModuleFactory {
    static createModule(name) {
        if (name == ModuleDef_1.ModuleDef.LoginModule) {
            return new LoginModule_1.LoginModule();
        }
        else if (name == ModuleDef_1.ModuleDef.HomeModule) {
            return new HomeModule_1.HomeModule();
        }
        Logger_1.Logger.logError(`创建Module失败： ${name}`);
        return null;
    }
}
exports.ModuleFactory = ModuleFactory;
//# sourceMappingURL=ModuleFactory.js.map