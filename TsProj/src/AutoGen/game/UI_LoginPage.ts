import { Logger } from "../../Framework/Logger/Logger";

const CS = require('csharp');


export class UI_LoginPage {

    public m_account:any;
    public m_password:any;
    public m_loginBtn:any;

    public  _ui:any;

    public static URL:string = "ui://l64dumk9nil";

    public constructor(){
        Logger.log("Hello");
        this._ui = CS.FairyGUI.UIPackage.CreateObject("game", "LoginPage");
        Logger.log(this._ui);
        
        this.m_account = this._ui.GetChild("account");

        Logger.log(this.m_account);

        this.m_password = this._ui.GetChild("password");
        this.m_loginBtn = this._ui.GetChild("loginBtn");
    }
}