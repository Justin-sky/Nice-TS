
import { loginUI } from "../../../../data/ui/login";
import { BaseScene } from "../../../../framework/scene/BaseScene";
import { SceneDef } from "../../../../framework/scene/SceneDef";
import { UIManager } from "../../../../framework/ui/UIManager";



export class LoginScene extends BaseScene{



    public onEnter() {

        //添加预加载资源
       this.addPreloadFairyGUIPackage("login_fui.bytes",loginUI.PackageName);
    }

    public onComplete() {
    
    }

    public onLeave() {
        
  

    }



}