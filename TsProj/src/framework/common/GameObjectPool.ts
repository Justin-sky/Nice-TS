
import { Singleton } from './Singleton';
import { ResManager } from './ResManager';
import { UnityEngine } from 'csharp';



// -- GameObject缓存池
// -- 注意：
// -- 1、所有需要预设都从这里加载，不要直接到ResourcesManager去加载，由这里统一做缓存管理
// -- 2、缓存分为两部分：从资源层加载的原始GameObject(Asset)，从GameObject实例化出来的多个Inst
export class GameObjectPool extends Singleton<GameObjectPool>{

    private __cacheTransRoot = null;
    private __goPool = new Map();
    private __instCache:Map<string,Array<any>> = new Map<string,Array<any>>();


    constructor(){
        super();

        let go = UnityEngine.GameObject.Find("GameObjectCacheRoot");

        if(go == undefined){
            go = new UnityEngine.GameObject("GameObjectCacheRoot");
            UnityEngine.Object.DontDestroyOnLoad(go);
        }

        this.__cacheTransRoot = go.transform;
    }

    //-- 检测是否已经被缓存
    public checkHasCached(path:string){

        let cachedInst:Array<any> = this.__instCache.get(path);
        if(cachedInst != undefined && cachedInst.length > 0){
            return true;
        }

        let pooledGo = this.__goPool.get(path);
        return pooledGo != undefined;
    }


    //-- 缓存并实例化GameObject
    public cacheAndInstGameObject(path:string, go:any, inst_count:number = 1){

        this.__goPool.set(path, go);
        if(inst_count > 0){

            let cachedInst:Array<any> = this.__instCache.get(path);
            for(let i:number =0; i < inst_count; i++){

                let inst = UnityEngine.GameObject.Instantiate(go) as UnityEngine.GameObject;
                inst.transform.SetParent(this.__cacheTransRoot);
                inst.SetActive(false);

                cachedInst.push(inst);
            }
        }
    }

    //-- 尝试从缓存中获取
    public tryGetFromCache(path:string):any{

        if(!this.checkHasCached(path)) {
            return null;
        }

        let cachedInst:Array<object>  = this.__instCache.get(path);
        if(cachedInst != undefined && cachedInst.length>0){
            
            let inst = cachedInst.pop();
            return inst;
        }

        let pooledGo = this.__goPool.get(path);
        if(pooledGo != undefined){
            let inst = UnityEngine.GameObject.Instantiate(pooledGo);
            return inst;
        }
        return null;
    }


    //预加载：可提供初始实例化个数
    public async preLoadGameObjectAsync(path:string, inst_count:number, callback:Function,...params){

        if(this.checkHasCached(path)){
            if(callback!=null){
                callback(params);
            }
            return;
        }

        let go = await ResManager.Instance(ResManager).loadPrefab(path);
        if(go!=undefined){
            this.cacheAndInstGameObject(path, go,inst_count);
        }

        if(callback!=null){
            callback(params);
        }
    }


    //-- 异步获取：必要时加载
    public async getGameObjectAsync(path:string, callback:Function,...params){

        let inst:any = this.tryGetFromCache(path);
        if(inst ==null){
            await this.preLoadGameObjectAsync(path, 1, callback, params);
        }

        inst = this.tryGetFromCache(path);
        inst.SetActive(true);

        
    }


    //-- 回收
    public recycleGameObject(path:string, inst:any){

        inst.transform.SetParent(this.__cacheTransRoot);
        inst.SetActive(false);

        let cachedInst = this.__instCache.get(path) || new Array();
        cachedInst.push(inst);

        this.__instCache.set(path, cachedInst);

    }


    //-- 清理缓存
    public cleanup(includePooledGo:boolean = false){

        this.__instCache.forEach((values, key)=>{

            for(let inst of values){
                if(inst != null){
                    UnityEngine.GameObject.Destroy(inst);
                }
            }
        });
        this.__instCache.clear(); 

        if(includePooledGo){
            this.__goPool.forEach((go, key)=>{

                if(go != null){
                    ResManager.Instance(ResManager).releaseAddressGO(go);
                }
            });

            this.__goPool.clear();
        }

    }


}