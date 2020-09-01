import { Singleton } from "../common/Singleton";
import { Logger } from "../logger/Logger";

const CS = require('csharp');


export class MsgPack{
    public sendTime:number;
    public callback:Function;
    public retryTimes:number = 0;
    public bytes:Uint8Array;
}

export class GameSession extends Singleton<GameSession>{

    private reSendInterval:number = 10; //10秒重发一次
    private maxReSendTimes:number = 5; //最大重发次数

    private _rpcId:number = 1;
    private channel:any;
    private requestCallback:Map<number,MsgPack> = new Map<number,MsgPack>();

    constructor(){
        super();
    }

    public get rpcId(){
        this._rpcId++;
        return this.rpcId;
    }

    //address-> ip:port
    public connectChannel(address:string, connCaback:any){

        this.channel = CS.NiceTS.TService.Instance.GetChannel();
        
        this.channel.add_ErrorCallback(connCaback);
        
        this.channel.add_ReadCallback = (bytes:Uint8Array)=>{
            this.onReceive(bytes);
        };


        this.channel.Connect(address);

        return this;
    }

    //发送protoubf消息
    public send(opcode:number,rpcid:number, message:Uint8Array, callBack:Function){
        
        //封装消息：opcode+msg
        let sendArray:Uint8Array = new Uint8Array();

        
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

        let  opcode = 0;
        let msg:any = null;
        let rpcId = 0;


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


}