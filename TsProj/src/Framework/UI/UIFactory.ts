import { UIDefs } from "./UIDefine";
import { UILoginPage } from "../../game/modules/login/ui/UILoginPage";
import { UIPanel } from "./UIPanel";
import { Singleton } from "../common/Singleton";
import { UISimpleLoading } from "./UILib/UISimpleLoading";
import { Logger } from "../logger/Logger";
import { UIHomePage } from "../../game/modules/home/ui/UIHomePage";

const CS = require('csharp');


export class UIFactory{


    public static createUI(pkg:string, name:string){
        Logger.log(`create UI: ${pkg}:${name}`)
        let comp = CS.FairyGUI.UIPackage.CreateObject(pkg, name).asCom
        
        let ui:UIPanel = null;


        switch (name){
            case UIDefs.UILoginPage:
                ui = new UILoginPage();
                break;
            case UIDefs.UILoadingPage:
                ui = new UISimpleLoading();
                break;
            case UIDefs.UIHomePage:
                ui = new UIHomePage();
                break;
        }

        if(ui!=null){
            ui.fui = comp;
            ui.name = name;
            ui.awake();
        } 

        return ui;
    }



}