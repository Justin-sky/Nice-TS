
import {UnitTest} from './unittest/UnitTest';
import { JsManager ,GameLaunch, FairyGUI } from 'csharp';
import { SceneDef } from './framework/scene/SceneDef';
import { S } from './global/GameConfig';
import { Logger } from './framework/logger/Logger';
import { commonUI } from './data/ui/common';
import { UIServerListItem } from './game/module/login/ui/UIServerListItem';



class GameMain{

    constructor() {
        JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        JsManager.Instance.JsOnDispose = () => this.onDispose();
    }

    public async start() {
        
        try{
            Logger.log("Game start in JS....");

            
            S.StoryManager.initialize();


            //预加载excel数据
            //ExcelManager.Instance(ExcelManager);
      
            //加载通用FairyGUI资源
            await S.ResManager.loadFairyGUIPackage(commonUI.PackageName);

            //do Unit Test
            UnitTest.doTest();

            //进入登录模块
            await S.SceneManager.loadScene(SceneDef.LoginScene);

            
            //JS启动完成，通知C#层
            GameLaunch.Instance.JsLuanchFinish();

            let extItem = ()=>{
                let item =  new UIServerListItem();
               // pool.push(item)
                return item;
            }

           // let pool = []
            FairyGUI.UIObjectFactory.SetPackageItemExtension("ui://l64dumk9feeg54",extItem)
            

        }catch(ex){
            Logger.error(ex);
        }

    }

    public onApplicationQuit():void {

        S.GameObjectPool.cleanup(true);
        Logger.log("Game onApplicationQuit in JS....");
    }

    public onDispose():void {
        
        Logger.log("Game onDispose in JS....");
    }
    
}

new GameMain().start();

