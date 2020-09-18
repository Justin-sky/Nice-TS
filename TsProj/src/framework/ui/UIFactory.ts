
import { UILoginPage } from "../../game/module/login/ui/UILoginPage";
import { UIPanel } from "./UIPanel";
import { UIHomePage } from "../../game/module/home/ui/UIHomePage";
import { UILoading } from "./UILib/UILoading";
import { loginUI } from "../../data/ui/login";
import { commonUI } from "../../data/ui/common";
import { homeUI } from "../../data/ui/home";
import { UIMsgBox } from "./UILib/UIMsgBox";
import { UISelServerWin } from "../../game/module/login/ui/UISelServerWin";



const CS = require('csharp');


export class UIFactory{

    public static createUI(pkg:string, name:string){
        console.log(`create UI: ${pkg}:${name}`)
        let comp = CS.FairyGUI.UIPackage.CreateObject(pkg, name).asCom
        
        let ui:UIPanel = null;

        switch (name){

            //common
            case commonUI.UIUINoticeWin:
                ui = new UIMsgBox();
                break;
            case commonUI.UILoadingPage:
                ui = new UILoading();
                break;

                //login
            case loginUI.UILoginPage:
                ui = new UILoginPage();
                break;
            case loginUI.UISelServerWin:
                ui = new UISelServerWin();
                break;
                
                //home
            case homeUI.UIHomePage:
                ui = new UIHomePage();
                break;
        }

        if(ui!=null){
            ui.fui = comp;
            ui.name = name;

            //绑定FairyGUI控件
            ui.bindAll(ui);
            ui.awake();
        
        }else{
            console.error(`not create ui: ${pkg}-${name}`);
        }

        return ui;
    }



}