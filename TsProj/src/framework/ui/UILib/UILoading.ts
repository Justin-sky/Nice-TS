import { UIPanel } from "../UIPanel";
import { UITypeDef } from "../UIDefine";
import { LoggerJS } from "../../logger/Logger";
import { FairyGUI } from "csharp";



export class UILoadingArg{

    public title:string = "";
    public tips:string = "";
    public progress:number = 0;
}


export class  UILoading extends UIPanel{

    public txtTitle : FairyGUI.GTextField;
    public txtTips : FairyGUI.GTextField;

    private m_arg:UILoadingArg; 

    public get arg() : UILoadingArg {
        return this.m_arg; 
    }

    public onAwake(): void {
       
        this.bindAll(this);
    }
    
    public get uiType(): UITypeDef {    
        return UITypeDef.Loading;
    }

    public onOpen(arg:UILoadingArg):void{
        super.onOpen(arg);

        this.m_arg = arg as UILoadingArg;
        if(!this.m_arg){
            this.m_arg = new UILoadingArg();
        }
        this.updateText();
    }

    public showProgress(progress:number):void{
        this.m_arg.progress = progress;

        this.updateText();
    }


    private updateText(){
        LoggerJS.log("loading progress:"+this.m_arg.progress);

        // if (txtTitle != null)
        // {
        //     txtTitle.text = m_arg.title + "(" + (int)(m_arg.progress * 100) + "%)";
        // }
        // if (txtTips != null)
        // {
        //     txtTips.text = m_arg.tips;
        // }
    }

}