

import {Singleton} from '../framework/common/Singleton';

export class SingletonTest extends Singleton<SingletonTest>{

    private num:number = 0;

    constructor(){
        super();

        console.log("SingletonTest call constructor");
    }

    public add() : void {

        this.num += 1;
    }

    public test() : number{

        return this.num;

    }

}