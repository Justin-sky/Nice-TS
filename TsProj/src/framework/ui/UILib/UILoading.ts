import { UIPanel } from "../UIPanel";
import { UITypeDef } from "../UIDefine";



export class UILoadingArg{

    public title:string = "";
    public tips:string = "";
    public progress:number = 0;
}


export class  UILoading extends UIPanel{

    public txtTitle : any;
    public txtTips : any;

    private m_arg:UILoadingArg; 

    public get arg() : UILoadingArg {
        return this.m_arg; 
    }

    public onAwake(): void {
       
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
    }

    public showProgress2(tips:string, progress:number):void{
        this.m_arg.tips = tips;
        this.m_arg.progress = progress;
    }

    public onUpdate():void{
        super.onUpdate();
        if(this.m_arg != undefined){
            this.updateText();
            this.UpdateProgress();
        }
    }

    public UpdateProgress():void{

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

}