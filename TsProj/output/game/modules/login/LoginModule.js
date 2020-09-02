"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralModule_1 = require("../../../framework/module/GeneralModule");
const Logger_1 = require("../../../framework/logger/Logger");
const UIManager_1 = require("../../../framework/manager/UIManager");
const ModuleDef_1 = require("../ModuleDef");
const game_1 = require("../../../data/ui/game");
const GameSession_1 = require("../../../framework/net/GameSession");
const GameConfig_1 = require("../../../global/GameConfig");
const Opcode_1 = require("../../../data/pb/Opcode");
const NetErrorCode_1 = require("../../../framework/net/NetErrorCode");
const OuterMessage_1 = require("../../../data/pb/OuterMessage");
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
        this.account = account;
        this.password = password;
        //登录验证服
        this.sessionReam = GameSession_1.GameSession.Instance(GameSession_1.GameSession).connectChannel(GameConfig_1.GameConfig.realmServerIP + ":" + GameConfig_1.GameConfig.realmServerPort, (channel, code) => {
            this.onReamSocketErr(channel, code);
        });
        // UIManager.Instance(UIManager).enterMainPage();
    }
    onReamSocketErr(channel, code) {
        Logger_1.Logger.log("socket code: " + code + ",id:" + this.sessionReam.id);
        if (code == NetErrorCode_1.NetErrorCode.ERR_SocketConnSucc) {
            this.sessionReam.id = channel.Id;
            //发送登录指令
            let rpcID = this.sessionReam.rpcId;
            let msg = OuterMessage_1.NiceET.C2R_Login.create();
            msg.RpcId = rpcID;
            msg.Account = this.account;
            msg.Password = this.password;
            let buf = OuterMessage_1.NiceET.C2R_Login.encode(msg).finish();
            this.sessionReam.send(Opcode_1.Opcode.C2R_LOGIN, rpcID, buf, (response) => {
                Logger_1.Logger.log(response);
                this.sessionReam.disconnect();
            });
        }
    }
}
exports.LoginModule = LoginModule;
//# sourceMappingURL=LoginModule.js.map