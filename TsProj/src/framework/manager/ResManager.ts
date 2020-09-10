
import { Singleton } from '../common/Singleton';
import { LoggerJS } from '../logger/Logger';
import { $promise } from 'puerts';
import {Addressable} from 'csharp';

export class ResManager extends Singleton<ResManager>{

    private fblabel :string = "FB";
    private static fbcaches : Map<string,any> = new Map<string,any>();;

    constructor(){
        super();

        Addressable.ResourceManager.OnFBLoadedHandle = this.onFBLoadedHandle;
    }

    private onFBLoadedHandle(name, data){
        ResManager.fbcaches.set(name, data);
    }

    async preloadPBs(){

        try{
            let task = Addressable.ResourceManager.PreadloadFB(this.fblabel);
            return  await $promise(task);
        }catch(ex){
            LoggerJS.logError(`Load fb error: : ${ex}`)
            return 0;
        }
    }

    public static getFB(name:string){
        return this.fbcaches.get(name);
    }

    async loadPrefab(address:string){

        try{
            let task= Addressable.ResourceManager.LoadPrefab(address);
            let go = await $promise(task);
            return go;
        }catch(ex){

            LoggerJS.logError(`Load prefab :${address} : ${ex}`)

            return null;
        }

    }

    async loadTextAsset(address:string){

        try{
            let task = Addressable.ResourceManager.LoadTextAsset(address);
            let go = await $promise(task);
            return go;
        }catch(ex){
            LoggerJS.logError(`Load textasset :${address} : ${ex}`)

            return null;
        }
    }

    async loadSprite(address:string){

        try{
            let task = Addressable.ResourceManager.LoadSprite(address);
            let go = await $promise(task);
            return go;

        }catch(ex){
            LoggerJS.logError(`Load sprite :${address} : ${ex}`)

            return null;
        }
    }


    public releaseAddressGO(go:any){

        Addressable.ResourceManager.ReleaseAddressGO(go);
    }
}