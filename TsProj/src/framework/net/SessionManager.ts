
import { Opcode } from "../../data/pb/Opcode";
import { GameConfig } from "../../global/GameConfig";
import { Singleton } from "../common/Singleton";
import { Logger } from "../logger/Logger";
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

    public async connectRealmServer():Promise<boolean> {

        let promise = new Promise<boolean>(resove =>{
            this.sessionReam = GameSession.Instance(GameSession).connectChannel(
                GameConfig.realmServerIP+":"+GameConfig.realmServerPort,
                (channel:any,code:number)=>{
                    if(code == NetErrorCode.ERR_SocketConnSucc){
                        this.sessionReam.id = channel.Id;
                  
                        resove(true);
                    }else{
            
                        resove(false);
            
                        Logger.error("login reamserver err, code: "+code + ",id:"+channel.Id);
            
                    }
                }
            );

        });
        return promise
    }

    
    public disconnectRealmServer(){
        this.sessionReam.disconnect();
        this.sessionReam = null;
    }


    public async sendRealmMsg(opcode:number,msg:any):Promise<any>{
        
        let rpcID = this.sessionReam.rpcId
        let promise = new Promise<any>((resove) => {

            let buf = Opcode.encode(opcode, msg)

            this.sessionReam.send(opcode, rpcID, buf, (response:any)=>{
            
                resove(response)
            });
        })
        
        return promise
    }


    public async connectGateServer(address:string):Promise<boolean>{

        let promise = new Promise<boolean>(resove =>{
            this.sessionGate = GameSession.Instance(GameSession).connectChannel(
                address,
                (channel:any,code:number)=>{
                    Logger.log("login Gate Server: "+code);
    
                    if(code == NetErrorCode.ERR_SocketConnSucc){
                        this.sessionGate.id = channel.Id;
                    
                        resove(true)
                    }else{
                        resove(false)
            
                        Logger.error("gate server err, code: "+code + ",id:"+channel.Id);
                    }
                }
            );

        });
        return promise
    }


    public disconnectGateServer(){
        this.sessionGate.disconnect();
        this.sessionGate = null;
    }

    public async sendGateMsg(opcode:number, msg:any):Promise<any>{

        let rpcID = this.sessionGate.rpcId
        let promise = new Promise<any>((resove) => {

            let buf = Opcode.encode(opcode, msg)

            this.sessionGate.send(opcode, rpcID, buf, (response:any)=>{
            
                resove(response)
            });
        })
        
        return promise

    }
}   
