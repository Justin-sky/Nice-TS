"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIPage_1 = require("../../../../Framework/UI/UIPage");
class UILoginPage extends UIPage_1.UIPage {
    onAwake() {
        super.onAwake();
        this.m_account = this.fui.GetChild("account");
        this.m_password = this.fui.GetChild("password");
        this.m_loginBtn = this.fui.GetChild("loginBtn");
    }
}
exports.UILoginPage = UILoginPage;
//# sourceMappingURL=UILoginPage.js.map