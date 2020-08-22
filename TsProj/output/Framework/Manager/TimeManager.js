"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../Common/Singleton");
const Timer_1 = require("../Timer/Timer");
// -- 定时器管理：负责定时器获取、回收、缓存、调度等管理
// -- 注意：
// -- 1、任何需要定时更新的函数从这里注册，游戏逻辑层最好使用不带"Co"的接口
// -- 2、带有"Co"的接口都是用于协程，它的调度会比普通更新后一步---次序依从Unity函数调用次序：https://docs.unity3d.com/Manual/ExecutionOrder.html
// -- 3、UI界面倒计时刷新等不需要每帧去更新的逻辑最好用定时器，少用Updatable，定时器能很好避免频繁的无用调用
// -- 4、定时器并非精确定时，误差范围和帧率相关
// -- 5、循环定时器不会累积误差，这点和Updater的Update函数自己去控制时间刷新是一致的，很好用
// -- 6、定时器是weak表，使用临时对象时不会持有引用
// -- 7、慎用临时函数、临时闭包，所有临时对象要外部自行维护引用以保障生命周期，否则会被GC掉===>很重要***
// -- 8、考虑到定时器可能会被频繁构造、回收，这里已经做了缓存池优化
class TimeManager extends Singleton_1.Singleton {
    constructor() {
        super();
        //定时器列表
        this.__update_timer = new Array();
        this.__lateupdate_timer = new Array();
        this.__fixedupdate_timer = new Array();
        this.__coupdate_timer = new Array();
        this.__colateupdate_timer = new Array();
        this.__cofixedupdate_timer = new Array();
        //定时器缓存
        this.__pool = new Array();
        //待添加的定时器列表
        this.__update_toadd = new Array();
        this.__lateupdate_toadd = new Array();
        this.__fixedupdate_toadd = new Array();
        this.__coupdate_toadd = new Array();
        this.__colateupdate_toadd = new Array();
        this.__cofixedupdate_toadd = new Array();
    }
    // 延后回收定时器，必须全部更新完毕再回收，否则会有问题
    delayRecyle(timers) {
        for (let i = timers.length - 1; i >= 0; i--) {
            let timer = timers[i];
            if (timer.isOver()) {
                timer.stop();
                this.__pool.push(timer);
                timers.splice(i, 1);
            }
        }
    }
    //Update回调
    updateHandle() {
        for (let i = this.__update_toadd.length - 1; i >= 0; i--) {
            let timer = this.__update_toadd[i];
            this.__update_timer.push(timer);
            this.__update_toadd.splice(i, 1);
        }
        for (let t of this.__update_timer) {
            t.update(false);
        }
        this.delayRecyle(this.__update_timer);
    }
    //-- LateUpdate回调
    lateUpdateHandle() {
        for (let i = this.__lateupdate_toadd.length - 1; i >= 0; i--) {
            let timer = this.__lateupdate_toadd[i];
            this.__lateupdate_timer.push(timer);
            this.__lateupdate_toadd.splice(i, 1);
        }
        for (let t of this.__lateupdate_timer) {
            t.update(false);
        }
        this.delayRecyle(this.__lateupdate_timer);
    }
    //-- FixedUpdate回调
    fixedUpdateHandle() {
        for (let i = this.__fixedupdate_toadd.length - 1; i >= 0; i--) {
            let timer = this.__fixedupdate_toadd[i];
            this.__fixedupdate_timer.push(timer);
            this.__fixedupdate_toadd.splice(i, 1);
        }
        for (let t of this.__fixedupdate_timer) {
            t.update(true);
        }
        this.delayRecyle(this.__fixedupdate_timer);
    }
    //-- CoUpdate回调
    coUpdateHandle() {
        for (let i = this.__coupdate_toadd.length - 1; i >= 0; i--) {
            let timer = this.__coupdate_toadd[i];
            this.__coupdate_timer.push(timer);
            this.__coupdate_toadd.splice(i, 1);
        }
        for (let t of this.__coupdate_timer) {
            t.update(false);
        }
        this.delayRecyle(this.__coupdate_timer);
    }
    //-- CoLateUpdate回调
    coLateUpdateHandle() {
        for (let i = this.__colateupdate_toadd.length - 1; i >= 0; i--) {
            let timer = this.__colateupdate_toadd[i];
            this.__colateupdate_timer.push(timer);
            this.__colateupdate_toadd.splice(i, 1);
        }
        for (let t of this.__colateupdate_timer) {
            t.update(false);
        }
        this.delayRecyle(this.__colateupdate_timer);
    }
    //-- CoFixedUpdate回调
    CoFixedUpdateHandle() {
        for (let i = this.__cofixedupdate_toadd.length - 1; i >= 0; i--) {
            let timer = this.__cofixedupdate_toadd[i];
            this.__cofixedupdate_timer.push(timer);
            this.__cofixedupdate_toadd.splice(i, 1);
        }
        for (let t of this.__cofixedupdate_timer) {
            t.update(true);
        }
        this.delayRecyle(this.__cofixedupdate_timer);
    }
    //-- 释放
    dispose() {
    }
    //-- 清理：可用在场景切换前，不清理关系也不大，只是缓存池不会下降
    cleanup() {
        this.__update_timer = new Array();
        this.__lateupdate_timer = new Array();
        this.__fixedupdate_timer = new Array();
        this.__coupdate_timer = new Array();
        this.__colateupdate_timer = new Array();
        this.__cofixedupdate_timer = new Array();
        this.__pool = new Array();
        this.__update_toadd = new Array();
        this.__lateupdate_toadd = new Array();
        this.__fixedupdate_toadd = new Array();
        this.__coupdate_toadd = new Array();
        this.__colateupdate_toadd = new Array();
        this.__cofixedupdate_toadd = new Array();
    }
    //-- 获取定时器
    InnerGetTimer(delay, func, obj, one_shot, use_frame, unscaled) {
        let timer;
        if (this.__pool.length > 0) {
            timer = this.__pool.pop();
            timer.init(delay, func, obj, one_shot, use_frame, unscaled);
        }
        else {
            timer = new Timer_1.Timer(delay, func, obj, one_shot, use_frame, unscaled);
        }
        return timer;
    }
    //-- 获取Update定时器
    getTImer(delay, func, obj, one_shot = false, use_frame = false, unscaled = true) {
        let timer = this.InnerGetTimer(delay, func, obj, one_shot, use_frame, unscaled);
        this.__update_toadd.push(timer);
        return timer;
    }
    //-- 获取LateUpdate定时器
    getLateTImer(delay, func, obj, one_shot = false, use_frame = false, unscaled = true) {
        let timer = this.InnerGetTimer(delay, func, obj, one_shot, use_frame, unscaled);
        this.__lateupdate_toadd.push(timer);
        return timer;
    }
    //-- 获取FixedUpdate定时器
    getFixedTImer(delay, func, obj, one_shot = false, use_frame = false, unscaled = true) {
        let timer = this.InnerGetTimer(delay, func, obj, one_shot, use_frame, unscaled);
        this.__fixedupdate_toadd.push(timer);
        return timer;
    }
    //-- 获取CoUpdate定时器
    getCoTImer(delay, func, obj, one_shot = false, use_frame = false, unscaled = true) {
        let timer = this.InnerGetTimer(delay, func, obj, one_shot, use_frame, unscaled);
        this.__coupdate_toadd.push(timer);
        return timer;
    }
    //-- 获取CoLateUpdate定时器
    getCoLateTImer(delay, func, obj, one_shot = false, use_frame = false, unscaled = true) {
        let timer = this.InnerGetTimer(delay, func, obj, one_shot, use_frame, unscaled);
        this.__colateupdate_toadd.push(timer);
        return timer;
    }
    //-- 获取CoFixedUpdate定时器
    getCoFixedTImer(delay, func, obj, one_shot = false, use_frame = false, unscaled = true) {
        let timer = this.InnerGetTimer(delay, func, obj, one_shot, use_frame, unscaled);
        this.__cofixedupdate_toadd.push(timer);
        return timer;
    }
}
exports.TimeManager = TimeManager;
//# sourceMappingURL=TimeManager.js.map