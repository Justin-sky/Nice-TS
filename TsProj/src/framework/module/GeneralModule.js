"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralModule = void 0;
const Messenger_1 = require("../common/Messenger");
class GeneralModule {
    constructor() {
        this.m_name = "";
        this.messenger = new Messenger_1.Messenger();
    }
    get Name() {
        return this.m_name;
    }
    //当模块收到消息后，对消息进行一些处理
    handleMessage(msg, args) {
        let mesObj = this.messenger.getListener(msg);
        if (typeof (mesObj) != "undefined") {
            for (let l of mesObj.listeners) {
                l.apply(mesObj.obj, args);
            }
        }
    }
}
exports.GeneralModule = GeneralModule;
//# sourceMappingURL=GeneralModule.js.map