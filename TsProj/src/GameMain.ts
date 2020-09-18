
import {LoggerJS} from './framework/logger/Logger';
import {UnitTest} from './unittest/UnitTest';
import { GameObjectPool } from './framework/common/GameObjectPool';
import { UIManager } from './framework/ui/UIManager';
import { ResManager } from './framework/common/ResManager';
import { ExcelManager } from './data/excel/ExcelManager';

import { JsManager ,GameLaunch } from 'csharp';
import { SceneDef } from './framework/scene/SceneDef';
import { loginUI } from './data/ui/login';



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
    
            UIManager.Instance(UIManager);
            ResManager.Instance(ResManager);
    
            //预加载excel数据
            ExcelManager.Instance(ExcelManager);
      
            //do Unit Test
            UnitTest.doTest();

            //进入登录模块
            UIManager.Instance(UIManager).openPageInScene(SceneDef.LoginScene,loginUI.PackageName,loginUI.UILoginPage,null);

            //JS启动完成，通知C#层
            GameLaunch.Instance.JsLuanchFinish();

        }catch(ex){
            LoggerJS.logError(ex);
        }

    }

    public onApplicationQuit():void {

        GameObjectPool.Instance(GameObjectPool).cleanup(true);
        LoggerJS.log("Game onApplicationQuit in JS....");
    }

    public onDispose():void {
        
        LoggerJS.log("Game onDispose in JS....");
    }
    
}

new GameMain().start();

