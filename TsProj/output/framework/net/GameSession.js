"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../common/Singleton");
const Logger_1 = require("../logger/Logger");
const Opcode_1 = require("../../data/pb/Opcode");
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
        this.id = 0; //session ID
        this.reSendInterval = 10; //10秒重发一次
        this.maxReSendTimes = 5; //最大重发次数
        this._rpcId = 1;
        this.requestCallback = new Map();
    }
    get rpcId() {
        return ++this._rpcId;
    }
    //address-> ip:port
    connectChannel(address, connCaback) {
        this.channel = CS.NiceTS.TService.Instance.GetChannel();
        this.channel.add_ErrorCallback(connCaback);
        this.channel.add_ReadCallback = (bytes) => {
            this.onReceive(bytes);
        };
        this.channel.Connect(address);
        return this;
    }
    //发送protoubf消息
    send(opcode, rpcid, message, callBack) {
        //封装消息：opcode+msg
        let lenBuf = new Uint8Array(4);
        lenBuf[0] = opcode >>> 24;
        lenBuf[1] = opcode >>> 16;
        lenBuf[2] = opcode >>> 8;
        lenBuf[3] = opcode & 0xff;
        let sendArray = new Uint8Array(message.length + 4);
        sendArray.set(lenBuf);
        sendArray.set(message, 4);
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
        let opcode = bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3];
        ;
        let msgBytes = bytes.subarray(4);
        let msg = Opcode_1.Opcode.map[opcode](msgBytes);
        let rpcId = msg.rpcId;
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
    disconnect() {
        this.channel.Dispose();
    }
}
exports.GameSession = GameSession;
//# sourceMappingURL=GameSession.js.map