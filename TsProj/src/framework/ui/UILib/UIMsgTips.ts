import { FairyGUI } from "csharp";
import { binder } from "../../common/NiceDecorator";
import { UIWidge } from "../UIWidge";


//Tips 挂件
export class UIMsgTips extends UIWidge{

    private m_alpha = 1;
    private m_yOffset = 20;

    @binder("top")
    private m_tip:FairyGUI.GLabel;

    private m_intervel;

    public onAwake(): void {
        

    }


    public onOpen(arg:any):void{
        super.onOpen(arg);

        this.m_tip.text = arg as string;
        this.m_alpha = 1;

        this.m_intervel = setInterval(this.moveTips,500);
    }

    private moveTips(){

        this.m_alpha -= 0.01;
        if(this.m_alpha <0 ) this.onClose(null);

        this.m_yOffset -= 0.1;
        if(this.m_yOffset < 0) this.m_yOffset = 0;

        this.m_tip.y -= this.m_yOffset;
    }

    public onClose(arg:any):void{
        super.onClose(arg);

        clearInterval(this.m_intervel);
    }

}