
import { loginUI } from "../../../../data/ui/login";
import { BaseScene } from "../../../../framework/scene/BaseScene";
import { UIManager } from "../../../../framework/ui/UIManager";



export class LoginScene extends BaseScene{



    public onEnter() {

        //添加预加载资源
       this.addPreloadFairyGUIPackage(loginUI.PackageBytes,loginUI.PackageName);
    }

    public onComplete() {
        
        UIManager.Instance(UIManager).openPageInScene(
            loginUI.PackageName,
            loginUI.UILoginPage,
            null);
    }

    public onLeave() {
        
  

    }



}