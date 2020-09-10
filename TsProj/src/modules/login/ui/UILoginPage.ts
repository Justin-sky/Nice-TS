import { UIPage } from "../../../framework/ui/UIPage";
import { ModuleManager } from "../../../framework/manager/ModuleManager";
import { ModuleDef, ModuleMessage } from "../../ModuleDef";
import { LoggerJS } from "../../../framework/logger/Logger";
import { binder } from "../../../framework/common/NiceDecorator";



export class UILoginPage extends UIPage{

    @binder("account")
    public m_account:any;
    @binder("password")
    public m_password:any;
    @binder("loginBtn")
    public m_loginBtn:any;


    public onAwake():void{
        super.onAwake();
        this.bindAll(this);
        
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

        LoggerJS.log(`account:${account} - password: ${password}`);

        if(account != "" && password != ""){
            ModuleManager.Instance(ModuleManager).sendMessage(
                ModuleDef.LoginModule,
                ModuleMessage.LOGIN_REAMSERVER,
                account,password
                );
        }

    }
}