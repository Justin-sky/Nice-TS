import { GeneralModule } from "../../../framework/module/GeneralModule";
import { Logger } from "../../../framework/logger/Logger";
import { UIManager } from "../../../framework/manager/UIManager";
import { SceneDef } from "../ModuleDef";
import { gameUI } from "../../../data/ui/game";

export class LoginModule extends GeneralModule{

    public create(args:any):void{

        Logger.log(" Login creeate,args: "+args);
   }

   public show(args:any):void{
       
        Logger.log(" Show,args: "+args);

        UIManager.Instance(UIManager).openPageInScene(SceneDef.LoginScene, gameUI.PackageName, gameUI.UILoginPage, null);
   }
   
    public  release(): void{

        Logger.log("Login Release ");
    }

    public onModuleMessage(msg:string, ...args:any[]){

        Logger.log(`Login: ${msg} : ${args}`);
    }


}