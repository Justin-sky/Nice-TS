import { ModuleDef } from "../../Game/Modules/ModuleDef";
import { LoginModule } from "../../Game/Modules/Login/LoginModule";
import { HomeModule } from "../../Game/Modules/Home/HomeModule";
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