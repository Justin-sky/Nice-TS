"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameSession = exports.MsgPack = void 0;
const Singleton_1 = require("../common/Singleton");
const Logger_1 = require("../logger/Logger");
const Opcode_1 = require("../../data/pb/Opcode");
const NetErrorCode_1 = require("./NetErrorCode");
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
        this.reSendInterval = 10000; //10秒重发一次
        this.timeoutInterval = 5000; //5秒检查一次是否超时
        this.maxReSendTimes = 5; //最大重发次数
        this._rpcId = 1;
        this.requestCallback = new Map();
        this.listeners = new Map();
    }
    get rpcId() {
        return ++this._rpcId;
    }
    //address-> ip:port
    connectChannel(address, connCaback) {
        this.channel = CS.NiceTS.TService.Instance.GetChannel();
        this.channel.errorCallback = (channel, code) => {
            if (code == NetErrorCode_1.NetErrorCode.ERR_SocketConnSucc) {
                this.timeoutIimer = setInterval(() => {
                    // this.checkTimeoutMsg();
                }, this.timeoutInterval);
            }
            connCaback(channel, code);
        };
        this.channel.readCallback = (buffer) => {
            this.onReceive(buffer);
        };
        this.channel.Connect(address);
        return this;
    }
    //接收服务器通知
    listen(opcode, callback) {
        this.listeners.set(opcode, callback);
    }
    //发送protoubf消息
    send(opcode, rpcid, message, callBack) {
        //封装消息：opcode+msg
        let lenBuf = new Uint8Array(2);
        lenBuf[1] = opcode >>> 8;
        lenBuf[0] = opcode & 0xff;
        let sendArray = new Uint8Array(message.length + 2);
        sendArray.set(lenBuf);
        sendArray.set(message, 2);
        if (callBack != null) {
            let msgPack = new MsgPack();
            msgPack.sendTime = new Date().getTime();
            msgPack.callback = callBack;
            msgPack.bytes = sendArray;
            this.requestCallback.set(rpcid, msgPack);
        }
        //Logger.log("send array: "+sendArray);
        this.channel.Send(sendArray);
    }
    reSend(bytes) {
        this.channel.Send(bytes);
    }
    onReceive(buffer) {
        let msgBuf = new Uint8Array(buffer);
        let opcode = msgBuf[1] << 8 | msgBuf[0];
        let msgBytes = msgBuf.subarray(2);
        let decodeMsg = Opcode_1.Opcode.decode(opcode, msgBytes);
        let rpcId = decodeMsg.rpcId;
        if (rpcId == undefined || !this.requestCallback.has(rpcId)) {
            //检查是否是服务器下发的消息
            if (this.listeners.has(opcode)) {
                let listen = this.listeners.get(opcode);
                listen(decodeMsg.msgObj);
            }
        }
        else {
            let msgPack = this.requestCallback.get(rpcId);
            msgPack.callback(decodeMsg.msgObj);
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
        clearInterval(this.timeoutIimer);
        this.channel.Dispose();
    }
}
exports.GameSession = GameSession;
//# sourceMappingURL=GameSession.js.map