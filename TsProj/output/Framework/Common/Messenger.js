"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Messenger {
    constructor() {
        this.listenerMap = new Map();
    }
    addListener(e_type, e_listner, ...params) {
        let listeners = this.listenerMap.get(e_type);
        if (typeof (listeners) == "undefined") {
            listeners = Array();
        }
        listeners.push(e_listner);
        this.listenerMap.set(e_type, listeners);
    }
    broadcast(e_type, ...params) {
        let listeners = this.listenerMap.get(e_type);
        if (typeof (listeners) != "undefined") {
            for (let l of listeners) {
                l.apply(this, params);
            }
        }
    }
    removeListenerByType(e_type) {
        this.listenerMap.delete(e_type);
    }
    removeListener(e_type, e_listener) {
        let listeners = this.listenerMap.get(e_type);
        if (typeof (listeners) != "undefined") {
            for (let i = 0; i < listeners.length; i++) {
                if (listeners[i] == e_listener) {
                    listeners.splice(i, 1);
                }
            }
        }
    }
    clearup() {
        this.listenerMap.clear();
    }
}
exports.Messenger = Messenger;
//# sourceMappingURL=Messenger.js.map