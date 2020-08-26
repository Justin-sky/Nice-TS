"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIDefine_1 = require("../../../../Framework/UI/UIDefine");
class UIPanel {
    constructor() {
        this.m_layer = UIDefine_1.UILayerDef.Unkown;
    }
    get uiType() {
        return UIDefine_1.UITypeDef.Unkown;
    }
    get layer() {
        return this.m_layer;
    }
    set layer(v) {
        this.m_layer = v;
    }
    onAwake() { }
    onDestroy() { }
    onEnable() { }
    onDisable() { }
    onUpdate() { }
    onOpen(arg) {
        this.layer = UIDefine_1.UILayerDef.getDefaultLayer(this.uiType);
    }
    onClose(arg) { }
    awake() {
        this.onAwake();
    }
    update() {
        this.onUpdate();
    }
    open(arg) {
        //显示UI
        // this.gameObject.SetActive(true);
        this.onOpen(arg);
        //播放动画 
    }
    close(arg = null) {
        this.onClose(arg);
    }
    addUIClickListener(controlName, listener) {
    }
    removeUIClickListener(controlName, listener) {
    }
}
exports.UIPanel = UIPanel;
//# sourceMappingURL=UIPanel.js.map