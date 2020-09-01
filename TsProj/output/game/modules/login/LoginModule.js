"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralModule_1 = require("../../../framework/module/GeneralModule");
const Logger_1 = require("../../../framework/logger/Logger");
const UIManager_1 = require("../../../framework/manager/UIManager");
const ModuleDef_1 = require("../ModuleDef");
const game_1 = require("../../../data/ui/game");
class LoginModule extends GeneralModule_1.GeneralModule {
    constructor() {
        super(...arguments);
        this.a = 9999;
    }
    create(args) {
        this.messenger.addListener(ModuleDef_1.ModuleMessage.LOGIN_REAMSERVER, this, this.loginReamServer);
    }
    show(args) {
        UIManager_1.UIManager.Instance(UIManager_1.UIManager).openPageInScene(ModuleDef_1.SceneDef.LoginScene, game_1.gameUI.PackageName, game_1.gameUI.UILoginPage, null);
    }
    release() {
        this.messenger.removeListener(ModuleDef_1.ModuleMessage.LOGIN_REAMSERVER, this.loginReamServer);
    }
    loginReamServer(account, password) {
        Logger_1.Logger.log(account + "=======" + password + " ==" + this.a);
        UIManager_1.UIManager.Instance(UIManager_1.UIManager).enterMainPage();
    }
}
exports.LoginModule = LoginModule;
//# sourceMappingURL=LoginModule.js.map