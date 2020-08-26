import { ModuleDef } from "../../Modules/ModuleDef";
import { LoginModule } from "../../Modules/LoginModule";
import { HomeModule } from "../../Modules/HomeModule";
import { GeneralModule } from "./GeneralModule";
import { Logger } from "../Logger/Logger";


export class ModuleFactory{


    public static createModule(name : string):GeneralModule {

        if(name == ModuleDef.LoginModule){

            return new LoginModule();

        }else if(name == ModuleDef.HomeModule){

            return new HomeModule();
        }


        Logger.logError(`创建Module失败： ${name}`);
        return null;
    }

}