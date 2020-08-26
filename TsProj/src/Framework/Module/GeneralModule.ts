import { ModuleBase } from "./ModuleBase";
import { Logger } from "../Logger/Logger";


export abstract class GeneralModule extends ModuleBase{
   
    private m_name:string = "";
    public title:string;

    public get Name() : string {
        return this.m_name
    }

   constructor(){
       super();


   }

   //创建模块
   public create(args:any):void{

        Logger.log("args: "+args);
   }

   //释放模块
    public  release(): void{


    }

    //当模块收到消息后，对消息进行一些处理
    public handleMessage(msg:string, ...args:any[]){

        this.onModuleMessage(msg, args);
    }


    //由派生类去实现，用于处理消息
    public abstract onModuleMessage(msg:string, ...args:any[]);



}