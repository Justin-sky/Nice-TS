import { UIPage } from "../../../../framework/ui/UIPage";
import { UIManager } from "../../../../framework/manager/UIManager";
import { ModuleManager } from "../../../../framework/manager/ModuleManager";
import { ModuleDef, ModuleMessage } from "../../ModuleDef";
import { Logger } from "../../../../framework/logger/Logger";




export class UILoginPage extends UIPage{
    
    public m_account:any;
    public m_password:any;
    public m_loginBtn:any;



    public onAwake():void{
        super.onAwake();

        this.m_account = this.fui.GetChild("account");
        this.m_password = this.fui.GetChild("password");
        this.m_loginBtn = this.fui.GetChild("loginBtn");

        this.m_loginBtn.onClick.Add(()=>{
            this.onLoginClick();
        });
    }

    
    public onOpen(arg:any):void{
        super.onOpen(arg);

        
    }
    public onClose(arg:any):void{
        super.onClose(arg);

    }




    public onLoginClick(){

        let account = this.m_account.text;
        let password = this.m_password.text;

        Logger.log(`account:${account} - password: ${password}`);

        if(account != "" && password != ""){
            ModuleManager.Instance(ModuleManager).sendMessage(
                ModuleDef.LoginModule,
                ModuleMessage.LOGIN_REAMSERVER,
                account,password
                );
        }

    }
}