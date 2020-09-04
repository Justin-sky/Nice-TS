import { GeneralModule } from "../../../framework/module/GeneralModule";
import { Logger } from "../../../framework/logger/Logger";
import { UIManager } from "../../../framework/manager/UIManager";
import { SceneDef, ModuleMessage } from "../ModuleDef";
import { gameUI } from "../../../data/ui/game";
import { GameSession } from "../../../framework/net/GameSession";
import { GameConfig } from "../../../global/GameConfig";
import { Opcode } from "../../../data/pb/Opcode";
import { NetErrorCode } from "../../../framework/net/NetErrorCode";
import { NiceET } from "../../../data/pb/OuterMessage";


const CS = require('csharp');



export class LoginModule extends GeneralModule{

    private sessionReam:GameSession;
    private account:string;
    private password:string;

    public create(args:any):void{
        this.messenger.addListener(ModuleMessage.LOGIN_REAMSERVER,this, this.loginReamServer);
   }

   public show(args:any):void{
        UIManager.Instance(UIManager).openPageInScene(SceneDef.LoginScene, gameUI.PackageName, gameUI.UILoginPage, args);
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

       // UIManager.Instance(UIManager).enterMainPage();
    }


    public onReamSocketErr(channel:any, code:number){
        Logger.log("socket code: "+code + ",id:"+channel.Id);

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
                
                let msg  =  response as NiceET.R2C_Login;
                Logger.log(msg.Address);
                Logger.log(msg.GateId);
                Logger.log(msg.Key);

                this.sessionReam.disconnect();
            });
        }
    }





}