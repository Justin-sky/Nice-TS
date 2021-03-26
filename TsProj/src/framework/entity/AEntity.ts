import { ArrayMap } from "../core/ArrayMap";
import { Logger } from "../logger/Logger";
import { Component } from "./Component";

type Class<T> = new (...args: any[]) => T;

export abstract class AEntity{
    public uuid:number = 0;
    private eventsMap:Map<string,Array<Function>> = new Map<string,Array<Function>>();
    private components:Map<string,Component> = new Map<string,Component>();

    public parent:AEntity = null;
    private _children:ArrayMap<number,AEntity> = new ArrayMap<number, AEntity>();
    private _typeChildren:Map<string, Array<AEntity>> = new Map<string, Array<AEntity>>();

    public abstract onAwake(initData:any)


    public addChild<T>(child:AEntity,c: {new():T;}){
        child.parent = this;
        this._children.add(child.uuid, child);

        let childrenArr = this._typeChildren.get(c.name);
        if(childrenArr == null){
            childrenArr = new Array<AEntity>();
            this._typeChildren.set(c.name, childrenArr);
        }
        childrenArr.push(child);
    }

    public removeChild(child:AEntity){
        let entity = this._children.remove(child.uuid);
        entity.dispose();
    }

    public getChildren():Array<AEntity>{
        return this._children.getArr();
    }

    public getChildByUUID(uuid:number):AEntity{
        return this._children.get(uuid);
    }


    public getChildrenByType<T extends AEntity>(c: {new():T;}):Array<AEntity>{
        return this._typeChildren.get(c.name);
    }

    public getChildByType<T extends AEntity>(c: {new():T;}):AEntity{
        return this.getChildrenByType(c)[0];
    }

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


    public dispose(){

        let children= this.getChildren;
        for(let i=0; i<children.length; i++){
            children[i].dispose();
        }

        this.components.clear();
        this.eventsMap.clear();
        this._typeChildren.clear();
        this._children.dispose();
        this.parent = null;
    }
}