
const CS = require('csharp');
import {Logger} from './framework/logger/Logger';
import {UnitTest} from './unittest/UnitTest';
import {Time} from './tools/unityengine/Time';
import {TimeManager} from './framework/manager/TimeManager';
import { GameObjectPool } from './framework/common/GameObjectPool';
import { ModuleManager } from './framework/manager/ModuleManager';
import { ModuleDef } from './Game/Modules/ModuleDef';
import { UIManager } from './framework/manager/UIManager';
import { ResManager } from './framework/manager/ResManager';
import { ExcelManager } from './data/excel/ExcelManager';
import { HeroConfigTB } from './data/excel/HeroConfig';


class GameMain{

    constructor() {
        CS.JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        CS.JsManager.Instance.JsOnDispose = () => this.onDispose();

        CS.JsManager.Instance.JsUpdate = (deltaTime:number, unscaledDeltaTime:number) => this.onUpdate(deltaTime, unscaledDeltaTime);
        CS.JsManager.Instance.JsLateUpdate = () => this.onLateUpdate();
        CS.JsManager.Instance.JsFixedUpdate = (fixedDeltaTime:number) => this.onFixedUpdate(fixedDeltaTime);
    }

    public async start() {
        
        try{
            Logger.log("Game start in JS....");

            //启动单例
            Time.Instance(Time);
            TimeManager.Instance(TimeManager);
            GameObjectPool.Instance(GameObjectPool);
            ModuleManager.Instance(ModuleManager);
    
            UIManager.Instance(UIManager);
            ResManager.Instance(ResManager);
    
    
            //预加载excel数据
            ExcelManager.Instance(ExcelManager);

      
            //do Unit Test
            UnitTest.doTest();

            //进入登录模块
            //let module = ModuleManager.Instance(ModuleManager).createModule(ModuleDef.LoginModule);
              // module.show();


        }catch(ex){
            Logger.logError(ex);
        }

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
        ModuleManager.Instance(ModuleManager).cleanup();

        Logger.log("Game onApplicationQuit in JS....");
    }

    public onDispose():void {
        
        Logger.log("Game onDispose in JS....");
    }
    
}

new GameMain().start();

