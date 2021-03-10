

import {Singleton} from '../framework/common/Singleton';
import { Logger } from '../framework/logger/Logger';

export class SingletonTest extends Singleton<SingletonTest>{

    private num:number = 0;

    constructor(){
        super();

        Logger.log("SingletonTest call constructor");
    }

    public add() : void {

        this.num += 1;
    }

    public test() : number{

        return this.num;

    }

}