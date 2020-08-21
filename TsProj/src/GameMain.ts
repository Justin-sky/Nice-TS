
const CS = require('csharp');
import {Logger} from './Framework/Logger/Logger';
import {UnitTest} from './UnitTest/UnitTest';


class GameMain{

    constructor() {
        CS.JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        CS.JsManager.Instance.JsOnDispose = () => this.onDispose();

    }

    start():void {


        //do Unit Test
        UnitTest.doTest();




        Logger.log("Game start in JS....");
    }

    onApplicationQuit():void {

        Logger.log("Game onApplicationQuit in JS....");
    }

    onDispose():void {
        Logger.log("Game onDispose in JS....");
    }
    
}

new GameMain().start();

