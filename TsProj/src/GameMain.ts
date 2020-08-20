
const CS = require('csharp');
import {Logger} from "./Framework/Logger/Logger";

class GameMain{

    constructor() {
        CS.JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        CS.JsManager.Instance.JsOnDispose = () => this.onDispose();

    }

    start():void {

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

