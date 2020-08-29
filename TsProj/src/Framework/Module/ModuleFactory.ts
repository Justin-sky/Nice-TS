import { ModuleDef } from "../../Game/Modules/ModuleDef";
import { LoginModule } from "../../game/Modules/login/LoginModule";
import { HomeModule } from "../../game/Modules/home/HomeModule";
import { GeneralModule } from "./GeneralModule";
import { Logger } from "../logger/Logger";


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