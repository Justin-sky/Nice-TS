const CS = require('csharp');
const csResMgr = CS.Addressable.ResourceManager;

import { Singleton } from '../Common/Singleton';
import { Logger } from '../Logger/Logger';
import { $promise } from 'puerts';


export class ResManager extends Singleton<ResManager>{


    constructor(){
        super();

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