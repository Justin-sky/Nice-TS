import { GeneralModule } from "../../../framework/module/GeneralModule";
import { Logger } from "../../../framework/logger/Logger";
import { UIManager } from "../../../framework/manager/UIManager";
import { SceneDef, ModuleMessage } from "../ModuleDef";
import { gameUI } from "../../../data/ui/game";
import { GameSession } from "../../../framework/net/GameSession";
import { GameConfig } from "../../../global/GameConfig";
import { Opcode } from "../../../data/pb/Opcode";


const CS = require('csharp');



export class LoginModule extends GeneralModule{

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


        Logger.log(account + "======="+password );

        //登录验证服
        let reamChannel:any = CS.NiceTS.TService.Instance.GetChannel();

        reamChannel.add_ErrorCallback(this.onSocketErr);
        
        reamChannel.Connect(
            GameConfig.realmServerIP+":"+GameConfig.realmServerPort
            );

       // UIManager.Instance(UIManager).enterMainPage();
    }


    public onSocketErr(channel:any, code:number){
        Logger.log("socket code: "+code);
        

    }





}