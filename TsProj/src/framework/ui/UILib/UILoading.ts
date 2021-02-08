import { UIPanel } from "../UIPanel";
import { UITypeDef } from "../UIDefine";
import { FairyGUI } from "csharp";
import { binder } from "../../common/NiceDecorator";
import { UIMessage } from "../../../game/event/UIMessage";
import { S } from "../../../global/GameConfig";



export class  UILoading extends UIPanel{


    @binder("loading_pregress")
    public progressLoading: FairyGUI.GProgressBar;



    public onAwake(): void {
       
    }
    
    public get uiType(): UITypeDef {    
        return UITypeDef.Loading;
    }

    public onShow(arg:any):void{
        this.progressLoading.value = 0;
        this.progressLoading.visible = true;

        S.UIMessageManger.addListener(
            UIMessage.MSG_SCENE_PROGRESS,
            this,
            (progress:number)=>{
                this.progressLoading.TweenValue(progress, 0.1);
            });
    }

    public onClose(arg:any):void{
        this.progressLoading.visible = false;
        S.UIMessageManger.removeListenerByCode(
            UIMessage.MSG_SCENE_PROGRESS
        );
    }


}