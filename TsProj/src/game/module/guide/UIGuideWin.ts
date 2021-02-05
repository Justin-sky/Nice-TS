import { FairyGUI } from "csharp";
import { binder } from "../../../framework/common/NiceDecorator";
import { UIWindow } from "../../../framework/ui/UIWindow";

export class UIGuideWin extends UIWindow{

    @binder("focus")
    private m_focus:FairyGUI.GGraph;

    public onAwake():void{
        super.onAwake();

        this.m_focus.alpha = 0.2

        this.m_focus.SetXY(520,550)

    }

    public onShow(vo:any):void{
        super.onShow(vo);

      
    }


    public onClose(arg:any):void{
        super.onClose(arg);

    }


}