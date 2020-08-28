import { UIPanel } from "./UIPanel";
import { UITypeDef, UIComDefs } from "./UIDefine";
import { UIManager } from "../Manager/UIManager";


export abstract class UIPage extends UIPanel{

    public get uiType(): UITypeDef {    
        return UITypeDef.Page;
    }


    private m_btnGoBack:any;


    public onAwake():void{
        
        this.m_btnGoBack = this.fui.GetChild(UIComDefs.BackBtn);

    }

    public onOpen(arg:any):void{
        super.onOpen(arg);

        if(this.m_btnGoBack!=undefined){
            this.m_btnGoBack.Add(this.onBtnGoBack);
        }
    
    }
    public onClose(arg:any):void{
        super.onClose(arg);

        if(this.m_btnGoBack!=undefined){
            this.m_btnGoBack.Remove(this.onBtnGoBack);
        }
    }

    private onBtnGoBack(){
       // UIManager.Instance(UIManager).goBackPage();
    }

} 