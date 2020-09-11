import { UnityEngine } from "csharp";
import { commonUI } from "data/ui/common";
import { GameObjectPool } from "framework/common/GameObjectPool";
import { Singleton } from "framework/common/Singleton";
import { UILoading } from "framework/ui/UILib/UILoading";
import { UIManager } from "framework/ui/UIManager";
import { BaseScene } from "./BaseScene";
import { SceneFactory } from "./SceneFactory";




export class SceneManager extends Singleton<SceneManager>{

    private onSceneLoadedOnly:Function;
    private currentScene:BaseScene;
    private loadingUI:UILoading;

    constructor(){
        super();

        UnityEngine.SceneManagement.SceneManager.add_sceneLoaded((scene, mode) =>
        {
            if (this.onSceneLoadedOnly != null) this.onSceneLoadedOnly(scene.name);
        }); 
    }


    //更新进度条
    private updateProgress(progress:number){

        this.loadingUI.showProgress(progress);
    }

    public async loadScene(scene:string, onLoadComplete:Function){

        this.onSceneLoadedOnly = async (sceneName)=>{
            if(sceneName == scene){
                this.onSceneLoadedOnly = null;
                this.currentScene =  SceneFactory.createScene(scene);
                this.currentScene.onEnter();

                let progressInterval = setInterval(()=>{
                    this.updateProgress(this.currentScene.finishCount/this.currentScene.totalCount);
                }, 500);
                await this.currentScene.onPrepare();

                clearInterval(progressInterval);

                //加载完成
                this.currentScene.onComplete();
                if(onLoadComplete != null) onLoadComplete();
                UIManager.Instance(UIManager).closeLoading(commonUI.UILoadingPage);
            }
        };

        this.loadingUI = UIManager.Instance(UIManager).openLoading(commonUI.PackageName, commonUI.UILoadingPage);

        //清理旧场景
        if(this.currentScene){
           this.currentScene.onLeave();
           this.currentScene.onDestroy();
        }
        
        UnityEngine.SceneManagement.SceneManager.LoadScene(scene);
    }



    
}