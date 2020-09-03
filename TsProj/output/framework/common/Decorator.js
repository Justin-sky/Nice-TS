"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function binder(name) {
    return function (target, key) {
        Logger.log("..........binder: " + name);
        Logger.log(key);
        target["binders"] = target["binders"] || {};
        target["binders"][key] = name;
    };
}
exports.binder = binder;
//# sourceMappingURL=Decorator.js.map