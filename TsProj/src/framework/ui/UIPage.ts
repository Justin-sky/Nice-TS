import { UIPanel } from "./UIPanel";
import { UITypeDef, UIComDefs } from "./UIDefine";
import { FairyGUI } from "csharp";
import { S } from "../../global/GameConfig";



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


    public onShow(vo:any):void{

    
    }

    public onClose(arg:any):void{
   
    }

    private onBtnGoBack(){
        S.UIManager.goBackPage();
    }

} 