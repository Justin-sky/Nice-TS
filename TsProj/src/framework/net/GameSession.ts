import { Singleton } from "../common/Singleton";
import { Logger } from "../logger/Logger";
import { Opcode } from "../../data/pb/Opcode";
import { NetErrorCode } from "./NetErrorCode";

const CS = require('csharp');


export class MsgPack{
    public sendTime:number;
    public callback:Function;
    public retryTimes:number = 0;
    public bytes:Uint8Array;
}

export class GameSession extends Singleton<GameSession>{

    public id:number = 0;  //session ID
    private reSendInterval:number = 10; //10秒重发一次
    private maxReSendTimes:number = 5; //最大重发次数
    private timeoutInterval:any;

    private _rpcId:number = 1;
    private channel:any;
    private requestCallback:Map<number,MsgPack> = new Map<number,MsgPack>();


    private _connCallback:any;
    private _readCallback:any;

    constructor(){
        super();
    }

    public get rpcId():number{
        return ++this._rpcId;
    }

    //address-> ip:port
    public connectChannel(address:string, connCaback:any){

        this.channel = CS.NiceTS.TService.Instance.GetChannel();
        
        this._connCallback = (channel:any, code:number)=>{
            if(code == NetErrorCode.ERR_SocketConnSucc){
                this.timeoutInterval = setInterval(()=>{
                    this.checkTimeoutMsg();
                }, 5000);
            }

            connCaback(channel, code);
        };
        this.channel.add_ErrorCallback(this._connCallback);
        
        
        this._readCallback = (bytes:Uint8Array)=>{
            this.onReceive(bytes);
        };
        this.channel.add_ReadCallback = this._readCallback;


        this.channel.Connect(address);

        return this;
    }

    //发送protoubf消息
    public send(opcode:number,rpcid:number, message:Uint8Array, callBack:Function){
        
        //封装消息：opcode+msg
        let lenBuf:Uint8Array = new Uint8Array(4);
        lenBuf[0] = opcode >>> 24;
        lenBuf[1] = opcode >>> 16;
        lenBuf[2] = opcode >>> 8;
        lenBuf[3] = opcode & 0xff;

        let sendArray:Uint8Array = new Uint8Array(message.length + 4);
        sendArray.set(lenBuf);
        sendArray.set(message,4);
        
        if(callBack != null){
            let msgPack:MsgPack = new MsgPack();
            msgPack.sendTime = new Date().getTime();
            msgPack.callback = callBack;
            msgPack.bytes = sendArray;

            this.requestCallback.set(rpcid, msgPack);
        }
        this.channel.Send(sendArray);
    }

    private reSend(bytes:Uint8Array){
        this.channel.Send(bytes);
    }

    public onReceive(bytes:Uint8Array){

        let  opcode = bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3];;
        let msgBytes:Uint8Array = bytes.subarray(4);
        
        let msg = Opcode.map[opcode](msgBytes);
        let rpcId = msg.rpcId;


        if(!this.requestCallback.has(rpcId)){
            Logger.logError(`not found rpc, response message:${rpcId}`);
        }else{
            let msgPack:MsgPack = this.requestCallback.get(rpcId);
            msgPack.callback(msg);  

            this.requestCallback.delete(rpcId);

        }

    }

    private checkTimeoutMsg(){

        let currTime = new Date().getTime();

        this.requestCallback.forEach((value, key) =>{

            if(value.retryTimes >= this.maxReSendTimes) {
                //超过最大重发次数，丢弃
                Logger.log(`Message resend too more, opcode:${key}, lastsend:${value.sendTime}`);
                this.requestCallback.delete(key); 
            }else{

                if((currTime - value.sendTime) >= this.reSendInterval){
                    value.retryTimes++;
                    value.sendTime = currTime;
                    //重发消息
                    this.reSend(value.bytes);
                    Logger.log(`resend message:, opcode:${key}, retry times:${value.retryTimes}`);
                }
            }
        });
    }


    public disconnect():void{

        this.channel.remove_ErrorCallback(this._connCallback);
        this.channel.remove_ReadCallback = this._readCallback;

        clearInterval(this.timeoutInterval);

        this.channel.Dispose();
    }
}