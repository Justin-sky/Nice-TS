"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const CS = require('csharp');
const GameConfig_1 = require("../../Global/GameConfig");
class Logger {
    static log(msg) {
        if (GameConfig_1.GameConfig.debug)
            CS.Logger.Log(`${msg}`);
    }
    static logError(msg) {
        if (GameConfig_1.GameConfig.debug)
            CS.Logger.LogError(`${msg}`);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map