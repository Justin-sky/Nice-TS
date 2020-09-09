"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIPanel = void 0;
const UIDefine_1 = require("./UIDefine");
const CS = require('csharp');
class UIPanel {
    constructor() {
        this.m_layer = UIDefine_1.UILayerDef.Unkown;
    }
    set name(v) {
        this._name = v;
    }
    get name() {
        return this._name;
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
    get isOpen() {
        return this.fui.visiable;
    }
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
        this.onOpen(arg);
        CS.FairyGUI.GRoot.inst.AddChild(this.fui);
    }
    close(arg = null) {
        this.onClose(arg);
        CS.FairyGUI.GRoot.inst.RemoveChild(this.fui);
    }
    dispose() {
        this.fui.Dispose();
    }
}
exports.UIPanel = UIPanel;
//# sourceMappingURL=UIPanel.js.map