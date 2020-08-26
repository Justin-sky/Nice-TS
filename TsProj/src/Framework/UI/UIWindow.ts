import { UIPanel } from "./UIPanel";
import { UITypeDef } from "./UIDefine";



export abstract class  UIWindow extends UIPanel{
   
    public get uiType(): UITypeDef {    
        return UITypeDef.Window;
    }

    private m_btnClose:string;

    public onEnable():void{

        this.addUIClickListener(this.m_btnClose,this.onBtnClose);
    }
    
    public onDisable():void{

        this.removeUIClickListener(this.m_btnClose,this.onBtnClose);
    }


    private onBtnClose(){
        this.close(0);
    }

}