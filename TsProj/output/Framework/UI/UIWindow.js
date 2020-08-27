"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIPanel_1 = require("./UIPanel");
const UIDefine_1 = require("./UIDefine");
const UIManager_1 = require("../Manager/UIManager");
class UIWindow extends UIPanel_1.UIPanel {
    get uiType() {
        return UIDefine_1.UITypeDef.Window;
    }
    onAwake() {
        this.m_btnClose = this.fui.GetChild(UIManager_1.UIManager.WindowCloseBtn);
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