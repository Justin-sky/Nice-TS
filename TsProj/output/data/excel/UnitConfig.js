"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitConfigTB = exports.UnitConfigTR = void 0;
const Singleton_1 = require("../../framework/common/Singleton");
class UnitConfigTR {
    constructor(_id, _Name, _Desc, _Position, _Height, _Weight) {
        this._id = _id;
        this._Name = _Name;
        this._Desc = _Desc;
        this._Position = _Position;
        this._Height = _Height;
        this._Weight = _Weight;
    }
}
exports.UnitConfigTR = UnitConfigTR;
class UnitConfigTB extends Singleton_1.Singleton {
    constructor() {
        super();
        this.trs = new Map();
        this.trs.set(1001, new UnitConfigTR(1001, "米克尔", "带有强力攻击技能", 1, 178, 68));
    }
}
exports.UnitConfigTB = UnitConfigTB;
//# sourceMappingURL=UnitConfig.js.map