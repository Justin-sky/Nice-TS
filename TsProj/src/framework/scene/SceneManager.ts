import { commonUI } from "../../data/ui/common";
import { UIMessage } from "../../game/event/UIMessage";
import { S } from "../../global/GameConfig";
import { Singleton } from "../common/Singleton";
import { Logger } from "../logger/Logger";
import { BaseScene } from "./BaseScene";
import { SceneFactory } from "./SceneFactory";




export class SceneManager extends Singleton<SceneManager>{

    private currentScene:BaseScene = null;

    constructor(){
        super();
    }

    public async loadScene(scene:string){
        
        try{

            //打开Loading界面
            S.UIManager.openLoading(commonUI.PackageName, commonUI.UILoadingPage);

            //清理旧场景
            if(this.currentScene){
                this.currentScene.onLeave();
                this.currentScene.onDestroy();
            }

            //开始加载场景
            let sceneInstance = await S.ResManager.loadScene(scene);

            //开始加载进入场景的资源
            this.currentScene =  SceneFactory.createScene(scene);
            this.currentScene.setSceneInstance(sceneInstance);
            this.currentScene.onEnter();

            //设置当前场景加载进度Timer
            let progressInterval = setInterval(()=>{

                let progress = this.currentScene.finishCount/this.currentScene.totalCount;
                Logger.log("progress:"+progress + " = "+this.currentScene.finishCount + " = "+this.currentScene.totalCount);

                S.UIMessageManger.broadcast(
                    UIMessage.MSG_SCENE_PROGRESS,
                    progress*100);

            }, 100);

            //加载资源
            await this.currentScene.loadAssetsAsync();

            //加载完成
            clearInterval(progressInterval)

             //关闭所有Page
             S.UIManager.closeAllPanels();

            await this.currentScene.onComplete()
            S.UIManager.closeLoading();

        }catch(ex){
            Logger.log("load scene excep:"+ex);
        }
        
    }



    
}