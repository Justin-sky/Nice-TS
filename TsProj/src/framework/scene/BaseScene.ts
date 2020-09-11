import { GameObjectPool } from "framework/common/GameObjectPool";
import { ResManager } from "framework/common/ResManager";
import { $promise } from 'puerts';

export abstract class BaseScene{

    private preloadFairyGUIPackage:Map<string,string>;
    private preloadPrefab:Map<string,number>;
    public finishCount = 0;
    public totalCount = 0;

    constructor(){

        this.preloadFairyGUIPackage = new Map<string,string>();
        this.preloadPrefab = new Map<string,number>();
        this.finishCount = 0;
    }

    public addPreloadFairyGUIPackage(address:string, packageName:string){
        this.preloadFairyGUIPackage.set(address,packageName);
    }

    public addPreloadPrefab(address:string, instCount){
        this.preloadPrefab.set(address, instCount);
    }

    public abstract onEnter();
    public abstract onComplete();
    public abstract onLeave();

    public async onPrepare(){

        let fguiPkgCount = this.preloadFairyGUIPackage.size;
        let prefabCount = this.preloadPrefab.size;

        this.totalCount = fguiPkgCount + prefabCount;


        let premises = [];

        this.preloadFairyGUIPackage.forEach((value, key)=>{
            let premise = ResManager.Instance(ResManager).loadFairyGUIPackage(key, value,()=>{
                this.finishCount ++;
            });
            premises.push(premise);
        });

        this.preloadPrefab.forEach((value, key)=>{
            let premise = GameObjectPool.Instance(GameObjectPool).preLoadGameObjectAsync(key, value,()=>{
                this.finishCount++;
            })
            premises.push(premise);
        });

        await Promise.all(premises);
    }

    public onDestroy(){
        this.preloadFairyGUIPackage.clear();
        this.preloadPrefab.clear();
    }
}