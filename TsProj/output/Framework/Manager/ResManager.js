"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require('csharp');
const csResMgr = CS.Addressable.ResourceManager;
const Singleton_1 = require("../Common/Singleton");
const Logger_1 = require("../Logger/Logger");
const puerts_1 = require("puerts");
class ResManager extends Singleton_1.Singleton {
    constructor() {
        super();
    }
    async loadPrefab(address) {
        try {
            let task = csResMgr.LoadPrefab(address);
            let go = await puerts_1.$promise(task);
            return go;
        }
        catch (ex) {
            Logger_1.Logger.logError(`Load prefab :${address} : ${ex}`);
            return null;
        }
    }
    async loadTextAsset(address) {
        try {
            let task = csResMgr.LoadTextAsset(address);
            let go = await puerts_1.$promise(task);
            return go;
        }
        catch (ex) {
            Logger_1.Logger.logError(`Load textasset :${address} : ${ex}`);
            return null;
        }
    }
    async loadSprite(address) {
        try {
            let task = csResMgr.LoadSprite(address);
            let go = await puerts_1.$promise(task);
            return go;
        }
        catch (ex) {
            Logger_1.Logger.logError(`Load sprite :${address} : ${ex}`);
            return null;
        }
    }
    releaseAddressGO(go) {
        csResMgr.ReleaseAddressGO(go);
    }
}
exports.ResManager = ResManager;
//# sourceMappingURL=ResManager.js.map