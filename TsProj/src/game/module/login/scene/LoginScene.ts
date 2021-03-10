
import { loginUI } from "../../../../data/ui/login";
import { storyUI } from "../../../../data/ui/story";
import { BaseScene } from "../../../../framework/scene/BaseScene";
import { S } from "../../../../global/GameConfig";



export class LoginScene extends BaseScene{



    public onEnter() {


    }

    public onComplete() {
        
        S.UIManager.openPageInScene(
            loginUI.PackageName,
            loginUI.UILoginPage,
            null);
    }

    public onLeave() {
        
  

    }



}