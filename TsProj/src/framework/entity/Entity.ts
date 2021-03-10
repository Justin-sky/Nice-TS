import { Logger } from "../logger/Logger";
import { Component } from "./Component";


export abstract class Entity{
    public id:number = 0;
    private eventsMap:Map<string,Array<Function>> = new Map<string,Array<Function>>();
    private components:Map<string,Component> = new Map<string,Component>();

    public  addComponent<T extends Component>(c: {new():T;}) :T {
        let cc = new c();
        cc.entity = this;

        this.components[c.name] = cc;
        return cc;
    }

    public getComponent<T extends Component>(c: {new():T;}) : T {

        return this.components[c.name];
    }

    public getOrAddComponent<T extends Component>(c: {new():T;}) : T {
        let com = this.getComponent<T>(c);
        if(com == null){
           com = this.addComponent<T>(c);
        }
        return com;
    }
 
    public publish<T>(event:T, c: {new():T;}){

        let array = this.eventsMap.get(c.name);
        if(array==null || array.length == 0){
            Logger.log("this event not subscribed...")
            return;
        }

        for(let i=0; i<array.length; i++){
            let f = array[i];
            if(f != null) f(event);
        }
     
    }

    public subscribe<T>(action:(t:T)=>void, c: {new():T;}){

        let array = this.eventsMap.get(c.name);
        if(array == null){
            array = new Array<Function>();
            this.eventsMap.set(c.name,array);
        }
        array.push(action);
    }

    public unSubscribe<T>(action:(t:T)=>void, c: {new():T;}){

        let array = this.eventsMap.get(c.name);
        
        let index = array.indexOf(action, 0);
        if(index > -1){
            array.splice(index, 1);
        }
    }

}