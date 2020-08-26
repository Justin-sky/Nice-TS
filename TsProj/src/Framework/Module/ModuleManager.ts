import { Singleton } from "../Common/Singleton";
import { GeneralModule } from "./GeneralModule";
import { Logger } from "../Logger/Logger";
import { ModuleFactory } from "./ModuleFactory";


export class MessageObject{
    public msg:string;
    public args:any[];
}


export class ModuleManager extends Singleton<ModuleManager>{

    private m_mapModules : Map<string, GeneralModule>;
    private m_mapCacheMessage : Map<string,Array<MessageObject>>;

    constructor(){
        super();

        this.m_mapModules = new  Map<string, GeneralModule>();
        this.m_mapCacheMessage = new Map<string, Array<MessageObject>>();
    }


    public cleanup() : void{

        this.m_mapCacheMessage.clear();

        for (const module of this.m_mapModules.values()) {
            module.release();
        }

        this.m_mapModules.clear();

    }

    public createModule(name:string, args:any):GeneralModule{

        Logger.log(`name = ${name}, args = ${args}`);

        if(this.hasModule(name)){
            Logger.logError(`The Module<${name}> Has Existed!`);
            return null;
        }

        let module : GeneralModule = ModuleFactory.createModule(name);

        if(module == null ){
            Logger.logError(`模块实例化失败：<${name}> `);
            return null;
        }

        this.m_mapModules.set(name, module);
        module.create(args);

        //处理缓存的消息
        if(this.m_mapCacheMessage.has(name)){
            let list = this.m_mapCacheMessage.get(name);
            for (const msgobj of list) {
                module.handleMessage(msgobj.msg, msgobj.args);
            }
            this.m_mapCacheMessage.delete(name);
        }

        return module;
    }


    private hasModule(name : string):boolean{

        return this.m_mapModules.has(name);
    }

    private getModule(name : string) : GeneralModule{

        return this.m_mapModules.get(name);
    }


    private getCacheMessageList(target: string){
        let list:Array<MessageObject> = this.m_mapCacheMessage.get(target);

        if(list == undefined){
            list = new Array<MessageObject>();
            this.m_mapCacheMessage.set(target, list);
        }

        return list;
    }

    public sendMessage(target:string, msg:string, ...args:any[]){

        let module:GeneralModule = this.getModule(target);
        if(module != undefined){
            module.handleMessage(msg, args);
        }else{
            let list = this.getCacheMessageList(target);
            let obj:MessageObject = new MessageObject();
            obj.msg = msg;
            obj.args = args;
            list.push(obj);
        }

    }

}