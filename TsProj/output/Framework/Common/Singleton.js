"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    static Instance(c) {
        if (this.instance == null) {
            this.instance = new c();
        }
        return this.instance;
    }
}
Singleton.instance = null;
exports.Singleton = Singleton;
//# sourceMappingURL=Singleton.js.map