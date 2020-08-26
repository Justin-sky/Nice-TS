import { Logger } from "../../Framework/Logger/Logger";

const CS = require('csharp');


export  class UI_LoginPage {

    public m_account:any;
    public m_password:any;
    public m_loginBtn:any;

    public  _ui:any;

    public static URL:string = "ui://l64dumk9nil";

    public constructor(){
       
        this._ui = CS.FairyGUI.UIPackage.CreateObject("game", "LoginPage").asCom;
        
        this.m_account = this._ui.GetChild("account");
        this.m_password = this._ui.GetChild("password");
        this.m_loginBtn = this._ui.GetChild("loginBtn");
    }
}