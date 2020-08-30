"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModule = void 0;
const GeneralModule_1 = require("../../../framework/module/GeneralModule");
const Logger_1 = require("../../../framework/logger/Logger");
const UIManager_1 = require("../../../framework/manager/UIManager");
const ModuleDef_1 = require("../ModuleDef");
const UIDefine_1 = require("../../../framework/ui/UIDefine");
class LoginModule extends GeneralModule_1.GeneralModule {
    create(args) {
        Logger_1.Logger.log(" Login creeate,args: " + args);
    }
    show(args) {
        Logger_1.Logger.log(" Show,args: " + args);
        UIManager_1.UIManager.Instance(UIManager_1.UIManager).openPageInScene(ModuleDef_1.SceneDef.LoginScene, UIDefine_1.UIPackages.Game, UIDefine_1.UIDefs.UILoginPage, null);
    }
    release() {
        Logger_1.Logger.log("Login Release ");
    }
    onModuleMessage(msg, ...args) {
        Logger_1.Logger.log(`Login: ${msg} : ${args}`);
    }
}
exports.LoginModule = LoginModule;
//# sourceMappingURL=LoginModule.js.map