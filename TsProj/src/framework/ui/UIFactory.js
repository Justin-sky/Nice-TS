"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIFactory = void 0;
const UILoginPage_1 = require("../../modules/login/ui/UILoginPage");
const UISimpleLoading_1 = require("./UILib/UISimpleLoading");
const Logger_1 = require("../logger/Logger");
const UIHomePage_1 = require("../../modules/home/ui/UIHomePage");
const game_1 = require("../../data/ui/game");
const CS = require('csharp');
class UIFactory {
    static createUI(pkg, name) {
        Logger_1.Logger.log(`create UI: ${pkg}:${name}`);
        let comp = CS.FairyGUI.UIPackage.CreateObject(pkg, name).asCom;
        let ui = null;
        switch (name) {
            case game_1.gameUI.UILoginPage:
                ui = new UILoginPage_1.UILoginPage();
                break;
            case game_1.gameUI.UILoadingPage:
                ui = new UISimpleLoading_1.UISimpleLoading();
                break;
            case game_1.gameUI.UIHomePage:
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