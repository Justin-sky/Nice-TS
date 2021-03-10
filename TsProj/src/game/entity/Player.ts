import { Entity } from "../../framework/entity/Entity";

export class Player extends Entity {


    public level:number;
    public hp:number;

    constructor(){
        super();
        this.level = 1;
        this.hp = 100;
    }
}

