"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIPanel_1 = require("./UIPanel");
const UIDefine_1 = require("../../../../Framework/UI/UIDefine");
class UIWindow extends UIPanel_1.UIPanel {
    get uiType() {
        return UIDefine_1.UITypeDef.Window;
    }
    onEnable() {
        this.addUIClickListener(this.m_btnClose, this.onBtnClose);
    }
    onDisable() {
        this.removeUIClickListener(this.m_btnClose, this.onBtnClose);
    }
    onBtnClose() {
        this.close(0);
    }
}
exports.UIWindow = UIWindow;
//# sourceMappingURL=UIWindow.js.map