import { UnityEngine } from "csharp";
import { S } from "../../global/GameConfig";

export abstract class BaseScene{

    private preloadPrefab:Map<string,number>;
    private sceneInstance:UnityEngine.ResourceManagement.ResourceProviders.SceneInstance

    public finishCount = 0;
    public totalCount = 0;

    constructor(){
        this.preloadPrefab = new Map<string,number>();
        this.finishCount = 0;
    }

    public addPreloadPrefab(address:string, instCount){
        if(!this.preloadPrefab.has(address))
        {
            this.preloadPrefab.set(address, instCount);
            return
        }
        this.preloadPrefab.set(address, this.preloadPrefab.get(address) + instCount);
    }

    public setSceneInstance(sceneInstance:UnityEngine.ResourceManagement.ResourceProviders.SceneInstance){
        this.sceneInstance = sceneInstance;
    }

    public abstract onEnter();
    public abstract onComplete();
    public abstract onLeave();

    public async loadAssetsAsync(){

        this.totalCount = this.preloadPrefab.size;

        let premises = [];

        this.preloadPrefab.forEach((value, key)=>{
            let premise = S.GameObjectPool.preLoadGameObjectAsync(key, value,()=>{
                this.finishCount++;
            })
            premises.push(premise);
        });

        await Promise.all(premises);
    }

    public onDestroy(){
 
        //清理资源缓存
        S.GameObjectPool.cleanup(true);

        //卸载场景
        S.ResManager.unloadScene(this.sceneInstance);
        
        this.preloadPrefab.clear();
    }
}