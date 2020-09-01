import { GeneralModule } from "../../../framework/module/GeneralModule";
import { Logger } from "../../../framework/logger/Logger";
import { UIManager } from "../../../framework/manager/UIManager";
import { SceneDef, ModuleMessage } from "../ModuleDef";
import { gameUI } from "../../../data/ui/game";

export class LoginModule extends GeneralModule{

    public create(args:any):void{
        this.messenger.addListener(ModuleMessage.LOGIN_REAMSERVER,this, this.loginReamServer);
   }

   public show(args:any):void{
        UIManager.Instance(UIManager).openPageInScene(SceneDef.LoginScene, gameUI.PackageName, gameUI.UILoginPage, null);
   }
   
    public  release(): void{
        this.messenger.removeListener(ModuleMessage.LOGIN_REAMSERVER,this.loginReamServer);
    }

    private a = 9999;

    public loginReamServer(account:string, password:string){


        Logger.log(account + "======="+password + " =="+ this.a);

        UIManager.Instance(UIManager).enterMainPage();
    }








}