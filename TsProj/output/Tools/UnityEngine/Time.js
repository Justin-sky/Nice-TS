"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
const CS = require('csharp');
const unity_time = CS.UnityEngine.Time;
const Singleton_1 = require("../../framework/common/Singleton");
class Time extends Singleton_1.Singleton {
    constructor() {
        super();
        this._deltaTime = 0;
        this._fixedDeltaTime = 0;
        this._maximumDeltaTime = 0.3333333;
        this._fixedTime = 0;
        this._frameCount = 1;
        this._realtimeSinceStartup = 0;
        this._time = 0;
        this._timeScale = 1;
        this._timeSinceLevelLoad = 0;
        this._unscaledDeltaTime = 0;
        this._unscaledTime = 0;
        this._captureFramerate = 0;
        this.counter = 1;
        if (unity_time != undefined) {
            this._maximumDeltaTime = unity_time._maximumDeltaTime;
            this._timeScale = unity_time.timeScale;
        }
    }
    get unscaledTime() {
        return this._unscaledTime;
    }
    get deltaTime() {
        return this._deltaTime;
    }
    get fixedTime() {
        return this._fixedTime;
    }
    get frameCount() {
        return this._frameCount;
    }
    get realtimeSinceStartup() {
        return this._realtimeSinceStartup;
    }
    get time() {
        return this._time;
    }
    get unscaledDeltaTime() {
        return this._unscaledDeltaTime;
    }
    get fixedDeltaTime() {
        return this._fixedDeltaTime;
    }
    set fixedDeltaTime(v) {
        this._fixedDeltaTime = v;
        unity_time.fixedDeltaTime = v;
    }
    get maximumDeltaTime() {
        return this._maximumDeltaTime;
    }
    set maximumDeltaTime(v) {
        this._maximumDeltaTime = v;
        unity_time.maximumDeltaTime = v;
    }
    get timeScale() {
        return this._timeScale;
    }
    set timeScale(v) {
        this._timeScale = v;
        unity_time.timeScale = v;
    }
    get captureFramerate() {
        return this._captureFramerate;
    }
    set captureFramerate(v) {
        this._captureFramerate = v;
        unity_time.captureFramerate = v;
    }
    get timeSinceLevelLoad() {
        return this._timeSinceLevelLoad;
    }
    set timeSinceLevelLoad(v) {
        this._timeSinceLevelLoad = v;
    }
    setDeltaTime(deltaTime, unscaledDeltaTime) {
        this._deltaTime = deltaTime;
        this._unscaledDeltaTime = unscaledDeltaTime;
        this.counter -= 1;
        if (this.counter == 0 && unity_time != undefined) {
            this._time = unity_time.time;
            this._timeSinceLevelLoad = unity_time.timeSinceLevelLoad;
            this._unscaledTime = unity_time.unscaledTime;
            this._realtimeSinceStartup = unity_time.realtimeSinceStartup;
            this._frameCount = unity_time.frameCount;
            this.counter = 1000000;
        }
        else {
            this._time += deltaTime;
            this._realtimeSinceStartup += unscaledDeltaTime;
            this._timeSinceLevelLoad += deltaTime;
            this._unscaledTime += unscaledDeltaTime;
        }
    }
    setFixedDelta(fixedDeltaTime) {
        this._deltaTime = fixedDeltaTime;
        this._fixedDeltaTime = fixedDeltaTime;
        this._fixedTime += fixedDeltaTime;
    }
    setFrameCount() {
        this._frameCount += 1;
    }
    setTimeScale(scale) {
        let last = this._timeScale;
        this._timeScale = scale;
        unity_time.timeScale = scale;
        return last;
    }
    getTimestamp() {
        return new Date().getTime();
    }
}
exports.Time = Time;
//# sourceMappingURL=Time.js.map