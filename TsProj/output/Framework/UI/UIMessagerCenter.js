"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../Common/Singleton");
const Messenger_1 = require("../Common/Messenger");
var UIMsgE;
(function (UIMsgE) {
    UIMsgE[UIMsgE["PageBack"] = 0] = "PageBack";
    UIMsgE[UIMsgE["WindowClose"] = 1] = "WindowClose";
})(UIMsgE = exports.UIMsgE || (exports.UIMsgE = {}));
class UIMessageCenter extends Singleton_1.Singleton {
    constructor() {
        super();
        this.uiMessager = new Messenger_1.Messenger();
    }
    AddListener(e_type, listener) {
        this.uiMessager.addListener(e_type, listener);
    }
    RemoveListener(e_type, listener) {
        this.uiMessager.removeListener(e_type, listener);
    }
    RemoveListerByType(e_type) {
        this.uiMessager.removeListenerByType(e_type);
    }
    Broadcast(e_type, ...params) {
        this.uiMessager.broadcast(e_type, params);
    }
}
exports.UIMessageCenter = UIMessageCenter;
//# sourceMappingURL=UIMessagerCenter.js.map