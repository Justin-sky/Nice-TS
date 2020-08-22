"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require('csharp');
const Logger_1 = require("./Framework/Logger/Logger");
const UnitTest_1 = require("./UnitTest/UnitTest");
const Time_1 = require("./Tools/UnityEngine/Time");
const TimeManager_1 = require("./Framework/Manager/TimeManager");
const GameObjectPool_1 = require("./Framework/Common/GameObjectPool");
class GameMain {
    constructor() {
        CS.JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        CS.JsManager.Instance.JsOnDispose = () => this.onDispose();
        CS.JsManager.Instance.JsUpdate = (deltaTime, unscaledDeltaTime) => this.onUpdate(deltaTime, unscaledDeltaTime);
        CS.JsManager.Instance.JsLateUpdate = () => this.onLateUpdate();
        CS.JsManager.Instance.JsFixedUpdate = (fixedDeltaTime) => this.onFixedUpdate(fixedDeltaTime);
    }
    start() {
        //do Unit Test
        UnitTest_1.UnitTest.doTest();
        Logger_1.Logger.log("Game start in JS....");
        //启动单例
        Time_1.Time.Instance(Time_1.Time);
        TimeManager_1.TimeManager.Instance(TimeManager_1.TimeManager);
        GameObjectPool_1.GameObjectPool.Instance(GameObjectPool_1.GameObjectPool);
    }
    onUpdate(deltaTime, unscaledDeltaTime) {
        Time_1.Time.Instance(Time_1.Time).setDeltaTime(deltaTime, unscaledDeltaTime);
        TimeManager_1.TimeManager.Instance(TimeManager_1.TimeManager).updateHandle();
        TimeManager_1.TimeManager.Instance(TimeManager_1.TimeManager).coUpdateHandle();
    }
    onLateUpdate() {
        TimeManager_1.TimeManager.Instance(TimeManager_1.TimeManager).lateUpdateHandle();
        TimeManager_1.TimeManager.Instance(TimeManager_1.TimeManager).coLateUpdateHandle();
        Time_1.Time.Instance(Time_1.Time).setFrameCount();
    }
    onFixedUpdate(fixedDeltaTime) {
        Time_1.Time.Instance(Time_1.Time).setFixedDelta(fixedDeltaTime);
        TimeManager_1.TimeManager.Instance(TimeManager_1.TimeManager).fixedUpdateHandle();
        TimeManager_1.TimeManager.Instance(TimeManager_1.TimeManager).CoFixedUpdateHandle();
    }
    onApplicationQuit() {
        TimeManager_1.TimeManager.Instance(TimeManager_1.TimeManager).dispose();
        Logger_1.Logger.log("Game onApplicationQuit in JS....");
    }
    onDispose() {
        Logger_1.Logger.log("Game onDispose in JS....");
    }
}
new GameMain().start();
//# sourceMappingURL=GameMain.js.map