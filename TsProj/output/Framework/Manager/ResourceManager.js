"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require('csharp');
const csResMgr = CS.Addressable.ResourceManager;
const Singleton_1 = require("../Common/Singleton");
const Logger_1 = require("../Logger/Logger");
class ResourceManager extends Singleton_1.Singleton {
    constructor() {
        super();
    }
    async loadPrefab(address) {
        try {
            let go = csResMgr.Load(address);
            // let go = await $promise(task);
            // let sprite_type = typeof(CS.UnityEngine.Sprite);
            return go;
        }
        catch (ex) {
            Logger_1.Logger.logError(`Load prefab :${address} : ${ex}`);
            return null;
        }
    }
}
exports.ResourceManager = ResourceManager;
//# sourceMappingURL=ResourceManager.js.map