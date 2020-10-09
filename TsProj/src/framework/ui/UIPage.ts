import { UIPanel } from "./UIPanel";
import { UITypeDef, UIComDefs } from "./UIDefine";
import { UIManager } from "./UIManager";
import { FairyGUI } from "csharp";
import { binder } from "../common/NiceDecorator";



export abstract class UIPage extends UIPanel{
    public get uiType(): UITypeDef {    
        return UITypeDef.Page;
    }

    private m_btnGoBack:FairyGUI.GButton;


    public onAwake():void{
        
        this.m_btnGoBack = this.fui.GetChild(UIComDefs.BackBtn);

        if(this.m_btnGoBack!=undefined){
            this.m_btnGoBack.onClick.Add(()=>{
                this.onBtnGoBack();
            });
        }
    }


    public onOpen(vo:any):void{
        super.onOpen(vo);

        
    
    }
    public onClose(arg:any):void{
        super.onClose(arg);

    }

    private onBtnGoBack(){
        UIManager.Instance(UIManager).goBackPage();
    }

} 