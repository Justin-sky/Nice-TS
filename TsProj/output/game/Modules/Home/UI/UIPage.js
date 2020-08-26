"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIPanel_1 = require("./UIPanel");
const UIDefine_1 = require("../../../../Framework/UI/UIDefine");
class UIPage extends UIPanel_1.UIPanel {
    get uiType() {
        return UIDefine_1.UITypeDef.Page;
    }
    onEnable() {
        this.addUIClickListener(this.m_btnGoBack, this.onBtnGoBack);
    }
    onDisable() {
        this.removeUIClickListener(this.m_btnGoBack, this.onBtnGoBack);
    }
    onBtnGoBack() {
    }
}
exports.UIPage = UIPage;
//# sourceMappingURL=UIPage.js.map