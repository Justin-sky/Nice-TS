"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIDefine_1 = require("./UIDefine");
const UILoginPage_1 = require("../../game/modules/login/ui/UILoginPage");
const UISimpleLoading_1 = require("./UILib/UISimpleLoading");
const Logger_1 = require("../logger/Logger");
const UIHomePage_1 = require("../../game/modules/home/ui/UIHomePage");
const CS = require('csharp');
class UIFactory {
    static createUI(pkg, name) {
        Logger_1.Logger.log(`create UI: ${pkg}:${name}`);
        let comp = CS.FairyGUI.UIPackage.CreateObject(pkg, name).asCom;
        let ui = null;
        switch (name) {
            case UIDefine_1.UIDefs.UILoginPage:
                ui = new UILoginPage_1.UILoginPage();
                break;
            case UIDefine_1.UIDefs.UILoadingPage:
                ui = new UISimpleLoading_1.UISimpleLoading();
                break;
            case UIDefine_1.UIDefs.UIHomePage:
                ui = new UIHomePage_1.UIHomePage();
                break;
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