import { UIPage } from "../../../../framework/ui/UIPage";
import { binder } from "../../../../framework/common/NiceDecorator";
import { FairyGUI } from "csharp";
import { UIManager } from "../../../../framework/ui/UIManager";
import { common } from "protobufjs";
import { commonUI } from "../../../../data/ui/common";
import { homeUI } from "../../../../data/ui/home";



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

    
    public onOpen(vo:any):void{
        super.onOpen(vo);

        
    }
    public onClose(arg:any):void{
        super.onClose(arg);

    }


    public onchatBtn(){

        UIManager.Instance(UIManager).openWindow(commonUI.PackageName,commonUI.UIUINoticeWin,null);
        console.log("on chat...");
    }
    public onbagBtn(){
        console.log("on bag ..");
    }
    public onshopBtn(){
        
        UIManager.Instance(UIManager).openPage(homeUI.PackageName,homeUI.UIShopPage);
    }
    public onlevelBtn(){
        console.log("on level...");
    }

}