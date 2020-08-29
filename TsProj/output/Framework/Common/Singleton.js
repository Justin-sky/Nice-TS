"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    static Instance(c) {
        if (this.instance == null) {
            this.instance = new c();
        }
        return this.instance;
    }
}
exports.Singleton = Singleton;
Singleton.instance = null;
//# sourceMappingURL=Singleton.js.map