"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require('csharp');
const Logger_1 = require("./Framework/Logger/Logger");
const UnitTest_1 = require("./UnitTest/UnitTest");
class GameMain {
    constructor() {
        CS.JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        CS.JsManager.Instance.JsOnDispose = () => this.onDispose();
    }
    start() {
        //do Unit Test
        UnitTest_1.UnitTest.doTest();
        Logger_1.Logger.log("Game start in JS....");
    }
    onApplicationQuit() {
        Logger_1.Logger.log("Game onApplicationQuit in JS....");
    }
    onDispose() {
        Logger_1.Logger.log("Game onDispose in JS....");
    }
}
new GameMain().start();
//# sourceMappingURL=GameMain.js.map