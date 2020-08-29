"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIPage = void 0;
const UIPanel_1 = require("./UIPanel");
const UIDefine_1 = require("./UIDefine");
class UIPage extends UIPanel_1.UIPanel {
    get uiType() {
        return UIDefine_1.UITypeDef.Page;
    }
    onAwake() {
        this.m_btnGoBack = this.fui.GetChild(UIDefine_1.UIComDefs.BackBtn);
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
        // UIManager.Instance(UIManager).goBackPage();
    }
}
exports.UIPage = UIPage;
//# sourceMappingURL=UIPage.js.map