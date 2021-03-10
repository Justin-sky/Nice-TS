import { Singleton } from "../common/Singleton";
import { Opcode } from "../../data/pb/Opcode";
import { NetErrorCode } from "./NetErrorCode";
import { NiceTS } from "csharp";
import { MessageParser } from "./MessageParser";
import { Logger } from "../logger/Logger";


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

    //返回的服务器ID, 类型
    private _serverId:number = -1;
    private _serverType:number = 1;

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
    //消息： rpc_id[4] - opcode[2] - server_id[2] - server_type[1] - 
    public send(opcode:number,rpcid:number, message:Uint8Array, callBack:Function){
        
        //封装消息：
        let rpcBuf:Uint8Array = MessageParser.encodeInt(rpcid); //4
        let opcodeBuf:Uint8Array = MessageParser.encodeShort(opcode); //2
        let serveridBuf:Uint8Array = MessageParser.encodeShort(this._serverId); //2
        let servertypeBuf:Uint8Array = MessageParser.encodeByte(this._serverType); //1


        let sendArray:Uint8Array = new Uint8Array(4 + 2 + 2 + 1 +message.length);
        sendArray.set(rpcBuf);
        sendArray.set(opcodeBuf,    4);
        sendArray.set(serveridBuf,  4 + 2);
        sendArray.set(servertypeBuf, 4 + 2 + 2);
        sendArray.set(message,       4 + 2 + 2 + 1);
        
        if(callBack != null){
            let msgPack:MsgPack = new MsgPack();
            msgPack.sendTime = new Date().getTime();
            msgPack.callback = callBack;
            msgPack.bytes = sendArray;

            this.requestCallback.set(rpcid, msgPack);
        }
        // for(let i in sendArray){
        //     Logger.log("TS -- send array: "+i);
        // }
        //Logger.log("send array: "+sendArray);
        this.channel.Send(sendArray);
    }

    private reSend(bytes:Uint8Array){
        this.channel.Send(bytes);
    }

    public onReceive(buffer:Uint8Array){
        
        let msgBuf = new Uint8Array(buffer);

        let rpcid = MessageParser.decodeInt(msgBuf.subarray(0,4));
        let opcode = MessageParser.decodeShort(msgBuf.subarray(4,6));
        let serverid = MessageParser.decodeShort(msgBuf.subarray(6,8));
        let servertype = MessageParser.decodeByte(msgBuf.subarray(8,9));

        this._serverId = serverid;
        this._serverType = servertype;

        let msgBytes:Uint8Array = msgBuf.subarray(9);

        try{
            let decodeMsg =  Opcode.decode(opcode, msgBytes);


            if(rpcid==undefined || !this.requestCallback.has(rpcid)){
                //检查是否是服务器下发的消息
                if(this.listeners.has(opcode)){
                    let listen = this.listeners.get(opcode);
                    listen(decodeMsg.msgObj);
                }
    
            }else{
                let msgPack:MsgPack = this.requestCallback.get(rpcid);
                msgPack.callback(decodeMsg.msgObj);  
    
                this.requestCallback.delete(rpcid);
    
            }
        }catch(e){
            Logger.error("parse msg error, opcode:"+opcode)
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

        clearInterval(this.timeoutIimer);

        this.channel.Dispose();
    }
}