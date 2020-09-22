
import {UnitTest} from './unittest/UnitTest';
import { GameObjectPool } from './framework/common/GameObjectPool';
import { UIManager } from './framework/ui/UIManager';
import { ResManager } from './framework/common/ResManager';

import { JsManager ,GameLaunch, NiceTS } from 'csharp';
import { SceneDef } from './framework/scene/SceneDef';
import { SceneManager } from './framework/scene/SceneManager';



class GameMain{

    constructor() {
        JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        JsManager.Instance.JsOnDispose = () => this.onDispose();
    }

    public async start() {
        
        try{
            console.log("Game start in JS....");

            //启动单例
            GameObjectPool.Instance(GameObjectPool);
    
            UIManager.Instance(UIManager);
            ResManager.Instance(ResManager);
    
            //预加载excel数据
            //ExcelManager.Instance(ExcelManager);
      
            //do Unit Test
            UnitTest.doTest();

            //进入登录模块
            SceneManager.Instance(SceneManager).loadScene(SceneDef.LoginScene,()=>{});

            
            //JS启动完成，通知C#层
            GameLaunch.Instance.JsLuanchFinish();

        }catch(ex){
            console.error(ex);
        }

    }

    public onApplicationQuit():void {

        GameObjectPool.Instance(GameObjectPool).cleanup(true);
        console.log("Game onApplicationQuit in JS....");
    }

    public onDispose():void {
        
        console.log("Game onDispose in JS....");
    }
    
}

new GameMain().start();

