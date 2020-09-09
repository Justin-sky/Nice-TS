"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeModule = void 0;
const GeneralModule_1 = require("../../framework/module/GeneralModule");
const Logger_1 = require("../../framework/logger/Logger");
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
}
exports.HomeModule = HomeModule;
//# sourceMappingURL=HomeModule.js.map