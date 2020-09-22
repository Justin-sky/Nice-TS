
import { Singleton } from './Singleton';
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

            console.error(`Load prefab :${address} : ${ex}`)

            return null;
        }

    }

    async loadTextAsset(address:string){

        try{
            let task = NiceTS.ResourceManager.LoadTextAsset(address);
            let go = await $promise(task);
            return go;
        }catch(ex){
            console.error(`Load textasset :${address} : ${ex}`)

            return null;
        }
    }


    async loadTextBytes(address:string){

        try{
            let task = NiceTS.ResourceManager.LoadTextBytes(address);
            let bytes = await $promise(task);
            return bytes;
        }catch(ex){
            console.error(`LoadTextBytes :${address} : ${ex}`)
        }
    }

    async loadSprite(address:string){

        try{
            let task = NiceTS.ResourceManager.LoadSprite(address);
            let go = await $promise(task);
            return go;

        }catch(ex){
            console.error(`Load sprite :${address} : ${ex}`)

            return null;
        }
    }

    async loadFairyGUIPackage(address:string, packageName:string, callback?:Function){

        try{
            let task = NiceTS.ResourceManager.LoadFairyGUIPackage(address,packageName);
            await $promise(task);
            
            if(callback) callback();
        }catch(ex){
            console.error(`Load fairyGUI :${address} : ${ex}`)
        }
    }

    public releaseAddressGO(go:any){

        NiceTS.ResourceManager.ReleaseAddressGO(go);
    }

    public releaseFairyGUIPackage(packageName){
        NiceTS.ResourceManager.ReleaseFGUIPackage(packageName);
    }
}