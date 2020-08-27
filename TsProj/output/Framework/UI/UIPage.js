"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIPanel_1 = require("./UIPanel");
const UIDefine_1 = require("./UIDefine");
const UIManager_1 = require("../Manager/UIManager");
class UIPage extends UIPanel_1.UIPanel {
    get uiType() {
        return UIDefine_1.UITypeDef.Page;
    }
    onAwake() {
        this.m_btnGoBack = this.fui.GetChild(UIManager_1.UIManager.BackBtn);
    }
    onOpen(arg) {
        super.onOpen(arg);
        if (this.m_btnGoBack != undefined) {
            this.m_btnGoBack.Add(this.onBtnGoBack);
        }
    }
    onClose(arg) {
        super.onClose(arg);
        if (this.m_btnGoBack != undefined) {
            this.m_btnGoBack.Remove(this.onBtnGoBack);
        }
    }
    onBtnGoBack() {
        UIManager_1.UIManager.Instance(UIManager_1.UIManager).goBackPage();
    }
}
exports.UIPage = UIPage;
//# sourceMappingURL=UIPage.js.map