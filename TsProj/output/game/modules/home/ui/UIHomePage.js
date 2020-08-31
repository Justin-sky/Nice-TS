"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIPage_1 = require("../../../../framework/ui/UIPage");
const Logger_1 = require("../../../../framework/logger/Logger");
class UIHomePage extends UIPage_1.UIPage {
    onAwake() {
        super.onAwake();
        this.m_chatBtn = this.fui.GetChild("chatBtn");
        this.m_bagBtn = this.fui.GetChild("bagBtn");
        this.m_shopBtn = this.fui.GetChild("shopBtn");
        this.m_levelBtn = this.fui.GetChild("levelBtn");
        this.m_chatBtn.onClick.Add(() => {
            this.onchatBtn();
        });
        this.m_bagBtn.onClick.Add(() => {
            this.onbagBtn();
        });
        this.m_shopBtn.onClick.Add(() => {
            this.onshopBtn();
        });
        this.m_levelBtn.onClick.Add(() => {
            this.onlevelBtn();
        });
    }
    onOpen(arg) {
        super.onOpen(arg);
    }
    onClose(arg) {
        super.onClose(arg);
    }
    onchatBtn() {
        Logger_1.Logger.log("on chat...");
    }
    onbagBtn() {
        Logger_1.Logger.log("on bag ..");
    }
    onshopBtn() {
        Logger_1.Logger.log("on shop...");
    }
    onlevelBtn() {
        Logger_1.Logger.log("on level...");
    }
}
exports.UIHomePage = UIHomePage;
//# sourceMappingURL=UIHomePage.js.map