import { homeUI } from "../../../../data/ui/home";
import { BaseScene } from "../../../../framework/scene/BaseScene";
import { UIManager } from "../../../../framework/ui/UIManager";
import { VoHome } from "../vo/VoHome";


export class HomeScene extends BaseScene{

    constructor(){
        super();

        
    }

    public onEnter() {

        this.addPreloadFairyGUIPackage(homeUI.PackageBytes,homeUI.PackageName);
    }

    public onComplete() {

        let vo:VoHome = new VoHome();
        vo.name = "Justin";
        vo.hp = 1200;
        vo.mp = 3300;
        vo.money = 666;

        UIManager.Instance(UIManager).openPageInScene(
            homeUI.PackageName,
            homeUI.UIHomePage,
            vo);
    }

    public onLeave() {
        
    }



}