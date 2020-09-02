"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIWindow_1 = require("../UIWindow");
// 通用弹窗
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
        this.m_txt = this.fui.GetChild("msgTxt");
        this.m_okBtn = this.fui.GetChild("okBtn");
        this.m_cancelBtn = this.fui.GetChild("cancelBtn");
    }
    onOpen(arg) {
        super.onOpen(arg);
    }
    onClose(arg) {
        super.onClose(arg);
    }
}
exports.UIMsgBox = UIMsgBox;
//# sourceMappingURL=UIMsgBox.js.map