"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModuleDef_1 = require("../../modules/ModuleDef");
const LoginModule_1 = require("../../modules/login/LoginModule");
const HomeModule_1 = require("../../modules/home/HomeModule");
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