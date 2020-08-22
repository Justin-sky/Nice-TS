"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("./Singleton");
const CS = require('csharp');
// -- GameObject缓存池
// -- 注意：
// -- 1、所有需要预设都从这里加载，不要直接到ResourcesManager去加载，由这里统一做缓存管理
// -- 2、缓存分为两部分：从资源层加载的原始GameObject(Asset)，从GameObject实例化出来的多个Inst
class GameObjectPool extends Singleton_1.Singleton {
    constructor() {
        super();
        this.__cacheTransRoot = null;
        this.__goPool = [];
        this.__instCache = [];
        let go = CS.UnityEngine.GameObject.Find("GameObjectCacheRoot");
        if (go == undefined) {
            go = new CS.UnityEngine.GameObject("GameObjectCacheRoot");
            CS.UnityEngine.Object.DontDestroyOnLoad(go);
        }
        this.__cacheTransRoot = go.transform;
    }
}
exports.GameObjectPool = GameObjectPool;
//# sourceMappingURL=GameObjectPool.js.map