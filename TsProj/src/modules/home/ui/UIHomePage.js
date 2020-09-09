"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIHomePage = void 0;
const UIPage_1 = require("../../../framework/ui/UIPage");
const Logger_1 = require("../../../framework/logger/Logger");
const NiceDecorator_1 = require("../../../framework/common/NiceDecorator");
class UIHomePage extends UIPage_1.UIPage {
    onAwake() {
        super.onAwake();
        this.bindAll(this);
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
__decorate([
    NiceDecorator_1.binder("chatBtn")
], UIHomePage.prototype, "m_chatBtn", void 0);
__decorate([
    NiceDecorator_1.binder("bagBtn")
], UIHomePage.prototype, "m_bagBtn", void 0);
__decorate([
    NiceDecorator_1.binder("shopBtn")
], UIHomePage.prototype, "m_shopBtn", void 0);
__decorate([
    NiceDecorator_1.binder("levelBtn")
], UIHomePage.prototype, "m_levelBtn", void 0);
exports.UIHomePage = UIHomePage;
//# sourceMappingURL=UIHomePage.js.map