
import { Singleton } from './Singleton';
import { LoggerJS } from '../logger/Logger';
import { $promise } from 'puerts';
import {NiceTS} from 'csharp';

export class ResManager extends Singleton<ResManager>{

    constructor(){
        super();
    }

    async loadPrefab(address:string){

        try{
            let task= NiceTS.ResourceManager.LoadPrefab(address);
            let go = await $promise(task);
            return go;
        }catch(ex){

            LoggerJS.logError(`Load prefab :${address} : ${ex}`)

            return null;
        }

    }

    async loadTextAsset(address:string){

        try{
            let task = NiceTS.ResourceManager.LoadTextAsset(address);
            let go = await $promise(task);
            return go;
        }catch(ex){
            LoggerJS.logError(`Load textasset :${address} : ${ex}`)

            return null;
        }
    }

    async loadSprite(address:string){

        try{
            let task = NiceTS.ResourceManager.LoadSprite(address);
            let go = await $promise(task);
            return go;

        }catch(ex){
            LoggerJS.logError(`Load sprite :${address} : ${ex}`)

            return null;
        }
    }

    async loadFairyGUIPackage(address:string, packageName:string, callback?:Function){

        try{
            let task = NiceTS.ResourceManager.LoadFairyGUIPackage(address,packageName);
            await $promise(task);
            
            if(callback) callback();
        }catch(ex){
            LoggerJS.logError(`Load fairyGUI :${address} : ${ex}`)
        }
    }

    public releaseAddressGO(go:any){

        NiceTS.ResourceManager.ReleaseAddressGO(go);
    }

    public releaseFairyGUIPackage(packageName){
        NiceTS.ResourceManager.ReleaseFGUIPackage(packageName);
    }
}