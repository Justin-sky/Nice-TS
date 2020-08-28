"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../Common/Singleton");
const Logger_1 = require("../Logger/Logger");
const CS = require('csharp');
class FBManager extends Singleton_1.Singleton {
    constructor() {
        super();
        CS.Addressable.ResourceManager.OnFBLoadedHandle = this.onFBLoadedHandle;
    }
    onFBLoadedHandle(name, data) {
        Logger_1.Logger.log(name);
    }
}
exports.FBManager = FBManager;
//# sourceMappingURL=FBManager.js.map