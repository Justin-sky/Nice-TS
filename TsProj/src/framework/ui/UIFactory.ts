
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
import { storyUI } from "../../data/ui/story";
import { UIStoryWin } from "../../game/module/story/UIStoryWin";
import { combatUI } from "../../data/ui/combat";
import { UIGuideWin } from "../../game/module/guide/UIGuideWin";
import { Logger } from "../logger/Logger";



const CS = require('csharp');


export class UIFactory{

    public static uiCache:Map<string,UIPanel> = new Map<string,UIPanel>();

    public static createUI(pkg:string, name:string){
        Logger.log(`create UI: ${pkg}:${name}`)
        let comp = CS.FairyGUI.UIPackage.CreateObject(pkg, name).asCom
        
        let ui:UIPanel = this.uiCache.get(name);

        if(!ui){

            switch(pkg){

                case commonUI.PackageName:
                    switch (name){
                        //common
                        case commonUI.UIUINoticeWin:
                            ui = new UIMsgBox();
                            break;
                        case commonUI.UILoadingPage:
                            ui = new UILoading();
                            break;
                        case commonUI.UIUIGuideWin:
                            ui = new UIGuideWin()
                    }
        
                    break
                case loginUI.PackageName:
                    switch (name){
                        //login
                        case loginUI.UILoginPage:
                            ui = new UILoginPage();
                            break;
                        case loginUI.UISelServerWin:
                            ui = new UISelServerWin();
                            break;
                    }
                    break
                case combatUI.PackageName:

                    break
                case homeUI.PackageName:
                    switch (name){
                        case homeUI.UIHomePage:
                            ui = new UIHomePage();
                            break;
                        case homeUI.UIShopPage:
                            ui = new UIShopPage();
                            break;
                    }
                    break
                case storyUI.PackageName:
                    switch (name){
                        case storyUI.UIStoryWin:
                            ui = new UIStoryWin();
                            break;
                    }
                    break

            }

            this.uiCache.set(name, ui);
        }
        
        if(ui!=null){
            ui.fui = comp;
            ui.name = name;
            ui.pkgName = pkg;

            //绑定FairyGUI控件
            ui.bindAll(ui);
            ui.awake();
        
        }else{
            Logger.error(`not create ui: ${pkg}-${name}`);
        }

        return ui;
    }



}