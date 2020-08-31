const CS = require('csharp');

import {Time} from '../../tools/unityengine/Time';
import { Logger } from '../logger/Logger';

export class Timer{

    private delay:number = 0;  //时长，秒或者帧
    private target:object = {};  //回调函数,对象
    private one_shot:boolean = false; //是否是一次性计时
    private use_frame:boolean = false; //是否是帧定时器，否则为秒定时器
    private unscaled:boolean = false; //使用deltaTime计时，还是采用unscaledDeltaTime计时
    private started:boolean = false; //是否已经启用
    private left:number = 0; //倒计时
    private over:boolean =true; //是否已经结束
    private start_frame_count:number = 0; //启动定时器时的帧数

    constructor(delay:number, func:Function, obj:object, one_shot:boolean, use_frame:boolean,unscaled:boolean){
        this.init(delay, func, obj, one_shot, use_frame,unscaled);
        
    }

    public init(delay:number, func:Function, obj:object, one_shot:boolean, use_frame:boolean,unscaled:boolean):void{
        this.delay = delay;
        this.target['func'] = func;
        this.target['obj'] = obj;
        this.one_shot = one_shot;
        this.use_frame = use_frame;
        this.unscaled = unscaled;
        this.started = false;
        this.left = delay;
        this.over = false;
        this.start_frame_count = Time.Instance(Time).frameCount;

    }

    public  update(is_fixed:boolean):void{

        if(!this.started || this.over) return;

        let timeup:boolean = false;
        if(this.use_frame){
            timeup = (Time.Instance(Time).frameCount >= this.start_frame_count + this.delay);
        }else{

            let delta:number = 0;
            if(is_fixed)
                delta = Time.Instance(Time).fixedDeltaTime;
            else{
                if(!this.unscaled){
                    delta = Time.Instance(Time).deltaTime;
                }else{
                    delta = Time.Instance(Time).unscaledDeltaTime;
                }
            }
            this.left -= delta;
            timeup = (this.left <= 0);
        }

        if(timeup){
            if(this.target["func"] != undefined){

                //改状态
                if(!this.one_shot){
                    if(!this.use_frame){
                        //-- 说明：必须把上次计时“欠下”的时间考虑进来，否则会有误差
                        this.left += this.delay;
                    }
                    this.start_frame_count = Time.Instance(Time).frameCount;
                }else{
                    this.over = true;
                }

                try{
                    Logger.log(this.target["obj"] );
                     //回调
                    if(this.target["obj"] != undefined){

                        this.target["func"].apply(this.target["obj"] )
                    }else{

                        this.target["func"].apply()
                    }

                }catch(err){
                    this.over = true;
                    Logger.logError(err);
                }
     

            }else{
                this.over = true;
            }
        }

    }

    //-- 启动计时
    public start():void{
        if(this.over){
            Logger.logError("You can't start a overed timer, try add a new one!");
        }

        if(!this.started){
            this.left = this.delay;
            this.started = true;
            this.start_frame_count = Time.Instance(Time).frameCount;
        }

    }

    //-- 暂停计时
    public pause():void{
        this.started = false;

    }

    //-- 恢复计时
    public resume():void{
        this.started = true;
    }

    //-- 停止计时
    public stop():void{

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
    public reset():void{
        this.left = this.delay;
        this.start_frame_count = Time.Instance(Time).frameCount;
    }

    //-- 是否已经完成计时
    public isOver():boolean{
        if(this.target["func"] == undefined) return true;

        if(this.target["func"] == undefined && this.target["obj"]!= undefined) return true;

        return this.over;
    }



}