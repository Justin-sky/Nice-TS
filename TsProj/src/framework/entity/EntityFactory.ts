import { Singleton } from "../common/Singleton";
import { AEntity } from "./AEntity";


export class EntityFactory extends Singleton<EntityFactory>{
    private autoID:number = 0;

    public create<T extends AEntity> ( c: {new():T;}) : T {
        let cc = new c();
        cc.uuid = ++this.autoID;

        cc.onAwake(null);
        return cc;
    }

    public createWithData<T extends AEntity> (initData:any, c: {new():T;}) : T {
        let cc = new c();
        cc.uuid = ++this.autoID;
        cc.onAwake(initData);
        return cc;
    }



}