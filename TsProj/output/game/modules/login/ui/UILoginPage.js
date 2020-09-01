"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIPage_1 = require("../../../../framework/ui/UIPage");
const ModuleManager_1 = require("../../../../framework/manager/ModuleManager");
const ModuleDef_1 = require("../../ModuleDef");
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
            ModuleManager_1.ModuleManager.Instance(ModuleManager_1.ModuleManager).sendMessage(ModuleDef_1.ModuleDef.LoginModule, ModuleDef_1.ModuleMessage.LOGIN_REAMSERVER, account, password);
        }
    }
}
exports.UILoginPage = UILoginPage;
//# sourceMappingURL=UILoginPage.js.map