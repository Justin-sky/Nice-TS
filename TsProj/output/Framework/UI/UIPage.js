"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIPanel_1 = require("./UIPanel");
const UIDefine_1 = require("./UIDefine");
const UIManager_1 = require("../manager/UIManager");
class UIPage extends UIPanel_1.UIPanel {
    get uiType() {
        return UIDefine_1.UITypeDef.Page;
    }
    onAwake() {
        this.m_btnGoBack = this.fui.GetChild(UIDefine_1.UIComDefs.BackBtn);
        if (this.m_btnGoBack != undefined) {
            this.m_btnGoBack.onClick.Add(() => {
                this.onBtnGoBack();
            });
        }
    }
    onOpen(arg) {
        super.onOpen(arg);
    }
    onClose(arg) {
        super.onClose(arg);
    }
    onBtnGoBack() {
        UIManager_1.UIManager.Instance(UIManager_1.UIManager).goBackPage();
    }
}
exports.UIPage = UIPage;
//# sourceMappingURL=UIPage.js.map