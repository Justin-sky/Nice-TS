import { commonUI } from "../../data/ui/common";
import { UIMessage } from "../../game/event/UIMessage";
import { UIMessageManger } from "../../game/event/UIMessageManager";
import { ResManager } from "../common/ResManager";
import { Singleton } from "../common/Singleton";
import { UIManager } from "../ui/UIManager";
import { BaseScene } from "./BaseScene";
import { SceneFactory } from "./SceneFactory";




export class SceneManager extends Singleton<SceneManager>{

    private currentScene:BaseScene;

    constructor(){
        super();
    }

    public async loadScene(scene:string){
        
        try{

            //打开Loading界面
            UIManager.Instance(UIManager).openLoading(commonUI.PackageName, commonUI.UILoadingPage);

            //清理旧场景
            if(this.currentScene){
                this.currentScene.onLeave();
                this.currentScene.onDestroy();
            }

            //开始加载场景
            let sceneInstance = await ResManager.Instance(ResManager).loadScene(scene);

            //开始加载进入场景的资源
            this.currentScene =  SceneFactory.createScene(scene);
            this.currentScene.setSceneInstance(sceneInstance);
            this.currentScene.onEnter();

            //设置当前场景加载进度Timer
            let progressInterval = setInterval(()=>{

                let progress = this.currentScene.finishCount/this.currentScene.totalCount;
                console.log("progress:"+progress + " = "+this.currentScene.finishCount + " = "+this.currentScene.totalCount);

                UIMessageManger.Instance(UIMessageManger).broadcast(
                    UIMessage.MSG_SCENE_PROGRESS,
                    progress*100);

            }, 100);

            //加载资源
            await this.currentScene.loadAssetsAsync();

            //加载完成
            clearInterval(progressInterval)
            this.currentScene.onComplete()
            UIManager.Instance(UIManager).closeLoading(commonUI.UILoadingPage);

        }catch(ex){
            console.log("load scene excep:"+ex);
        }
        
    }



    
}