import { ModuleDef } from "../../modules/ModuleDef";
import { LoginModule } from "../../modules/login/LoginModule";
import { HomeModule } from "../../modules/home/HomeModule";
import { GeneralModule } from "./GeneralModule";
import { LoggerJS } from "../logger/Logger";


export class ModuleFactory{


    public static createModule(name : string):GeneralModule {

        if(name == ModuleDef.LoginModule){

            return new LoginModule();

        }else if(name == ModuleDef.HomeModule){

            return new HomeModule();
        }


        LoggerJS.logError(`创建Module失败： ${name}`);
        return null;
    }

}