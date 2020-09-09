import { GeneralModule } from "../../framework/module/GeneralModule";
import { Logger } from "../../framework/logger/Logger";


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



}