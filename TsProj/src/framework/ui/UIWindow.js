"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIWindow = void 0;
const UIPanel_1 = require("./UIPanel");
const UIDefine_1 = require("./UIDefine");
class UIWindow extends UIPanel_1.UIPanel {
    get uiType() {
        return UIDefine_1.UITypeDef.Window;
    }
    onAwake() {
        this.m_btnClose = this.fui.GetChild(UIDefine_1.UIComDefs.WindowCloseBtn);
    }
    onOpen(arg) {
        super.onOpen(arg);
        if (this.m_btnClose != undefined) {
            this.m_btnClose.Add(this.onBtnClose);
        }
    }
    onClose(arg) {
        super.onClose(arg);
        if (this.m_btnClose != undefined) {
            this.m_btnClose.Remove(this.onBtnClose);
        }
    }
    onBtnClose() {
        this.close(0);
    }
}
exports.UIWindow = UIWindow;
//# sourceMappingURL=UIWindow.js.map