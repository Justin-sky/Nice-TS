import { UIPanel } from "../UIPanel";
import { UITypeDef } from "../UIDefine";
import { FairyGUI } from "csharp";
import { binder } from "../../common/NiceDecorator";
import { UIMessageManger } from "../../../game/event/UIMessageManager";
import { UIMessage } from "../../../game/event/UIMessage";



export class  UILoading extends UIPanel{


    @binder("loading_pregress")
    public progressLoading: FairyGUI.GProgressBar;



    public onAwake(): void {
       
    }
    
    public get uiType(): UITypeDef {    
        return UITypeDef.Loading;
    }

    public onOpen(arg:any):void{
        super.onOpen(arg);

        this.progressLoading.value = 0;
        this.progressLoading.visible = true;

        UIMessageManger.Instance(UIMessageManger).addListener(
            UIMessage.MSG_SCENE_PROGRESS,
            this,
            (progress:number)=>{
                this.progressLoading.TweenValue(progress, 0.1);
            });
    }

    public onClose(arg:any):void{
        super.onClose(arg);

        this.progressLoading.visible = false;
        UIMessageManger.Instance(UIMessageManger).removeListenerByCode(
            UIMessage.MSG_SCENE_PROGRESS
        );
    }


}