import { UIPanel } from "./UIPanel";
import { UITypeDef } from "./UIDefine";



export class UILoadingArg{

    public title:string = "";
    public tips:string = "";
    public progress:number = 0;
}


export abstract class  UILoading extends UIPanel{
    
    public get uiType(): UITypeDef {    
        return UITypeDef.Loading;
    }


    public txtTitle : any;
    public txtTips : any;

    m_arg:UILoadingArg; 
    public get arg() : UILoadingArg {
        return this.m_arg; 
    }
    

    private updateText(){
        // if (txtTitle != null)
        // {
        //     txtTitle.text = m_arg.title + "(" + (int)(m_arg.progress * 100) + "%)";
        // }
        // if (txtTips != null)
        // {
        //     txtTips.text = m_arg.tips;
        // }
    }

    public onOpen(arg:any):void{
        super.onOpen(arg);

        this.m_arg = arg as UILoadingArg;
        if(this.m_arg == undefined){
            this.m_arg = new UILoadingArg();
        }
        this.updateText();
    }

    public showProgress(progress:number):void{
        this.m_arg.progress = progress;
    }

    public showProgress2(tips:string, progress:number):void{
        this.m_arg.tips = tips;
        this.m_arg.progress = progress;
    }

    public abstract UpdateProgress():void;

    public onUpdate():void{

        super.onUpdate();

        if(this.m_arg != undefined){
            this.updateText();
            this.UpdateProgress();
        }

    }
}