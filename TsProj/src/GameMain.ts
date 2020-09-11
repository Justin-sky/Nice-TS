
import {LoggerJS} from './framework/logger/Logger';
import {UnitTest} from './unittest/UnitTest';
import { GameObjectPool } from './framework/common/GameObjectPool';
import { ModuleManager } from './framework/module/ModuleManager';
import { ModuleDef } from './modules/ModuleDef';
import { UIManager } from './framework/ui/UIManager';
import { ResManager } from './framework/common/ResManager';
import { ExcelManager } from './data/excel/ExcelManager';

import { JsManager ,GameLaunch } from 'csharp';


class GameMain{

    constructor() {
        JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        JsManager.Instance.JsOnDispose = () => this.onDispose();
    }

    public async start() {
        
        try{
            LoggerJS.log("Game start in JS....");

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
            GameLaunch.Instance.JsLuanchFinish();

        }catch(ex){
            LoggerJS.logError(ex);
        }

    }

    public onApplicationQuit():void {

        GameObjectPool.Instance(GameObjectPool).cleanup(true);
        ModuleManager.Instance(ModuleManager).cleanup();
        LoggerJS.log("Game onApplicationQuit in JS....");
    }

    public onDispose():void {
        
        LoggerJS.log("Game onDispose in JS....");
    }
    
}

new GameMain().start();

