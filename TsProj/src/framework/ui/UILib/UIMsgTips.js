"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIMsgTips = void 0;
const UIWidge_1 = require("../UIWidge");
//Tips 挂件
class UIMsgTips extends UIWidge_1.UIWidge {
    constructor() {
        super(...arguments);
        this.m_alpha = 1;
        this.m_yOffset = 20;
    }
    onAwake() {
        this.m_tip = this.fui.GetChild("top");
    }
    onOpen(arg) {
        super.onOpen(arg);
        this.m_tip.text = arg;
        this.m_alpha = 1;
        this.m_intervel = setInterval(this.moveTips, 500);
    }
    moveTips() {
        this.m_alpha -= 0.01;
        if (this.m_alpha < 0)
            this.onClose(null);
        this.m_yOffset -= 0.1;
        if (this.m_yOffset < 0)
            this.m_yOffset = 0;
        this.m_tip.y -= this.m_yOffset;
    }
    onClose(arg) {
        super.onClose(arg);
        clearInterval(this.m_intervel);
    }
}
exports.UIMsgTips = UIMsgTips;
//# sourceMappingURL=UIMsgTips.js.map