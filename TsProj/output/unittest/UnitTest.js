"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeUtil_1 = require("../framework/util/TimeUtil");
const SingletonTest_1 = require("./SingletonTest");
const Logger_1 = require("../framework/logger/Logger");
const Messenger_1 = require("../framework/common/Messenger");
const TimeManager_1 = require("../framework/manager/TimeManager");
const ResManager_1 = require("../framework/manager/ResManager");
const OuterMessage_1 = require("../data/pb/OuterMessage");
const SkillConfig_1 = require("../data/excel/SkillConfig");
const Opcode_1 = require("../data/pb/Opcode");
const CS = require('csharp');
const flatbuffers = require("../fb/flatbuffers");
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
        Logger_1.Logger.log("excel data =============================");
        let skillMap = SkillConfig_1.SkillConfigTB.Instance(SkillConfig_1.SkillConfigTB).trs;
        let skilltr = skillMap.get(1003);
        Logger_1.Logger.log(`${skilltr._Name} : ${skilltr._AttackType}`);
        let impacttype = skilltr._ImpactType;
        Logger_1.Logger.log(impacttype);
        Logger_1.Logger.log("Protobuf =============================");
        try {
            let c2m_req = {
                "RpcId": 11,
                "ActorId": 998,
                "request": "test"
            };
            //验证
            let v1 = OuterMessage_1.NiceET.C2M_TestRequest.verify(c2m_req);
            Logger_1.Logger.log("verify pb: " + v1);
            let msg = OuterMessage_1.NiceET.C2M_TestRequest.create(c2m_req);
            msg.RpcId = 100000;
            msg.request = "good bye";
            msg.ActorId = 88888;
            Logger_1.Logger.log(msg);
            let buf = OuterMessage_1.NiceET.C2M_TestRequest.encode(msg).finish();
            Logger_1.Logger.log(buf);
            let de_buf = OuterMessage_1.NiceET.C2M_TestRequest.decode(buf);
            Logger_1.Logger.log(de_buf.RpcId);
            Logger_1.Logger.log(de_buf.request);
            let de_m = OuterMessage_1.NiceET.C2M_TestRequest.decode;
            let de_m_t = de_m(buf);
            Logger_1.Logger.log("========:" + de_m_t.request);
            Logger_1.Logger.log("protobuf opcode:");
            let op_test = Opcode_1.Opcode.map[Opcode_1.Opcode.C2M_TESTREQUEST](buf);
            Logger_1.Logger.log("test opcode: " + op_test.request);
        }
        catch (ex) {
            Logger_1.Logger.log(ex);
        }
        Logger_1.Logger.log("UintArray =============================");
        let opcode_arr = new Uint8Array([257, 25]);
        Logger_1.Logger.log(opcode_arr.subarray(0, 1));
        Logger_1.Logger.log(opcode_arr.length);
        let opcode_arr2 = new Uint8Array([33]);
        //合并 Uint8Array
        let merge_arr = new Uint8Array(opcode_arr.length + opcode_arr2.length);
        merge_arr.set(opcode_arr2);
        merge_arr.set(opcode_arr, opcode_arr2.length);
        Logger_1.Logger.log(merge_arr.length);
        let n = 5678;
        let buffer = new Uint8Array(4);
        // << 左移  >> 右移  >>> 无符号右移
        //n转uint8Array
        buffer[0] = n >>> 24;
        buffer[1] = n >>> 16;
        buffer[2] = n >>> 8;
        buffer[3] = n & 0xff;
        //unit8Array转n
        n = buffer[0] << 24 | buffer[1] << 16 | buffer[2] << 8 | buffer[3];
        Logger_1.Logger.log(n);
    }
}
UnitTest.testVar = 10000;
exports.UnitTest = UnitTest;
//# sourceMappingURL=UnitTest.js.map