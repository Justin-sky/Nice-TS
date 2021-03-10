import { NiceTS } from "csharp";
import { $promise } from "puerts";
import { Singleton } from "../common/Singleton";
import { Logger } from "../logger/Logger";

export class HttpManager extends Singleton<HttpManager>{

    constructor(){
        super();
    }

    
    async get(url:string){

        try{
            let task= NiceTS.HttpManager.Get(url)
            let txt = await $promise(task);
            return txt;
        }catch(ex){

            Logger.error(`Get error :${url} : ${ex}`)

            return null;
        }

    }

    async post(url:string, form:string){

        try{
            let task= NiceTS.HttpManager.Post(url, form)
            let txt = await $promise(task);
            return txt;

        }catch(ex){

            Logger.error(`Post error :${url} : ${ex}`)

            return null;
        }
    }

}
