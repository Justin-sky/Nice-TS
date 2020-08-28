"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIVM_1 = require("../../../../Framework/UI/UIVM");
class UILoginPageVM extends UIVM_1.UIVM {
    constructor() {
        super();
        this.view.m_loginBtn.addClick(this.OnLoginBtnClick);
    }
    OnLoginBtnClick() {
    }
}
exports.UILoginPageVM = UILoginPageVM;
//# sourceMappingURL=UILoginPageVM.js.map