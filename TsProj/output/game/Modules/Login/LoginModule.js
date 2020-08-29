"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModule = void 0;
const GeneralModule_1 = require("../../../framework/module/GeneralModule");
const Logger_1 = require("../../../framework/logger/Logger");
class LoginModule extends GeneralModule_1.GeneralModule {
    create(args) {
        Logger_1.Logger.log(" Login creeate,args: " + args);
    }
    show(args) {
        Logger_1.Logger.log(" Show,args: " + args);
        // UIManager.Instance(UIManager).openLoading(UIDefs.UIHomePage);
        // UIManager.Instance(UIManager).openPageInScene(SceneDef.LoginScene, UIDefs.UILoginPage, null);
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