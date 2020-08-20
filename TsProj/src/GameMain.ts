
const CS = require('csharp');

class GameMain{

    constructor() {
        CS.JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        CS.JsManager.Instance.JsOnDispose = () => this.onDispose();

    }

    start():void {

        console.log("Game start in JS....");
    }

    onApplicationQuit():void {

        console.log("Game onApplicationQuit in JS....");
    }

    onDispose():void {
        console.log("Game onDispose in JS....");
    }
    
}

new GameMain().start();

