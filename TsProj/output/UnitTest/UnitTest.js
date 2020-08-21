"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeUtil_1 = require("../Framework/Util/TimeUtil");
const SingletonTest_1 = require("./SingletonTest");
const Logger_1 = require("../Framework/Logger/Logger");
const Messenger_1 = require("../Framework/Common/Messenger");
class UnitTest {
    static doTest() {
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
    }
}
exports.UnitTest = UnitTest;
//# sourceMappingURL=UnitTest.js.map