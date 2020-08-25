
const CS = require('csharp');
import {Logger} from './Framework/Logger/Logger';
import {UnitTest} from './UnitTest/UnitTest';
import {Time} from './Tools/UnityEngine/Time';
import {TimeManager} from './Framework/Manager/TimeManager';
import { GameObjectPool } from './Framework/Common/GameObjectPool';

class GameMain{

    constructor() {
        CS.JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        CS.JsManager.Instance.JsOnDispose = () => this.onDispose();

        CS.JsManager.Instance.JsUpdate = (deltaTime:number, unscaledDeltaTime:number) => this.onUpdate(deltaTime, unscaledDeltaTime);
        CS.JsManager.Instance.JsLateUpdate = () => this.onLateUpdate();
        CS.JsManager.Instance.JsFixedUpdate = (fixedDeltaTime:number) => this.onFixedUpdate(fixedDeltaTime);
    }

    public start():void {


        //do Unit Test
        UnitTest.doTest();

        Logger.log("Game start in JS....");


        //启动单例
        Time.Instance(Time);
        TimeManager.Instance(TimeManager);
        GameObjectPool.Instance(GameObjectPool);


    }


    public onUpdate(deltaTime:number, unscaledDeltaTime:number):void{
        Time.Instance(Time).setDeltaTime(deltaTime,unscaledDeltaTime);

        TimeManager.Instance(TimeManager).updateHandle();
        TimeManager.Instance(TimeManager).coUpdateHandle();
        
    }

    public onLateUpdate():void{

        TimeManager.Instance(TimeManager).lateUpdateHandle();
        TimeManager.Instance(TimeManager).coLateUpdateHandle();

        Time.Instance(Time).setFrameCount();
    }

    public onFixedUpdate(fixedDeltaTime:number):void{

        Time.Instance(Time).setFixedDelta(fixedDeltaTime);

        TimeManager.Instance(TimeManager).fixedUpdateHandle();
        TimeManager.Instance(TimeManager).CoFixedUpdateHandle();
    }

    public onApplicationQuit():void {

        TimeManager.Instance(TimeManager).dispose();
        GameObjectPool.Instance(GameObjectPool).cleanup(true);

        Logger.log("Game onApplicationQuit in JS....");
    }

    public onDispose():void {
        
        Logger.log("Game onDispose in JS....");
    }
    
}

new GameMain().start();

