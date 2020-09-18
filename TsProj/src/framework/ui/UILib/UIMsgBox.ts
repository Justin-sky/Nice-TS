import { FairyGUI } from "csharp";
import { binder } from "../../../framework/common/NiceDecorator";
import { UIWindow } from "../UIWindow";

// 通用弹窗
export class UIMsgBoxArg{
    public title:string = "";
    public content:string = "";
    public btnText:string = "";//"确定|取消|关闭"
}


export class UIMsgBox extends UIWindow{

    private m_arg:UIMsgBoxArg;

    @binder("msgTxt")
    private m_txt:FairyGUI.GLabel;
    @binder("okBtn")
    private m_okBtn:FairyGUI.GButton;
    @binder("cancelBtn")
    private m_cancelBtn:FairyGUI.GButton;



    public onAwake():void{
        super.onAwake();

        this.bindAll(this)
    }

    public onOpen(arg:any):void{
        super.onOpen(arg);

        
    }


    public onClose(arg:any):void{
        super.onClose(arg);

     
    }

}