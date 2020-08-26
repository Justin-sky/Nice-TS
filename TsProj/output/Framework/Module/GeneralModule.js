"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModuleBase_1 = require("./ModuleBase");
const Logger_1 = require("../Logger/Logger");
class GeneralModule extends ModuleBase_1.ModuleBase {
    constructor() {
        super();
        this.m_name = "";
    }
    get Name() {
        return this.m_name;
    }
    //创建模块
    create(args) {
        Logger_1.Logger.log("args: " + args);
    }
    //释放模块
    release() {
    }
    //当模块收到消息后，对消息进行一些处理
    handleMessage(msg, ...args) {
        this.onModuleMessage(msg, args);
    }
}
exports.GeneralModule = GeneralModule;
//# sourceMappingURL=GeneralModule.js.map