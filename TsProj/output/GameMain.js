"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require('csharp');
const Logger_1 = require("./framework/logger/Logger");
const UnitTest_1 = require("./unittest/UnitTest");
const GameObjectPool_1 = require("./framework/common/GameObjectPool");
const ModuleManager_1 = require("./framework/manager/ModuleManager");
const ModuleDef_1 = require("./game/modules/ModuleDef");
const UIManager_1 = require("./framework/manager/UIManager");
const ResManager_1 = require("./framework/manager/ResManager");
const ExcelManager_1 = require("./data/excel/ExcelManager");
class GameMain {
    constructor() {
        CS.JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        CS.JsManager.Instance.JsOnDispose = () => this.onDispose();
        CS.JsManager.Instance.JsFixedUpdate = (fixedDeltaTime) => this.onFixedUpdate(fixedDeltaTime);
    }
    async start() {
        try {
            Logger_1.Logger.log("Game start in JS....");
            //启动单例
            GameObjectPool_1.GameObjectPool.Instance(GameObjectPool_1.GameObjectPool);
            ModuleManager_1.ModuleManager.Instance(ModuleManager_1.ModuleManager);
            UIManager_1.UIManager.Instance(UIManager_1.UIManager);
            ResManager_1.ResManager.Instance(ResManager_1.ResManager);
            //预加载excel数据
            ExcelManager_1.ExcelManager.Instance(ExcelManager_1.ExcelManager);
            //do Unit Test
            UnitTest_1.UnitTest.doTest();
            //进入登录模块
            ModuleManager_1.ModuleManager.Instance(ModuleManager_1.ModuleManager).show(ModuleDef_1.ModuleDef.LoginModule);
            //JS启动完成，通知C#层
            CS.GameLaunch.Instance.JsLuanchFinish();
        }
        catch (ex) {
            Logger_1.Logger.logError(ex);
        }
    }
    onFixedUpdate(fixedDeltaTime) {
    }
    onApplicationQuit() {
        GameObjectPool_1.GameObjectPool.Instance(GameObjectPool_1.GameObjectPool).cleanup(true);
        ModuleManager_1.ModuleManager.Instance(ModuleManager_1.ModuleManager).cleanup();
        Logger_1.Logger.log("Game onApplicationQuit in JS....");
    }
    onDispose() {
        Logger_1.Logger.log("Game onDispose in JS....");
    }
}
new GameMain().start();
//# sourceMappingURL=GameMain.js.map