"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../../Framework/Logger/Logger");
const CS = require('csharp');
class UI_LoginPage {
    constructor() {
        Logger_1.Logger.log("Hello");
        this._ui = CS.FairyGUI.UIPackage.CreateObject("game", "LoginPage");
        Logger_1.Logger.log(this._ui);
        this.m_account = this._ui.GetChild("account");
        Logger_1.Logger.log(this.m_account);
        this.m_password = this._ui.GetChild("password");
        this.m_loginBtn = this._ui.GetChild("loginBtn");
    }
}
UI_LoginPage.URL = "ui://l64dumk9nil";
exports.UI_LoginPage = UI_LoginPage;
//# sourceMappingURL=UI_LoginPage.js.map