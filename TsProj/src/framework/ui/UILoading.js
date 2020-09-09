"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UILoading = exports.UILoadingArg = void 0;
const UIPanel_1 = require("./UIPanel");
const UIDefine_1 = require("./UIDefine");
class UILoadingArg {
    constructor() {
        this.title = "";
        this.tips = "";
        this.progress = 0;
    }
}
exports.UILoadingArg = UILoadingArg;
class UILoading extends UIPanel_1.UIPanel {
    get uiType() {
        return UIDefine_1.UITypeDef.Loading;
    }
    get arg() {
        return this.m_arg;
    }
    updateText() {
        // if (txtTitle != null)
        // {
        //     txtTitle.text = m_arg.title + "(" + (int)(m_arg.progress * 100) + "%)";
        // }
        // if (txtTips != null)
        // {
        //     txtTips.text = m_arg.tips;
        // }
    }
    onOpen(arg) {
        super.onOpen(arg);
        this.m_arg = arg;
        if (this.m_arg == undefined) {
            this.m_arg = new UILoadingArg();
        }
        this.updateText();
    }
    showProgress(progress) {
        this.m_arg.progress = progress;
    }
    showProgress2(tips, progress) {
        this.m_arg.tips = tips;
        this.m_arg.progress = progress;
    }
    onUpdate() {
        super.onUpdate();
        if (this.m_arg != undefined) {
            this.updateText();
            this.UpdateProgress();
        }
    }
}
exports.UILoading = UILoading;
//# sourceMappingURL=UILoading.js.map