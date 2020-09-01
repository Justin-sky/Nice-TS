"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralModule_1 = require("../../../framework/module/GeneralModule");
const Logger_1 = require("../../../framework/logger/Logger");
const UIManager_1 = require("../../../framework/manager/UIManager");
const ModuleDef_1 = require("../ModuleDef");
const game_1 = require("../../../data/ui/game");
class LoginModule extends GeneralModule_1.GeneralModule {
    create(args) {
        Logger_1.Logger.log(" Login creeate,args: " + args);
    }
    show(args) {
        Logger_1.Logger.log(" Show,args: " + args);
        UIManager_1.UIManager.Instance(UIManager_1.UIManager).openPageInScene(ModuleDef_1.SceneDef.LoginScene, game_1.gameUI.PackageName, game_1.gameUI.UILoginPage, null);
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