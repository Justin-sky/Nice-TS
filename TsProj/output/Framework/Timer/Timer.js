"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
const CS = require('csharp');
const Time_1 = require("../../tools/unityengine/Time");
const Logger_1 = require("../logger/Logger");
class Timer {
    constructor(delay, func, obj, one_shot, use_frame, unscaled) {
        this.delay = 0; //时长，秒或者帧
        this.target = {}; //回调函数,对象
        this.one_shot = false; //是否是一次性计时
        this.use_frame = false; //是否是帧定时器，否则为秒定时器
        this.unscaled = false; //使用deltaTime计时，还是采用unscaledDeltaTime计时
        this.started = false; //是否已经启用
        this.left = 0; //倒计时
        this.over = true; //是否已经结束
        this.start_frame_count = 0; //启动定时器时的帧数
        this.init(delay, func, obj, one_shot, use_frame, unscaled);
    }
    init(delay, func, obj, one_shot, use_frame, unscaled) {
        this.delay = delay;
        this.target['func'] = func;
        this.target['obj'] = obj;
        this.one_shot = one_shot;
        this.use_frame = use_frame;
        this.unscaled = unscaled;
        this.started = false;
        this.left = delay;
        this.over = false;
        this.start_frame_count = Time_1.Time.Instance(Time_1.Time).frameCount;
    }
    update(is_fixed) {
        if (!this.started || this.over)
            return;
        let timeup = false;
        if (this.use_frame) {
            timeup = (Time_1.Time.Instance(Time_1.Time).frameCount >= this.start_frame_count + this.delay);
        }
        else {
            let delta = 0;
            if (is_fixed)
                delta = Time_1.Time.Instance(Time_1.Time).fixedDeltaTime;
            else {
                if (!this.unscaled) {
                    delta = Time_1.Time.Instance(Time_1.Time).deltaTime;
                }
                else {
                    delta = Time_1.Time.Instance(Time_1.Time).unscaledDeltaTime;
                }
            }
            this.left -= delta;
            timeup = (this.left <= 0);
        }
        if (timeup) {
            if (this.target["func"] != undefined) {
                //改状态
                if (!this.one_shot) {
                    if (!this.use_frame) {
                        //-- 说明：必须把上次计时“欠下”的时间考虑进来，否则会有误差
                        this.left += this.delay;
                    }
                    this.start_frame_count = Time_1.Time.Instance(Time_1.Time).frameCount;
                }
                else {
                    this.over = true;
                }
                try {
                    Logger_1.Logger.log(this.target["obj"]);
                    //回调
                    if (this.target["obj"] != undefined) {
                        this.target["func"].apply(this.target["obj"]);
                    }
                    else {
                        this.target["func"].apply();
                    }
                }
                catch (err) {
                    this.over = true;
                    Logger_1.Logger.logError(err);
                }
            }
            else {
                this.over = true;
            }
        }
    }
    //-- 启动计时
    start() {
        if (this.over) {
            Logger_1.Logger.logError("You can't start a overed timer, try add a new one!");
        }
        if (!this.started) {
            this.left = this.delay;
            this.started = true;
            this.start_frame_count = Time_1.Time.Instance(Time_1.Time).frameCount;
        }
    }
    //-- 暂停计时
    pause() {
        this.started = false;
    }
    //-- 恢复计时
    resume() {
        this.started = true;
    }
    //-- 停止计时
    stop() {
        this.left = 0;
        this.one_shot = false;
        this.target["func"] = undefined;
        this.target["obj"] = undefined;
        this.use_frame = false;
        this.unscaled = false;
        this.started = false;
        this.over = true;
    }
    //-- 复位：如果计时器是启动的，并不会停止，只是刷新倒计时
    reset() {
        this.left = this.delay;
        this.start_frame_count = Time_1.Time.Instance(Time_1.Time).frameCount;
    }
    //-- 是否已经完成计时
    isOver() {
        if (this.target["func"] == undefined)
            return true;
        if (this.target["func"] == undefined && this.target["obj"] != undefined)
            return true;
        return this.over;
    }
}
exports.Timer = Timer;
//# sourceMappingURL=Timer.js.map