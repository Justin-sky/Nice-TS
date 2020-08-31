import { UIPage } from "../../../../framework/ui/UIPage";
import { Logger } from "../../../../framework/logger/Logger";



export class UIHomePage extends UIPage{

    public m_chatBtn:any;
    public m_bagBtn:any;
    public m_shopBtn:any;
    public m_levelBtn:any;


    
    public onAwake():void{
        super.onAwake();

        this.m_chatBtn = this.fui.GetChild("chatBtn");
        this.m_bagBtn = this.fui.GetChild("bagBtn");
        this.m_shopBtn = this.fui.GetChild("shopBtn");
        this.m_levelBtn = this.fui.GetChild("levelBtn");

        this.m_chatBtn.onClick.Add(()=>{
            this.onchatBtn();
        });
        this.m_bagBtn.onClick.Add(()=>{
            this.onbagBtn();
        });
        this.m_shopBtn.onClick.Add(()=>{
            this.onshopBtn();
        });
        this.m_levelBtn.onClick.Add(()=>{
            this.onlevelBtn();
        });
    }

    
    public onOpen(arg:any):void{
        super.onOpen(arg);

        
    }
    public onClose(arg:any):void{
        super.onClose(arg);

    }


    public onchatBtn(){
        Logger.log("on chat...");
    }
    public onbagBtn(){
        Logger.log("on bag ..");
    }
    public onshopBtn(){
        Logger.log("on shop...");
    }
    public onlevelBtn(){
        Logger.log("on level...");
    }

}