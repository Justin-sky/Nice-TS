import { UINames } from "./UIDefine";
import { UILoginPage } from "../../game/Modules/Login/UI/UILoginPage";
import { UIPanel } from "./UIPanel";

const CS = require('csharp');


export class UIFactory{

    public static createUI(pkg:string, name:string){

        let comp = CS.FairyGUI.UIPackage.CreateObject(pkg, name).asCom
        
        let ui:UIPanel = null;

        if(name == UINames.UILoginPage){
            ui = new UILoginPage();
        }


        if(ui!=null){
            ui.fui = comp;
            ui.name = name;
            ui.awake();
        } 

        return ui;
    }



}