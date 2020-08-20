const CS = require('csharp');
const logger = require("./Framework/Logger/Logger");
class GameMain {
    constructor() {
        CS.JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        CS.JsManager.Instance.JsOnDispose = () => this.onDispose();
    }
    start() {
        logger.log("Game start in JS....");
    }
    onApplicationQuit() {
        logger.log("Game onApplicationQuit in JS....");
    }
    onDispose() {
        logger.log("Game onDispose in JS....");
    }
}
new GameMain().start();
//# sourceMappingURL=GameMain.js.map