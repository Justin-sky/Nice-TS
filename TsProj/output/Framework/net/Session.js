"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require('csharp');
class GameSession {
    constructor() {
        this.rpcId = 1;
        this.requestCallback = new Map();
        let timeNow = new Date().getTime();
        this.lastRecvTime = timeNow;
        this.lastSendTime = timeNow;
    }
    //address-> ip:port
    connectChannel(address) {
        this.channel = CS.NiceTS.TService.Instance.ConnectChannel(address);
        this.channel.ReadCallback = (bytes) => {
            this.onReceive(bytes);
        };
    }
    //发送protoubf消息
    send(opcode, rpcid = 0, message) {
        this.lastSendTime = new Date().getTime();
        let sendArray = new Uint8Array();
        if (!this.requestCallback.has(rpcid)) {
        }
        this.channel.Send(sendArray);
    }
    onReceive(bytes) {
        let opcode = 0;
        let msg = null;
        this.lastRecvTime = new Date().getTime();
    }
}
exports.GameSession = GameSession;
//# sourceMappingURL=Session.js.map