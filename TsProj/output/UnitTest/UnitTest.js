"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeUtil_1 = require("../Framework/Util/TimeUtil");
const SingletonTest_1 = require("./SingletonTest");
const Logger_1 = require("../Framework/Logger/Logger");
const Messenger_1 = require("../Framework/Common/Messenger");
const TimeManager_1 = require("../Framework/Manager/TimeManager");
const ResManager_1 = require("../Framework/Manager/ResManager");
const CS = require('csharp');
class UnitTest {
    static async doTest() {
        Logger_1.Logger.log("TimeUtil =============================");
        TimeUtil_1.TimeUtil.test();
        Logger_1.Logger.log("Singleton =============================");
        SingletonTest_1.SingletonTest.Instance(SingletonTest_1.SingletonTest);
        Logger_1.Logger.log("===");
        let t1 = SingletonTest_1.SingletonTest.Instance(SingletonTest_1.SingletonTest);
        let t2 = SingletonTest_1.SingletonTest.Instance(SingletonTest_1.SingletonTest);
        Logger_1.Logger.log(t1.test() + " : " + t2.test());
        t1.add();
        Logger_1.Logger.log(t1.test() + " : " + t2.test());
        t2.add();
        Logger_1.Logger.log(t1.test() + " : " + t2.test());
        Logger_1.Logger.log("Messager =============================");
        let messenger = new Messenger_1.Messenger();
        let listen = function (a, b) {
            Logger_1.Logger.log(`listen call: ${a} , ${b}`);
        };
        let listen2 = function (a, b) {
            Logger_1.Logger.log(`listen call2: ${a} , ${b}`);
        };
        let EVENT_CODE = 100;
        messenger.addListener(EVENT_CODE, listen);
        messenger.addListener(EVENT_CODE, listen2);
        messenger.broadcast(EVENT_CODE, 999, " Hello");
        messenger.removeListener(EVENT_CODE, listen);
        messenger.broadcast(EVENT_CODE, 999, " Hello");
        messenger.clearup();
        messenger.broadcast(EVENT_CODE, 999, " Hello");
        Logger_1.Logger.log("Timer =============================");
        let timeFun = function () {
            Logger_1.Logger.log(this.testVar);
            Logger_1.Logger.log("timer tick..");
        };
        let timer = TimeManager_1.TimeManager.Instance(TimeManager_1.TimeManager).getTImer(5, timeFun, this);
        //timer.start();
        Logger_1.Logger.log("ResourceManager =============================");
        let prefab = await ResManager_1.ResManager.Instance(ResManager_1.ResManager).loadPrefab("Models/1001/Character.prefab");
        Logger_1.Logger.log(prefab);
        //let inst = CS.UnityEngine.GameObject.Instantiate(prefab);
        //inst.name = "Test Ch";
        Logger_1.Logger.log("引用类型 =============================");
        let testMap = new Map();
        testMap.set("key1", new Array());
        let arr1 = testMap.get("key1");
        arr1.push(12);
        arr1.push(333);
        let arr2 = testMap.get("key1");
        Logger_1.Logger.log(arr2);
        // Logger.log("FariyGUI =============================");
        //  let page:UI_LoginPage = new UI_LoginPage();
        //  CS.FairyGUI.GRoot.inst.AddChild(page._ui);
        //  Logger.log(page._ui);
        // Logger.log("ModuleManager =============================");
        // ModuleManager.Instance(ModuleManager).createModule(ModuleDef.LoginModule,"create login");
        // ModuleManager.Instance(ModuleManager).sendMessage(ModuleDef.LoginModule, "test1",2233);
        // ModuleManager.Instance(ModuleManager).sendMessage(ModuleDef.HomeModule, "test2",2233);
        // Logger.log("then create Home");
        // ModuleManager.Instance(ModuleManager).createModule(ModuleDef.HomeModule,"create login");
        Logger_1.Logger.log("UIManager =============================");
        Logger_1.Logger.log("Flatbuffer =============================");
    }
}
UnitTest.testVar = 10000;
exports.UnitTest = UnitTest;
//# sourceMappingURL=UnitTest.js.map