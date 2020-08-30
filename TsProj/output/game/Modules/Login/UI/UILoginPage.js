"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIPage_1 = require("../../../../framework/ui/UIPage");
const UIManager_1 = require("../../../../framework/manager/UIManager");
const Logger_1 = require("../../../../framework/logger/Logger");
class UILoginPage extends UIPage_1.UIPage {
    onAwake() {
        super.onAwake();
        this.m_account = this.fui.GetChild("account");
        this.m_password = this.fui.GetChild("password");
        this.m_loginBtn = this.fui.GetChild("loginBtn");
        this.m_loginBtn.onClick.Add(() => {
            this.onLoginClick();
        });
    }
    onOpen(arg) {
        super.onOpen(arg);
    }
    onClose(arg) {
        super.onClose(arg);
    }
    onLoginClick() {
        let account = this.m_account.text;
        let password = this.m_password.text;
        Logger_1.Logger.log(`account:${account} - password: ${password}`);
        if (account != "" && password != "") {
            UIManager_1.UIManager.Instance(UIManager_1.UIManager).enterMainPage();
        }
    }
}
exports.UILoginPage = UILoginPage;
//# sourceMappingURL=UILoginPage.js.map