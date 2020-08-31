"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../common/Singleton");
const Session_1 = require("./Session");
class GameMsgMgr extends Singleton_1.Singleton {
    constructor() {
        super();
        this.session = new Session_1.Session();
    }
    connect(address) {
        this.session.connectChannel(address);
    }
}
exports.GameMsgMgr = GameMsgMgr;
//# sourceMappingURL=GameMsgMgr.js.map