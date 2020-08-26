"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralModule_1 = require("../../../Framework/Module/GeneralModule");
const Logger_1 = require("../../../Framework/Logger/Logger");
class HomeModule extends GeneralModule_1.GeneralModule {
    create(args) {
        Logger_1.Logger.log(" Home creeate,args: " + args);
    }
    show(args) {
        Logger_1.Logger.log(" Show,args: " + args);
    }
    release() {
        Logger_1.Logger.log("Home Release ");
    }
    onModuleMessage(msg, ...args) {
        Logger_1.Logger.log(`Home: ${msg} : ${args}`);
    }
}
exports.HomeModule = HomeModule;
//# sourceMappingURL=HomeModule.js.map