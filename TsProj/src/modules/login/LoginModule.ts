import { GeneralModule } from "../../framework/module/GeneralModule";
import { LoggerJS } from "../../framework/logger/Logger";
import { UIManager } from "../../framework/ui/UIManager";
import { GameSession } from "../../framework/net/GameSession";
import { GameConfig } from "../../global/GameConfig";
import { Opcode } from "../../data/pb/Opcode";
import { NetErrorCode } from "../../framework/net/NetErrorCode";
import { NiceET } from "../../data/pb/OuterMessage";
import { ModuleMessage } from "../ModuleDef";



export class LoginModule extends GeneralModule{

    private sessionReam:GameSession;
    private sessionGate:GameSession;

    private account:string;
    private password:string;

    private gateId:any;
    private gateKey:number|Long;
    private _playerID:number|Long;

    public get playerID(){
        return this._playerID;
    }

    public create(args:any):void{
        this.messenger.addListener(ModuleMessage.LOGIN_REAMSERVER,this, this.loginReamServer);
   }

   
    public  release(): void{
        this.messenger.removeListener(ModuleMessage.LOGIN_REAMSERVER,this.loginReamServer);
    }


    public loginReamServer(account:string, password:string){

        this.account = account;
        this.password = password;

        //登录验证服
        this.sessionReam = GameSession.Instance(GameSession).connectChannel(
            GameConfig.realmServerIP+":"+GameConfig.realmServerPort,
            (channel:any,code:number)=>{
                this.onReamSocketErr(channel, code);
            }
        );
    }


    public onReamSocketErr(channel:any, code:number){
       
        if(code == NetErrorCode.ERR_SocketConnSucc){
            this.sessionReam.id = channel.Id;
      
            //发送登录指令
            let rpcID = this.sessionReam.rpcId;
            let msg = NiceET.C2R_Login.create();
            msg.RpcId = rpcID;
            msg.Account = this.account;
            msg.Password = this.password;
            let buf = NiceET.C2R_Login.encode(msg).finish();
            this.sessionReam.send(Opcode.C2R_LOGIN, rpcID, buf, (response:any)=>{
                
                //登录成功
                let msg  =  response as NiceET.R2C_Login;
                this.gateId = msg.GateId;
                this.gateKey = msg.Key;
                
                LoggerJS.log("login ream succ, gate addr:"+msg.Address + ",key:"+msg.Key);

                //断开认证服
                this.sessionReam.disconnect();
                this.sessionReam = null;
                //登录网关服
                this.loginGateServer(msg.Address);

            });
        }else{
            LoggerJS.logError("login reamserver err, code: "+code + ",id:"+channel.Id);

        }
    }

    //登录游戏服
    public loginGateServer(address:string){

        this.sessionGate = GameSession.Instance(GameSession).connectChannel(
            address,
            (channel:any,code:number)=>{
                LoggerJS.log("login Gate Server: "+code);

                this.onGateSocketErr(channel, code);
            }
        );
    }

    public onGateSocketErr(channel:any, code:number){
        if(code == NetErrorCode.ERR_SocketConnSucc){
            this.sessionGate.id = channel.Id;
        
            //发送登录请求
            let rpcId = this.sessionGate.rpcId;
            let msg = NiceET.C2G_LoginGate.create();
            msg.RpcId = rpcId;
            msg.GateId = this.gateId;
            msg.Key = this.gateKey;
            

            let buf = NiceET.C2G_LoginGate.encode(msg).finish();

            LoggerJS.log("login gate succ ,key: "+msg.Key + ", rpcid:"+rpcId);
            this.sessionGate.send(Opcode.C2G_LOGINGATE,rpcId,buf,(response:any)=>{

                let msg = response as NiceET.G2C_LoginGate;
               
                this._playerID = msg.PlayerId;
                LoggerJS.log("login gate response.." + msg.PlayerId);

                UIManager.Instance(UIManager).enterMainPage();

            });

        }else{
            LoggerJS.logError("gate server err, code: "+code + ",id:"+channel.Id);
        }

    }


}