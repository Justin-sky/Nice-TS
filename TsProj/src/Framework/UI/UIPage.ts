import { UIPanel } from "./UIPanel";
import { UITypeDef } from "./UIDefine";


export abstract class UIPage extends UIPanel{

    public get uiType(): UITypeDef {    
        return UITypeDef.Page;
    }


    private m_btnGoBack:string;


    public onEnable():void{

        this.addUIClickListener(this.m_btnGoBack,this.onBtnGoBack);
    }
    
    public onDisable():void{

        this.removeUIClickListener(this.m_btnGoBack,this.onBtnGoBack);
    }


    private onBtnGoBack(){

    }

} 