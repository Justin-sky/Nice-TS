"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UILoginPage = void 0;
const UIPage_1 = require("../../../../Framework/UI/UIPage");
class UILoginPage extends UIPage_1.UIPage {
    onAwake() {
        super.onAwake();
        this.m_account = this.fui.GetChild("account");
        this.m_password = this.fui.GetChild("password");
        this.m_loginBtn = this.fui.GetChild("loginBtn");
    }
    onOpen(arg) {
        super.onOpen(arg);
        this.m_loginBtn.Add(this.onLoginClick);
    }
    onClose(arg) {
        super.onClose(arg);
        this.m_loginBtn.Remove(this.onLoginClick);
    }
    onLoginClick() {
        let account = this.m_account.text;
        let password = this.m_password.text;
    }
}
exports.UILoginPage = UILoginPage;
//# sourceMappingURL=UILoginPage.js.map