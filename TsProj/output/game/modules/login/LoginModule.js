"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralModule_1 = require("../../../framework/module/GeneralModule");
const Logger_1 = require("../../../framework/logger/Logger");
const UIManager_1 = require("../../../framework/manager/UIManager");
const ModuleDef_1 = require("../ModuleDef");
const game_1 = require("../../../data/ui/game");
const GameConfig_1 = require("../../../global/GameConfig");
const NetErrorCode_1 = require("../../../framework/net/NetErrorCode");
const CS = require('csharp');
class LoginModule extends GeneralModule_1.GeneralModule {
    create(args) {
        this.messenger.addListener(ModuleDef_1.ModuleMessage.LOGIN_REAMSERVER, this, this.loginReamServer);
    }
    show(args) {
        UIManager_1.UIManager.Instance(UIManager_1.UIManager).openPageInScene(ModuleDef_1.SceneDef.LoginScene, game_1.gameUI.PackageName, game_1.gameUI.UILoginPage, args);
    }
    release() {
        this.messenger.removeListener(ModuleDef_1.ModuleMessage.LOGIN_REAMSERVER, this.loginReamServer);
    }
    loginReamServer(account, password) {
        Logger_1.Logger.log(account + "=======" + password);
        //登录验证服
        let reamChannel = CS.NiceTS.TService.Instance.GetChannel();
        reamChannel.add_ErrorCallback((channel, code) => {
            this.onReamSocketErr(channel, code);
        });
        reamChannel.Connect(GameConfig_1.GameConfig.realmServerIP + ":" + GameConfig_1.GameConfig.realmServerPort);
        // UIManager.Instance(UIManager).enterMainPage();
    }
    onReamSocketErr(channel, code) {
        Logger_1.Logger.log("socket code: " + code);
        if (code == NetErrorCode_1.NetErrorCode.ERR_SocketConnSucc) {
        }
    }
}
exports.LoginModule = LoginModule;
//# sourceMappingURL=LoginModule.js.map