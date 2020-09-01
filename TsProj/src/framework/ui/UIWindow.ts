import { UIPanel } from "./UIPanel";
import { UIManager } from "../manager/UIManager";
import { UITypeDef, UIComDefs } from "./UIDefine";




export abstract class  UIWindow extends UIPanel{
   
    public get uiType(): UITypeDef {    
        return UITypeDef.Window;
    }

    private m_btnClose:any;

    public onAwake():void{
        
        this.m_btnClose = this.fui.GetChild(UIComDefs.WindowCloseBtn);

    }

    public onOpen(arg:any):void{
        super.onOpen(arg);

        if(this.m_btnClose!=undefined){
            this.m_btnClose.Add(this.onBtnClose);
        }
    
    }
    public onClose(arg:any):void{
        super.onClose(arg);

        if(this.m_btnClose!=undefined){
            this.m_btnClose.Remove(this.onBtnClose);
        }
    }

    private onBtnClose(){
        this.close(0);
    }

}