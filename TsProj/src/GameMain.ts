
const CS = require('csharp');
import {Logger} from './framework/logger/Logger';
import {UnitTest} from './unittest/UnitTest';
import { GameObjectPool } from './framework/common/GameObjectPool';
import { ModuleManager } from './framework/manager/ModuleManager';
import { ModuleDef } from './modules/ModuleDef';
import { UIManager } from './framework/manager/UIManager';
import { ResManager } from './framework/manager/ResManager';
import { ExcelManager } from './data/excel/ExcelManager';



class GameMain{

    constructor() {
        CS.JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        CS.JsManager.Instance.JsOnDispose = () => this.onDispose();
    }

    public async start() {
        
        try{
            Logger.log("Game start in JS....");

            //启动单例
            GameObjectPool.Instance(GameObjectPool);
            ModuleManager.Instance(ModuleManager);
    
            UIManager.Instance(UIManager);
            ResManager.Instance(ResManager);
    
    
            //预加载excel数据
            ExcelManager.Instance(ExcelManager);

      
            //do Unit Test
            UnitTest.doTest();

            //进入登录模块
            ModuleManager.Instance(ModuleManager).show(ModuleDef.LoginModule);

            //JS启动完成，通知C#层
            CS.GameLaunch.Instance.JsLuanchFinish();

        }catch(ex){
            Logger.logError(ex);
        }

    }

    public onApplicationQuit():void {

        GameObjectPool.Instance(GameObjectPool).cleanup(true);
        ModuleManager.Instance(ModuleManager).cleanup();
        Logger.log("Game onApplicationQuit in JS....");
    }

    public onDispose():void {
        
        Logger.log("Game onDispose in JS....");
    }
    
}

new GameMain().start();

