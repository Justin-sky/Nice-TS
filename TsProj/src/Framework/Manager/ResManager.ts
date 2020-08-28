const CS = require('csharp');
const csResMgr = CS.Addressable.ResourceManager;

import { Singleton } from '../Common/Singleton';
import { Logger } from '../Logger/Logger';
import { $promise } from 'puerts';


export class ResManager extends Singleton<ResManager>{

    private fblabel :string = "FB";
    private fbcaches : Map<string,any>;

    constructor(){
        super();

        this.fbcaches = new Map<string,any>();
        CS.Addressable.ResourceManager.OnFBLoadedHandle = this.onFBLoadedHandle;
    }

    private onFBLoadedHandle(name, data){
        this.fbcaches.set(name, data);
    }

    async preloadPBs(){

        try{
            let task = csResMgr.PreadloadFB(this.fblabel);
            return  await $promise(task);
        }catch(ex){
            Logger.logError(`Load fb error: : ${ex}`)
            return 0;
        }
    }

    public getFB(name:string){
        return this.fbcaches.get(name);
    }

    async loadPrefab(address:string){

        try{
            let task= csResMgr.LoadPrefab(address);
            let go = await $promise(task);
            return go;
        }catch(ex){

            Logger.logError(`Load prefab :${address} : ${ex}`)

            return null;
        }

    }

    async loadTextAsset(address:string){

        try{
            let task = csResMgr.LoadTextAsset(address);
            let go = await $promise(task);
            return go;
        }catch(ex){
            Logger.logError(`Load textasset :${address} : ${ex}`)

            return null;
        }
    }

    async loadSprite(address:string){

        try{
            let task = csResMgr.LoadSprite(address);
            let go = await $promise(task);
            return go;

        }catch(ex){
            Logger.logError(`Load sprite :${address} : ${ex}`)

            return null;
        }
    }


    public releaseAddressGO(go:any){

        csResMgr.ReleaseAddressGO(go);
    }
}