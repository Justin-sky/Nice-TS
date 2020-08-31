"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../common/Singleton");
const Logger_1 = require("../logger/Logger");
const CS = require('csharp');
class MsgPack {
    constructor() {
        this.retryTimes = 0;
    }
}
exports.MsgPack = MsgPack;
class GameSession extends Singleton_1.Singleton {
    constructor() {
        super();
        this.reSendInterval = 10; //10秒重发一次
        this.maxReSendTimes = 5; //最大重发次数
        this._rpcId = 1;
        this.requestCallback = new Map();
    }
    get rpcId() {
        this._rpcId++;
        return this.rpcId;
    }
    //address-> ip:port
    connectChannel(address) {
        this.channel = CS.NiceTS.TService.Instance.ConnectChannel(address);
        this.channel.ReadCallback = (bytes) => {
            this.onReceive(bytes);
        };
    }
    //发送protoubf消息
    send(opcode, rpcid, message, callBack) {
        //封装消息：opcode+msg
        let sendArray = new Uint8Array();
        if (callBack != null) {
            let msgPack = new MsgPack();
            msgPack.sendTime = new Date().getTime();
            msgPack.callback = callBack;
            msgPack.bytes = sendArray;
            this.requestCallback.set(rpcid, msgPack);
        }
        this.channel.Send(sendArray);
    }
    reSend(bytes) {
        this.channel.Send(bytes);
    }
    onReceive(bytes) {
        let opcode = 0;
        let msg = null;
        let rpcId = 0;
        if (!this.requestCallback.has(rpcId)) {
            Logger_1.Logger.logError(`not found rpc, response message:${rpcId}`);
        }
        else {
            let msgPack = this.requestCallback.get(rpcId);
            msgPack.callback(msg);
            this.requestCallback.delete(rpcId);
        }
    }
    checkTimeoutMsg() {
        let currTime = new Date().getTime();
        this.requestCallback.forEach((value, key) => {
            if (value.retryTimes >= this.maxReSendTimes) {
                //超过最大重发次数，丢弃
                Logger_1.Logger.log(`Message resend too more, opcode:${key}, lastsend:${value.sendTime}`);
                this.requestCallback.delete(key);
            }
            else {
                if ((currTime - value.sendTime) >= this.reSendInterval) {
                    value.retryTimes++;
                    value.sendTime = currTime;
                    //重发消息
                    this.reSend(value.bytes);
                    Logger_1.Logger.log(`resend message:, opcode:${key}, retry times:${value.retryTimes}`);
                }
            }
        });
    }
}
exports.GameSession = GameSession;
//# sourceMappingURL=GameSession.js.map