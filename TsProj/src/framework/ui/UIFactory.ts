
import { UILoginPage } from "../../game/module/login/ui/UILoginPage";
import { UIPanel } from "./UIPanel";
import { UIHomePage } from "../../game/module/home/ui/UIHomePage";
import { UILoading } from "./UILib/UILoading";
import { loginUI } from "../../data/ui/login";
import { commonUI } from "../../data/ui/common";
import { homeUI } from "../../data/ui/home";
import { UIMsgBox } from "./UILib/UIMsgBox";
import { UISelServerWin } from "../../game/module/login/ui/UISelServerWin";
import { UIShopPage } from "../../game/module/home/ui/UIShopPage";



const CS = require('csharp');


export class UIFactory{

    public static uiCache:Map<string,UIPanel> = new Map<string,UIPanel>();

    public static createUI(pkg:string, name:string){
        console.log(`create UI: ${pkg}:${name}`)
        let comp = CS.FairyGUI.UIPackage.CreateObject(pkg, name).asCom
        
        let ui:UIPanel = this.uiCache.get(name);

        if(!ui){
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
                case homeUI.UIShopPage:
                    ui = new UIShopPage();
                    break;
            }

            this.uiCache.set(name, ui);
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