import { AEntity } from "./AEntity";


export abstract class Component{

    public entity:AEntity;
   
    public publish<T>(event:T, c: {new():T;}){

        this.entity.publish(event, c);
    }

    public subscribe<T>(action:(t:T)=>void, c: {new():T;}){

        this.entity.subscribe<T>(action, c);
    }

    public unSubscribe<T>(action:(t:T)=>void, c: {new():T;}){

       this.entity.unSubscribe<T>(action, c);
    }
}