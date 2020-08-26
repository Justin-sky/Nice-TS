import { GeneralModule } from "../../Framework/Module/GeneralModule";
import { Logger } from "../../Framework/Logger/Logger";


export class HomeModule extends GeneralModule{

    public create(args:any):void{

        Logger.log(" Home creeate,args: "+args);
   }

   public show(args:any):void{
    Logger.log(" Show,args: "+args);
   }


    public  release(): void{

        Logger.log("Home Release ");
    }

    public onModuleMessage(msg:string, ...args:any[]){

        Logger.log(`Home: ${msg} : ${args}`);
    }



}