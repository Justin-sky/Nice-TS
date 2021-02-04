import { UIPanel } from "./UIPanel";
import { UITypeDef, UIComDefs } from "./UIDefine";
import { FairyGUI } from "csharp";


export abstract class  UIWindow extends UIPanel{
   
    public get uiType(): UITypeDef {    
        return UITypeDef.Window;
    }

    private m_btnClose:FairyGUI.GButton;

    public onAwake():void{
        
        this.m_btnClose = this.fui.GetChild(UIComDefs.WindowCloseBtn);

    }

    public onShow(arg:any):void{

        this.fui.x = FairyGUI.GRoot.inst.width/2 - this.fui.width/2;
        this.fui.y = FairyGUI.GRoot.inst.height/2 - this.fui.height/2;

        if(this.m_btnClose!=undefined){
            this.m_btnClose.onClick.Add(this.onBtnClose);
        }
    
    }
    public onClose(arg:any):void{

        if(this.m_btnClose!=undefined){
            this.m_btnClose.onClick.Remove(this.onBtnClose);
        }
    }

    private onBtnClose(){
        this.close(0);
    }

}