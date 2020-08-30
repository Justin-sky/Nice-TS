"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModuleBase_1 = require("./ModuleBase");
class GeneralModule extends ModuleBase_1.ModuleBase {
    constructor() {
        super();
        this.m_name = "";
    }
    get Name() {
        return this.m_name;
    }
    //当模块收到消息后，对消息进行一些处理
    handleMessage(msg, ...args) {
        this.onModuleMessage(msg, args);
    }
}
exports.GeneralModule = GeneralModule;
//# sourceMappingURL=GeneralModule.js.map