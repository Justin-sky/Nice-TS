import { homeUI } from "../../../../data/ui/home";
import { BaseScene } from "../../../../framework/scene/BaseScene";
import { UIManager } from "../../../../framework/ui/UIManager";


export class HomeScene extends BaseScene{

    constructor(){
        super();

        
    }

    public onEnter() {

        this.addPreloadFairyGUIPackage(homeUI.PackageBytes,homeUI.PackageName);
    }

    public onComplete() {
        UIManager.Instance(UIManager).openPageInScene(
            homeUI.PackageName,
            homeUI.UIHomePage,
            null);
    }

    public onLeave() {
        
    }



}