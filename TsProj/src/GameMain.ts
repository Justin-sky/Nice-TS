
import {UnitTest} from './unittest/UnitTest';
import { JsManager ,GameLaunch } from 'csharp';
import { SceneDef } from './framework/scene/SceneDef';
import { S } from './global/GameConfig';



class GameMain{

    constructor() {
        JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        JsManager.Instance.JsOnDispose = () => this.onDispose();
    }

    public async start() {
        
        try{
            console.log("Game start in JS....");

            
            S.StoryManager.initialize();


            //预加载excel数据
            //ExcelManager.Instance(ExcelManager);
      
            //do Unit Test
            UnitTest.doTest();

            //进入登录模块
            await S.SceneManager.loadScene(SceneDef.LoginScene);

            
            //JS启动完成，通知C#层
            GameLaunch.Instance.JsLuanchFinish();

        }catch(ex){
            console.error(ex);
        }

    }

    public onApplicationQuit():void {

        S.GameObjectPool.cleanup(true);
        console.log("Game onApplicationQuit in JS....");
    }

    public onDispose():void {
        
        console.log("Game onDispose in JS....");
    }
    
}

new GameMain().start();

