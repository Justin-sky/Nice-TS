import { UIPage } from "../../../framework/ui/UIPage";
import { LoggerJS } from "../../../framework/logger/Logger";
import { binder } from "../../../framework/common/NiceDecorator";



export class UIHomePage extends UIPage{

    @binder("chatBtn")
    public m_chatBtn:any;
    @binder("bagBtn")
    public m_bagBtn:any;
    @binder("shopBtn")
    public m_shopBtn:any;
    @binder("levelBtn")
    public m_levelBtn:any;


    
    public onAwake():void{
        super.onAwake();
        this.bindAll(this);


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
        LoggerJS.log("on chat...");
    }
    public onbagBtn(){
        LoggerJS.log("on bag ..");
    }
    public onshopBtn(){
        LoggerJS.log("on shop...");
    }
    public onlevelBtn(){
        LoggerJS.log("on level...");
    }

}