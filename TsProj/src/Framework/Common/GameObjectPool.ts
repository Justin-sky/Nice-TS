
import { Logger } from '../Logger/Logger';
import { Singleton } from './Singleton';


const CS = require('csharp');

// -- GameObject缓存池
// -- 注意：
// -- 1、所有需要预设都从这里加载，不要直接到ResourcesManager去加载，由这里统一做缓存管理
// -- 2、缓存分为两部分：从资源层加载的原始GameObject(Asset)，从GameObject实例化出来的多个Inst
export class GameObjectPool extends Singleton<GameObjectPool>{

    private __cacheTransRoot = null;
    private __goPool = [];
    private __instCache = [];


    constructor(){
        super();

        let go = CS.UnityEngine.GameObject.Find("GameObjectCacheRoot");

        if(go == undefined){
            go = new CS.UnityEngine.GameObject("GameObjectCacheRoot");
            CS.UnityEngine.Object.DontDestroyOnLoad(go);
        }

        this.__cacheTransRoot = go.transform;
    }



}