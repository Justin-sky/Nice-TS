import { UIPage } from "../../../../Framework/UI/UIPage";




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

  
}