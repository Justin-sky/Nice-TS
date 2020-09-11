import { UIPanel } from "./UIPanel";
import { UITypeDef, UIComDefs } from "./UIDefine";
import { UIManager } from "./UIManager";


export abstract class UIPage extends UIPanel{

    public get uiType(): UITypeDef {    
        return UITypeDef.Page;
    }


    private m_btnGoBack:any;


    public onAwake():void{
        
        this.m_btnGoBack = this.fui.GetChild(UIComDefs.BackBtn);

        if(this.m_btnGoBack!=undefined){
            this.m_btnGoBack.onClick.Add(()=>{
                this.onBtnGoBack();
            });
        }
    }

    //绑定FairyGUI元件
    protected bindAll(target:any):void{
        for(let k in target["binders"]){
            let fguiName = this["binders"][k];
            this[k] = this.fui.GetChild(fguiName);
        }
    }


    public onOpen(arg:any):void{
        super.onOpen(arg);

        
    
    }
    public onClose(arg:any):void{
        super.onClose(arg);

    }

    private onBtnGoBack(){
        UIManager.Instance(UIManager).goBackPage();
    }

} 