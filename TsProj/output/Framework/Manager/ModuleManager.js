"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../common/Singleton");
const Logger_1 = require("../logger/Logger");
const ModuleFactory_1 = require("../module/ModuleFactory");
class MessageObject {
}
exports.MessageObject = MessageObject;
class ModuleManager extends Singleton_1.Singleton {
    constructor() {
        super();
        this.m_mapModules = new Map();
        this.m_mapCacheMessage = new Map();
    }
    cleanup() {
        this.m_mapCacheMessage.clear();
        for (const module of this.m_mapModules.values()) {
            module.release();
        }
        this.m_mapModules.clear();
    }
    createModule(name, args) {
        Logger_1.Logger.log(`name = ${name}, args = ${args}`);
        if (this.hasModule(name)) {
            Logger_1.Logger.logError(`The Module<${name}> Has Existed!`);
            return this.getModule(name);
        }
        let module = ModuleFactory_1.ModuleFactory.createModule(name);
        if (module == null) {
            Logger_1.Logger.logError(`模块实例化失败：<${name}> `);
            return null;
        }
        this.m_mapModules.set(name, module);
        module.create(args);
        //处理缓存的消息
        if (this.m_mapCacheMessage.has(name)) {
            let list = this.m_mapCacheMessage.get(name);
            for (const msgobj of list) {
                module.handleMessage(msgobj.msg, msgobj.args);
            }
            this.m_mapCacheMessage.delete(name);
        }
        return module;
    }
    hasModule(name) {
        return this.m_mapModules.has(name);
    }
    getModule(name) {
        return this.m_mapModules.get(name);
    }
    removeModule(name) {
        let module = this.getModule(name);
        if (module != undefined)
            module.release();
        this.m_mapModules.delete(name);
    }
    getCacheMessageList(target) {
        let list = this.m_mapCacheMessage.get(target);
        if (list == undefined) {
            list = new Array();
            this.m_mapCacheMessage.set(target, list);
        }
        return list;
    }
    sendMessage(target, msg, ...args) {
        let module = this.getModule(target);
        if (module != undefined) {
            module.handleMessage(msg, args);
        }
        else {
            let list = this.getCacheMessageList(target);
            let obj = new MessageObject();
            obj.msg = msg;
            obj.args = args;
            list.push(obj);
        }
    }
    show(target, ...args) {
        let model = this.getModule(target);
        if (!model) {
            model = this.createModule(target);
        }
        model.show(args);
    }
}
exports.ModuleManager = ModuleManager;
//# sourceMappingURL=ModuleManager.js.map