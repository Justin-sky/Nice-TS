
import { GameConfig } from "../../global/GameConfig";
import { Singleton } from "../common/Singleton";
import { GameSession } from "./GameSession";
import { NetErrorCode } from "./NetErrorCode";


export class SessionManager extends Singleton<SessionManager>{

    private sessionReam:GameSession;
    private sessionGate:GameSession;


    public get realmRpcID(){
        return this.sessionReam.rpcId;
    }

    public get gateRpcID(){
        return this.sessionGate.rpcId;
    }

    public connectRealmServer(onSucc:Function, onError:Function){

        //登录验证服
        this.sessionReam = GameSession.Instance(GameSession).connectChannel(
            GameConfig.realmServerIP+":"+GameConfig.realmServerPort,
            (channel:any,code:number)=>{
                this.onReamSocketErr(channel, code, onSucc, onError);
            }
        );
    }

    public onReamSocketErr(channel:any, code:number, onSucc:Function, onError:Function){
       
        if(code == NetErrorCode.ERR_SocketConnSucc){
            this.sessionReam.id = channel.Id;
      
            onSucc(code);
        }else{

            onError(code);

            console.error("login reamserver err, code: "+code + ",id:"+channel.Id);

        }
    }
    
    public disconnectRealmServer(){
        this.sessionReam.disconnect();
        this.sessionReam = null;
    }


    public sendRealmMsg(opcode:number,rpcID:number, buf:Uint8Array,callback:Function){
        
        this.sessionReam.send(opcode, rpcID, buf, (response:any)=>{
            callback(response);
        });
    }


    public connectGateServer(address:string,onSucc:Function, onError:Function){

        this.sessionGate = GameSession.Instance(GameSession).connectChannel(
            address,
            (channel:any,code:number)=>{
                console.log("login Gate Server: "+code);

                this.onGateSocketErr(channel, code, onSucc, onError);
            }
        );
    }

    public onGateSocketErr(channel:any, code:number,onSucc:Function, onError:Function){
        if(code == NetErrorCode.ERR_SocketConnSucc){
            this.sessionGate.id = channel.Id;
        
            onSucc(code);

        }else{

            onError(code);

            console.error("gate server err, code: "+code + ",id:"+channel.Id);
        }

    }

    public disconnectGateServer(){
        this.sessionGate.disconnect();
        this.sessionGate = null;
    }

    public sendGateMsg(opcode:number,rpcID:number, buf:Uint8Array,callback:Function){

        this.sessionGate.send(opcode, rpcID, buf, (response:any)=>{

           callback(response);
        });
    }
}   
