import { Singleton } from "../common/Singleton";
import { Opcode } from "../../data/pb/Opcode";
import { NetErrorCode } from "./NetErrorCode";
import { NiceTS } from "csharp";


export class MsgPack{
    public sendTime:number;
    public callback:Function;
    public retryTimes:number = 0;
    public bytes:Uint8Array;
}

export class GameSession extends Singleton<GameSession>{

    public id:number = 0;  //session ID
    private reSendInterval:number = 10000; //10秒重发一次
    private timeoutInterval:number = 5000; //5秒检查一次是否超时
    private maxReSendTimes:number = 5; //最大重发次数
    private timeoutIimer:any;

    private _rpcId:number = 1;
    private channel:any;
    private requestCallback:Map<number,MsgPack> = new Map<number,MsgPack>();
    private listeners:Map<number,Function> = new Map<number,Function>();

    constructor(){
        super();
    }

    public get rpcId():number{
        return ++this._rpcId;
    }

    //address-> ip:port
    public connectChannel(address:string, connCaback:any){

        this.channel = NiceTS.TService.Instance.GetChannel();
        
        this.channel.errorCallback = (channel:any, code:number)=>{
            if(code == NetErrorCode.ERR_SocketConnSucc){
                this.timeoutIimer = setInterval(()=>{
                    this.checkTimeoutMsg();
                }, this.timeoutInterval);
            }

            connCaback(channel, code);
        };
        
        this.channel.readCallback = (buffer:Uint8Array)=>{
            this.onReceive(buffer);
        };

        this.channel.Connect(address);

        return this;
    }

    //接收服务器通知
    public listen(opcode:number,callback:Function){
        this.listeners.set(opcode, callback);
    }

    //发送protoubf消息
    public send(opcode:number,rpcid:number, message:Uint8Array, callBack:Function){
        
        //封装消息：opcode+msg
        let lenBuf:Uint8Array = new Uint8Array(2);
        lenBuf[1] = opcode >>> 8;
        lenBuf[0] = opcode & 0xff;

        let sendArray:Uint8Array = new Uint8Array(message.length + 2);
        sendArray.set(lenBuf);
        sendArray.set(message,2);
        
        if(callBack != null){
            let msgPack:MsgPack = new MsgPack();
            msgPack.sendTime = new Date().getTime();
            msgPack.callback = callBack;
            msgPack.bytes = sendArray;

            this.requestCallback.set(rpcid, msgPack);
        }

        //Logger.log("send array: "+sendArray);
        this.channel.Send(sendArray);
    }

    private reSend(bytes:Uint8Array){
        this.channel.Send(bytes);
    }

    public onReceive(buffer:Uint8Array){
        
        let msgBuf = new Uint8Array(buffer);

        let  opcode = msgBuf[1] << 8 | msgBuf[0];
         let msgBytes:Uint8Array = msgBuf.subarray(2);

        let decodeMsg =  Opcode.decode(opcode, msgBytes);
        let rpcId = decodeMsg.rpcId;


        if(rpcId==undefined || !this.requestCallback.has(rpcId)){
            //检查是否是服务器下发的消息
            if(this.listeners.has(opcode)){
                let listen = this.listeners.get(opcode);
                listen(decodeMsg.msgObj);
            }

        }else{
            let msgPack:MsgPack = this.requestCallback.get(rpcId);
            msgPack.callback(decodeMsg.msgObj);  

            this.requestCallback.delete(rpcId);

        }

    }

    private checkTimeoutMsg(){

        let currTime = new Date().getTime();

        this.requestCallback.forEach((value, key) =>{

            if(value.retryTimes >= this.maxReSendTimes) {
                //超过最大重发次数，丢弃
                console.log(`Message resend too more, opcode:${key}, lastsend:${value.sendTime}`);
                this.requestCallback.delete(key); 
            }else{

                if((currTime - value.sendTime) >= this.reSendInterval){
                    value.retryTimes++;
                    value.sendTime = currTime;
                    //重发消息
                    this.reSend(value.bytes);
                    console.log(`resend message:, opcode:${key}, retry times:${value.retryTimes}`);
                }
            }
        });
    }


    public disconnect():void{

        clearInterval(this.timeoutIimer);

        this.channel.Dispose();
    }
}