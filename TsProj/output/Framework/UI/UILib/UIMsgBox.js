"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIMsgBox = exports.UIMsgBoxArg = void 0;
const UIWindow_1 = require("../UIWindow");
class UIMsgBoxArg {
    constructor() {
        this.title = "";
        this.content = "";
        this.btnText = ""; //"确定|取消|关闭"
    }
}
exports.UIMsgBoxArg = UIMsgBoxArg;
class UIMsgBox extends UIWindow_1.UIWindow {
    onAwake() {
        super.onAwake();
        // this.m_account = this.fui.GetChild("account");
    }
}
exports.UIMsgBox = UIMsgBox;
//# sourceMappingURL=UIMsgBox.js.map