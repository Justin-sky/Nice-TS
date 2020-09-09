"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UILoginPage = void 0;
const UIPage_1 = require("../../../framework/ui/UIPage");
const ModuleManager_1 = require("../../../framework/manager/ModuleManager");
const ModuleDef_1 = require("../../ModuleDef");
const Logger_1 = require("../../../framework/logger/Logger");
const NiceDecorator_1 = require("../../../framework/common/NiceDecorator");
class UILoginPage extends UIPage_1.UIPage {
    onAwake() {
        super.onAwake();
        this.bindAll(this);
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
__decorate([
    NiceDecorator_1.binder("account")
], UILoginPage.prototype, "m_account", void 0);
__decorate([
    NiceDecorator_1.binder("password")
], UILoginPage.prototype, "m_password", void 0);
__decorate([
    NiceDecorator_1.binder("loginBtn")
], UILoginPage.prototype, "m_loginBtn", void 0);
exports.UILoginPage = UILoginPage;
//# sourceMappingURL=UILoginPage.js.map