"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../../../../Framework/Common/Singleton");
const UIMessagerCenter_1 = require("../../../../Framework/UI/UIMessagerCenter");
const UIManager_1 = require("../../../../Framework/Manager/UIManager");
class LoginP extends Singleton_1.Singleton {
    constructor() {
        super();
        this.Awake();
    }
    Awake() {
        UIMessagerCenter_1.UIMessageCenter.Instance(UIMessagerCenter_1.UIMessageCenter).AddListener(UIMessagerCenter_1.UIMsgE.PageBack, this.Back);
    }
    Back() {
        UIManager_1.UIManager.Instance(UIManager_1.UIManager).goBackPage();
    }
    Open() {
    }
    Close() {
    }
}
exports.LoginP = LoginP;
//# sourceMappingURL=LoginP.js.map