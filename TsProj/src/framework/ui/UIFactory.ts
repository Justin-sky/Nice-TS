
import { UILoginPage } from "../../modules/login/ui/UILoginPage";
import { UIPanel } from "./UIPanel";
import { LoggerJS } from "../logger/Logger";
import { UIHomePage } from "../../modules/home/ui/UIHomePage";
import { gameUI } from "../../data/ui/game";
import { UILoading } from "./UILib/UILoading";


const CS = require('csharp');


export class UIFactory{

    public static createUI(pkg:string, name:string){
        LoggerJS.log(`create UI: ${pkg}:${name}`)
        let comp = CS.FairyGUI.UIPackage.CreateObject(pkg, name).asCom
        
        let ui:UIPanel = null;


        switch (name){
            case gameUI.UILoginPage:
                ui = new UILoginPage();
                break;
            case gameUI.UILoadingPage:
                ui = new UILoading();
                break;
            case gameUI.UIHomePage:
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