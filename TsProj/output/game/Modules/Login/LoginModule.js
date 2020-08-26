"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralModule_1 = require("../../../Framework/Module/GeneralModule");
const Logger_1 = require("../../../Framework/Logger/Logger");
class LoginModule extends GeneralModule_1.GeneralModule {
    create(args) {
        Logger_1.Logger.log(" Login creeate,args: " + args);
    }
    show(args) {
        Logger_1.Logger.log(" Show,args: " + args);
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