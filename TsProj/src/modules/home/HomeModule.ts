import { GeneralModule } from "../../framework/module/GeneralModule";
import { LoggerJS } from "../../framework/logger/Logger";


export class HomeModule extends GeneralModule{

    public create(args:any):void{

        LoggerJS.log(" Home creeate,args: "+args);
   }

   public show(args:any):void{
    LoggerJS.log(" Show,args: "+args);
   }


    public  release(): void{

        LoggerJS.log("Home Release ");
    }



}