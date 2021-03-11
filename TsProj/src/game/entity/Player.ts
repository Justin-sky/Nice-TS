import { AEntity } from "../../framework/entity/AEntity";

export class Player extends AEntity {

    public onAwake(initData: any) {
        
    }

    public level:number;
    public hp:number;

    constructor(){
        super();
        this.level = 1;
        this.hp = 100;
    }
}

