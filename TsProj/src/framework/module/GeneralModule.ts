

import { Logger } from "../logger/Logger";
import { Messenger, MesObj } from "../common/Messenger";


export abstract class GeneralModule{
   
    private m_name:string = "";
    public title:string;

    protected messenger:Messenger = new Messenger();

    public get Name() : string {
        return this.m_name
    }

   constructor(){

   }

     //当模块收到消息后，对消息进行一些处理
    public handleMessage(msg:number, args:any[]){
        
       let mesObj:MesObj =  this.messenger.getListener(msg);
       if(typeof(mesObj) != "undefined"){
            for(let l of mesObj.listeners){
                l.apply(mesObj.obj, args);
            }
        }

    }

   //创建模块
   public abstract create(args?:any):void;

   //Show
   public abstract show(args?:any):void;

   //释放模块
    public abstract  release(): void;



}