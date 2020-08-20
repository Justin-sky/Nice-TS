const CS = require('csharp');
class GameMain {
    constructor() {
        CS.JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        CS.JsManager.Instance.JsOnDispose = () => this.onDispose();
        CS.JsManager.Instance.JsOnUpdate = () => this.onUpdate();
    }
    start() {
        console.log("Game start in JS....");
    }
    onApplicationQuit() {
        console.log("Game onApplicationQuit in JS....");
    }
    onDispose() {
        console.log("Game onDispose in JS....");
    }
    onUpdate() {
        console.log("Game onnUpdate in JS....");
    }
}
new GameMain().start();
//# sourceMappingURL=GameMain.js.map