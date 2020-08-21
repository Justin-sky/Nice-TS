"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../Framework/Common/Singleton");
const Logger_1 = require("../Framework/Logger/Logger");
class SingletonTest extends Singleton_1.Singleton {
    constructor() {
        super();
        this.num = 0;
        Logger_1.Logger.log("SingletonTest call constructor");
    }
    add() {
        this.num += 1;
    }
    test() {
        return this.num;
    }
}
exports.SingletonTest = SingletonTest;
//# sourceMappingURL=SingletonTest.js.map