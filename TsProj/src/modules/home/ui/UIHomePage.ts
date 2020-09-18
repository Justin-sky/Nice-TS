import { UIPage } from "../../../framework/ui/UIPage";
import { LoggerJS } from "../../../framework/logger/Logger";
import { binder } from "../../../framework/common/NiceDecorator";
import { FairyGUI } from "csharp";
import { UIManager } from "../../../framework/ui/UIManager";



export class UIHomePage extends UIPage{

    @binder("chatBtn")
    public m_chatBtn:FairyGUI.GButton;
    @binder("bagBtn")
    public m_bagBtn:FairyGUI.GButton;
    @binder("shopBtn")
    public m_shopBtn:FairyGUI.GButton;
    @binder("levelBtn")
    public m_levelBtn:FairyGUI.GButton;


    
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

        UIManager.Instance(UIManager).openWindow("common","UINoticeWin",null);
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