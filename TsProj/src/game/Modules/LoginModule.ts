import { GeneralModule } from "../../Framework/Module/GeneralModule";
import { Logger } from "../../Framework/Logger/Logger";


export class LoginModule extends GeneralModule{

    public create(args:any):void{

        Logger.log(" Login creeate,args: "+args);
   }

   public show(args:any):void{
       
        Logger.log(" Show,args: "+args);
   }
   
    public  release(): void{

        Logger.log("Login Release ");
    }

    public onModuleMessage(msg:string, ...args:any[]){

        Logger.log(`Login: ${msg} : ${args}`);
    }


}