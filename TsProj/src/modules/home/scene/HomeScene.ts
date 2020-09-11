import { BaseScene } from "../../../framework/scene/BaseScene";


export class HomeScene extends BaseScene{

    constructor(){
        super();

        
    }

    public onEnter() {

        this.addPreloadFairyGUIPackage("home_fui.bytes","home");
    }

    public onComplete() {
        
    }

    public onLeave() {
        
    }



}