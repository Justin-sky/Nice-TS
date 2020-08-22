"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseScene {
    constructor(scen_config) {
        this.scene_config = scen_config;
        this.preload_resources = {};
        this.preload_prefab = {};
        this.onCreate();
    }
    //-- 创建：初始化一些需要全局保存的状态
    onCreate() {
    }
    //-- 添加预加载资源
    //-- 注意：只有prefab类型才需要填inst_count，用于指定初始实例化个数
    addPreloadResource(path, res_type, inst_count) {
    }
    //-- 加载前的初始化
    onEnter() {
    }
    //-- 场景加载结束：后续资源准备（预加载等）
    //-- 注意：这里使用Async，子类别重写了，需要加载的资源添加到列表就可以了
    async CoOnPrepare() {
    }
    //-- 场景加载完毕
    onComplete() {
    }
    //-- 离开场景：清理场景资源
    onLeave() {
    }
    //-- 销毁：释放全局保存的状态
    onDestroy() {
        this.scene_config = undefined;
        this.preload_resources = undefined;
    }
}
exports.BaseScene = BaseScene;
//# sourceMappingURL=BaseScene.js.map