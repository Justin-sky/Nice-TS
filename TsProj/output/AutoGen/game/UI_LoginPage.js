"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require('csharp');
class UI_LoginPage {
    constructor() {
        this._ui = CS.FairyGUI.UIPackage.CreateObject("game", "LoginPage").asCom;
        this.m_account = this._ui.GetChild("account");
        this.m_password = this._ui.GetChild("password");
        this.m_loginBtn = this._ui.GetChild("loginBtn");
    }
}
UI_LoginPage.URL = "ui://l64dumk9nil";
exports.UI_LoginPage = UI_LoginPage;
//# sourceMappingURL=UI_LoginPage.js.map