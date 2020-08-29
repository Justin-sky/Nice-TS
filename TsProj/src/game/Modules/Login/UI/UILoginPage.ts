import { UIPage } from "../../../../framework/ui/UIPage";
import { UIManager } from "../../../../framework/manager/UIManager";




export class UILoginPage extends UIPage{
    
    public m_account:any;
    public m_password:any;
    public m_loginBtn:any;



    public onAwake():void{
        super.onAwake();

        this.m_account = this.fui.GetChild("account");
        this.m_password = this.fui.GetChild("password");
        this.m_loginBtn = this.fui.GetChild("loginBtn");


    }

    
    public onOpen(arg:any):void{
        super.onOpen(arg);

        this.m_loginBtn.Add(this.onLoginClick);
    }
    public onClose(arg:any):void{
        super.onClose(arg);

        this.m_loginBtn.Remove(this.onLoginClick);
    }




    public onLoginClick(){

        let account = this.m_account.text;
        let password = this.m_password.text;

        
    }
}