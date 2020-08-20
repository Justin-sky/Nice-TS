"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require('csharp');
class Logger {
    static log(msg) {
        CS.Logger.Log(msg);
    }
    static logError(msg) {
        CS.Logger.LogError(msg);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map