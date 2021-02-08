
import { loginUI } from "../../../../data/ui/login";
import { storyUI } from "../../../../data/ui/story";
import { BaseScene } from "../../../../framework/scene/BaseScene";
import { UIManager } from "../../../../framework/ui/UIManager";
import { SUIManager } from "../../../../global/GameConfig";



export class LoginScene extends BaseScene{



    public onEnter() {

        //添加预加载资源
       this.addPreloadFairyGUIPackage(loginUI.PackageBytes,loginUI.PackageName);
       //测试Story
       this.addPreloadFairyGUIPackage(storyUI.PackageBytes,storyUI.PackageName);
    }

    public onComplete() {
        
        SUIManager.openPageInScene(
            loginUI.PackageName,
            loginUI.UILoginPage,
            null);
    }

    public onLeave() {
        
  

    }



}