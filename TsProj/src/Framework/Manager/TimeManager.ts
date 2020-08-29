import { Singleton } from '../common/Singleton';
import { Logger } from '../logger/Logger';
import { Timer } from '../timer/Timer';


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

export class TimeManager extends Singleton<TimeManager>{


    //定时器列表
    private __update_timer:Array<Timer> = new Array<Timer>();
    private __lateupdate_timer:Array<Timer> = new Array<Timer>();
    private __fixedupdate_timer:Array<Timer> = new Array<Timer>();
    private __coupdate_timer:Array<Timer> = new Array<Timer>();
    private __colateupdate_timer:Array<Timer> = new Array<Timer>();
    private __cofixedupdate_timer:Array<Timer> = new Array<Timer>();

    //定时器缓存
    private __pool:Array<Timer> = new Array<Timer>();


    //待添加的定时器列表
    private __update_toadd:Array<Timer> = new Array<Timer>();
    private __lateupdate_toadd:Array<Timer> = new Array<Timer>();
    private __fixedupdate_toadd:Array<Timer> = new Array<Timer>();
    private __coupdate_toadd:Array<Timer> = new Array<Timer>();
    private __colateupdate_toadd:Array<Timer> = new Array<Timer>();
    private __cofixedupdate_toadd:Array<Timer> = new Array<Timer>();

    
    constructor(){
        super();


    }

    // 延后回收定时器，必须全部更新完毕再回收，否则会有问题
    public delayRecyle(timers:Array<Timer>):void {

        for(let i:number = timers.length-1; i>=0; i--){
            let timer:Timer = timers[i];

            if(timer.isOver()){
                timer.stop();
                this.__pool.push(timer);

                timers.splice(i,1);
            }
        }
    }

    //Update回调
    public updateHandle():void {

        for(let i:number = this.__update_toadd.length-1; i>=0; i--){
            let timer:Timer = this.__update_toadd[i];

            this.__update_timer.push(timer);

            this.__update_toadd.splice(i,1);
        }

        for(let t of this.__update_timer){
            t.update(false);
        }

        this.delayRecyle(this.__update_timer);

    }


    //-- LateUpdate回调
    public lateUpdateHandle():void{

        for(let i:number = this.__lateupdate_toadd.length-1; i>=0; i--){
            let timer:Timer = this.__lateupdate_toadd[i];

            this.__lateupdate_timer.push(timer);

            this.__lateupdate_toadd.splice(i,1);
        }

        for(let t of this.__lateupdate_timer){
            t.update(false);
        }

        this.delayRecyle(this.__lateupdate_timer);

    }


    //-- FixedUpdate回调
    public fixedUpdateHandle():void{

        for(let i:number = this.__fixedupdate_toadd.length-1; i>=0; i--){
            let timer:Timer = this.__fixedupdate_toadd[i];

            this.__fixedupdate_timer.push(timer);

            this.__fixedupdate_toadd.splice(i,1);
        }

        for(let t of this.__fixedupdate_timer){
            t.update(true);
        }

        this.delayRecyle(this.__fixedupdate_timer);

    }


    //-- CoUpdate回调
    public coUpdateHandle():void{

        for(let i:number = this.__coupdate_toadd.length-1; i>=0; i--){
            let timer:Timer = this.__coupdate_toadd[i];

            this.__coupdate_timer.push(timer);

            this.__coupdate_toadd.splice(i,1);
        }

        for(let t of this.__coupdate_timer){
            t.update(false);
        }

        this.delayRecyle(this.__coupdate_timer);


    }


    //-- CoLateUpdate回调
    public coLateUpdateHandle():void{

        for(let i:number = this.__colateupdate_toadd.length-1; i>=0; i--){
            let timer:Timer = this.__colateupdate_toadd[i];

            this.__colateupdate_timer.push(timer);

            this.__colateupdate_toadd.splice(i,1);
        }

        for(let t of this.__colateupdate_timer){
            t.update(false);
        }

        this.delayRecyle(this.__colateupdate_timer);
    }


    //-- CoFixedUpdate回调
    public CoFixedUpdateHandle():void{

        for(let i:number = this.__cofixedupdate_toadd.length-1; i>=0; i--){
            let timer:Timer = this.__cofixedupdate_toadd[i];

            this.__cofixedupdate_timer.push(timer);

            this.__cofixedupdate_toadd.splice(i,1);
        }

        for(let t of this.__cofixedupdate_timer){
            t.update(true);
        }

        this.delayRecyle(this.__cofixedupdate_timer);

    }


    //-- 释放
    public dispose():void{


    }


    //-- 清理：可用在场景切换前，不清理关系也不大，只是缓存池不会下降
    public cleanup():void{

        this.__update_timer = new Array<Timer>();
        this.__lateupdate_timer = new Array<Timer>();
        this.__fixedupdate_timer = new Array<Timer>();
        this.__coupdate_timer = new Array<Timer>();
        this.__colateupdate_timer = new Array<Timer>();
        this.__cofixedupdate_timer = new Array<Timer>();
    
        this.__pool = new Array<Timer>();
    
        this.__update_toadd = new Array<Timer>();
        this.__lateupdate_toadd = new Array<Timer>();
        this.__fixedupdate_toadd = new Array<Timer>();
        this.__coupdate_toadd = new Array<Timer>();
        this.__colateupdate_toadd = new Array<Timer>();
        this.__cofixedupdate_toadd = new Array<Timer>();

    }

    //-- 获取定时器
    private InnerGetTimer(delay:number, func:Function, obj:object, one_shot:boolean, use_frame:boolean, unscaled:boolean):Timer{

        let timer:Timer;
        if(this.__pool.length >0){
            timer = this.__pool.pop();
            timer.init(delay,func,obj,one_shot,use_frame,unscaled);
        }else{
            timer = new Timer(delay,func,obj,one_shot,use_frame,unscaled);
        }
        return timer;
    }

    //-- 获取Update定时器
    public getTImer(delay:number, func:Function, obj:object, one_shot:boolean = false, use_frame:boolean = false, unscaled:boolean = true){

        let timer:Timer = this.InnerGetTimer(delay, func, obj, one_shot, use_frame, unscaled);
        this.__update_toadd.push(timer);

        return timer;
    }

    //-- 获取LateUpdate定时器
    public getLateTImer(delay:number, func:Function, obj:object, one_shot:boolean = false, use_frame:boolean = false, unscaled:boolean = true){

        let timer:Timer = this.InnerGetTimer(delay, func, obj, one_shot, use_frame, unscaled);
        this.__lateupdate_toadd.push(timer);

        return timer;
    }

    //-- 获取FixedUpdate定时器
    public getFixedTImer(delay:number, func:Function, obj:object, one_shot:boolean = false, use_frame:boolean = false, unscaled:boolean = true){

        let timer:Timer = this.InnerGetTimer(delay, func, obj, one_shot, use_frame, unscaled);
        this.__fixedupdate_toadd.push(timer);

        return timer;
    }

    //-- 获取CoUpdate定时器
    public getCoTImer(delay:number, func:Function, obj:object, one_shot:boolean = false, use_frame:boolean = false, unscaled:boolean = true){

        let timer:Timer = this.InnerGetTimer(delay, func, obj, one_shot, use_frame, unscaled);
        this.__coupdate_toadd.push(timer);

        return timer;
    }

    //-- 获取CoLateUpdate定时器
    public getCoLateTImer(delay:number, func:Function, obj:object, one_shot:boolean = false, use_frame:boolean = false, unscaled:boolean = true){

        let timer:Timer = this.InnerGetTimer(delay, func, obj, one_shot, use_frame, unscaled);
        this.__colateupdate_toadd.push(timer);

        return timer;
    }

    //-- 获取CoFixedUpdate定时器
    public getCoFixedTImer(delay:number, func:Function, obj:object, one_shot:boolean = false, use_frame:boolean = false, unscaled:boolean = true){

        let timer:Timer = this.InnerGetTimer(delay, func, obj, one_shot, use_frame, unscaled);
        this.__cofixedupdate_toadd.push(timer);

        return timer;
    }

}