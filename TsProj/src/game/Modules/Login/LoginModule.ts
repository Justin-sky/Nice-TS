import { GeneralModule } from "../../../Framework/Module/GeneralModule";
import { Logger } from "../../../Framework/Logger/Logger";
import { UIManager } from "../../../Framework/Manager/UIManager";
import { SceneDef } from "../ModuleDef";
import { UIDefs } from "../../../Framework/UI/UIDefine";


export class LoginModule extends GeneralModule{

    public create(args:any):void{

        Logger.log(" Login creeate,args: "+args);
   }

   public show(args:any):void{
       
        Logger.log(" Show,args: "+args);

       // UIManager.Instance(UIManager).openLoading(UIDefs.UIHomePage);
       // UIManager.Instance(UIManager).openPageInScene(SceneDef.LoginScene, UIDefs.UILoginPage, null);
   }
   
    public  release(): void{

        Logger.log("Login Release ");
    }

    public onModuleMessage(msg:string, ...args:any[]){

        Logger.log(`Login: ${msg} : ${args}`);
    }


}