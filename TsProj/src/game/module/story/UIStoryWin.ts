import { FairyGUI } from "csharp";
import { binder } from "../../../framework/common/NiceDecorator";
import { UIWindow } from "../../../framework/ui/UIWindow";

export class UIStoryWin extends UIWindow{

    @binder("speakerTxt")
    private m_speakerTxt:FairyGUI.GRichTextField;
    @binder("btnList")
    private m_btnList:FairyGUI.GList;


    public onAwake():void{
        super.onAwake();
    }

    public onOpen(vo:any):void{
        super.onOpen(vo);
    }

    public onClose(arg:any):void{
        super.onClose(arg);

    }
}