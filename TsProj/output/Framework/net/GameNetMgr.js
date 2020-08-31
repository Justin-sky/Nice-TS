"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../common/Singleton");
class GameNetMgr extends Singleton_1.Singleton {
    constructor() {
        super(...arguments);
        this.rpcId = 1;
    }
}
exports.GameNetMgr = GameNetMgr;
//# sourceMappingURL=GameNetMgr.js.map