"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIDefine_1 = require("./UIDefine");
const UILoginPage_1 = require("../../game/Modules/Login/UI/UILoginPage");
const Singleton_1 = require("../Common/Singleton");
const CS = require('csharp');
class UIFactory extends Singleton_1.Singleton {
    static createUI(pkg, name) {
        let comp = CS.FairyGUI.UIPackage.CreateObject(pkg, name).asCom;
        let ui = null;
        if (name == UIDefine_1.UIDefs.UILoginPage) {
            ui = new UILoginPage_1.UILoginPage();
        }
        if (ui != null) {
            ui.fui = comp;
            ui.name = name;
            ui.awake();
        }
        return ui;
    }
}
exports.UIFactory = UIFactory;
//# sourceMappingURL=UIFactory.js.map