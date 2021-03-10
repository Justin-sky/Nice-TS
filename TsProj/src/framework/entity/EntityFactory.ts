import { Singleton } from "../common/Singleton";
import { Entity } from "./Entity";


export class EntityFactory extends Singleton<EntityFactory>{

    public create<T extends Entity> ( c: {new():T;}) : T {
        let cc = new c();
        return cc;
    }
}