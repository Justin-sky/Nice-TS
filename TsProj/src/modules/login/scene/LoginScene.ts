import { gameUI } from "data/ui/game";
import { SceneDef } from "framework/scene/SceneDef";
import { UIManager } from "framework/ui/UIManager";
import { BaseScene } from "../../../framework/scene/BaseScene";


export class LoginScene extends BaseScene{



    public onEnter() {

        //添加预加载资源
      // this.addPreloadFairyGUIPackage("","");
    }

    public onComplete() {
        
        //打开界面：
        UIManager.Instance(UIManager).openPageInScene(SceneDef.LoginScene,gameUI.PackageName, gameUI.UILoginPage,null);
    }

    public onLeave() {
        


    }



}