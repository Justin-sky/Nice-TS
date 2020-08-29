
const CS = require('csharp');
const unity_time = CS.UnityEngine.Time;
import {Singleton} from '../../framework/common/Singleton';
import { Logger } from '../../framework/logger/Logger';

export class Time extends Singleton<Time>{

    private _deltaTime:number	= 0;
	private _fixedDeltaTime 	= 0;
	private _maximumDeltaTime	= 0.3333333;
	private _fixedTime			= 0;
	private _frameCount			= 1;	
	private _realtimeSinceStartup= 0;
	private _time 				= 0;
	private _timeScale			= 1;
	private _timeSinceLevelLoad	= 0;
	private _unscaledDeltaTime	= 0;
    private _unscaledTime		= 0;
    private _captureFramerate   = 0;

    private counter:number = 1;

    public get unscaledTime(){
        return this._unscaledTime;
    }

    public get deltaTime(){
        return this._deltaTime;
    }

    public get fixedTime(){
        return this._fixedTime;
    }

    public get frameCount(){
        return this._frameCount;
    }

    public get realtimeSinceStartup(){
        return this._realtimeSinceStartup;
    }

    public get time(){
        return this._time;
    }

    public get unscaledDeltaTime(){
        return this._unscaledDeltaTime;
    }

    public get fixedDeltaTime(){
        return this._fixedDeltaTime;
    }

    public set fixedDeltaTime(v:number){
        this._fixedDeltaTime = v;
        unity_time.fixedDeltaTime = v;
    }

    public get maximumDeltaTime(){
        return this._maximumDeltaTime;
    }

    public set maximumDeltaTime(v:number){
        this._maximumDeltaTime = v;
        unity_time.maximumDeltaTime = v;
    }

    public get timeScale(){
        return this._timeScale;
    }

    public set timeScale(v:number){

        this._timeScale = v;
        unity_time.timeScale = v
    }

    public get captureFramerate(){
        return this._captureFramerate;
    }

    public set captureFramerate(v:number){
        
        this._captureFramerate = v;
        unity_time.captureFramerate = v;
    }

    public get timeSinceLevelLoad(){
        return this._timeSinceLevelLoad;
    }

    public set timeSinceLevelLoad(v:number){

        this._timeSinceLevelLoad = v;
    }


    public setDeltaTime(deltaTime:number, unscaledDeltaTime:number):void{
        this._deltaTime = deltaTime;
        this._unscaledDeltaTime = unscaledDeltaTime;
        this.counter -= 1;

        if(this.counter == 0 && unity_time != undefined){
            this._time = unity_time.time;
            this._timeSinceLevelLoad = unity_time.timeSinceLevelLoad;
            this._unscaledTime = unity_time.unscaledTime;
            this._realtimeSinceStartup = unity_time.realtimeSinceStartup;
            this._frameCount = unity_time.frameCount;

            this.counter = 1000000;

        }else{
            this._time += deltaTime;
            this._realtimeSinceStartup += unscaledDeltaTime;
            this._timeSinceLevelLoad += deltaTime;
            this._unscaledTime += unscaledDeltaTime;
        }

    }


    public setFixedDelta(fixedDeltaTime:number):void{

        this._deltaTime = fixedDeltaTime;
        this._fixedDeltaTime = fixedDeltaTime;

        this._fixedTime += fixedDeltaTime;
    }


    public setFrameCount():void{
        this._frameCount += 1;
    }

    public setTimeScale(scale: number):number{

        let last = this._timeScale;
        this._timeScale = scale;

        unity_time.timeScale = scale;

        return last;
    }

    public getTimestamp():number{

        return new Date().getTime();
    }

    constructor(){
        
        super();

        if(unity_time != undefined){

            this._maximumDeltaTime = unity_time._maximumDeltaTime;
            this._timeScale = unity_time.timeScale;
        }
    }


}