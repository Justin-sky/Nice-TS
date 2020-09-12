import { FairyGUI } from "csharp";
import { UIWindow } from "../UIWindow";

// 通用弹窗
export class UIMsgBoxArg{

    public title:string = "";
    public content:string = "";
    public btnText:string = "";//"确定|取消|关闭"
}


export class UIMsgBox extends UIWindow{

    private m_arg:UIMsgBoxArg;

    private m_txt:FairyGUI.GLabel;
    private m_okBtn:FairyGUI.GButton;
    private m_cancelBtn:FairyGUI.GButton;

    

    public onAwake():void{
        super.onAwake();

        this.m_txt = this.fui.GetChild("msgTxt");
        this.m_okBtn = this.fui.GetChild("okBtn");
        this.m_cancelBtn = this.fui.GetChild("cancelBtn");
    }

    public onOpen(arg:any):void{
        super.onOpen(arg);

        
    }


    public onClose(arg:any):void{
        super.onClose(arg);

     
    }

}