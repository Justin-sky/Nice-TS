import { UnityEngine } from "csharp";
import { commonUI } from "../../data/ui/common";
import { UIMessage } from "../../game/event/UIMessage";
import { UIMessageManger } from "../../game/event/UIMessageManager";
import { Singleton } from "../common/Singleton";
import { UIManager } from "../ui/UIManager";
import { BaseScene } from "./BaseScene";
import { SceneFactory } from "./SceneFactory";




export class SceneManager extends Singleton<SceneManager>{

    private onSceneLoadedOnly:Function;
    private currentScene:BaseScene;


    constructor(){
        super();

        UnityEngine.SceneManagement.SceneManager.add_sceneLoaded((scene, _mode) =>
        {
            if (this.onSceneLoadedOnly != null) this.onSceneLoadedOnly(scene.name);
        }); 
    }



    public async loadScene(scene:string, onLoadComplete:Function){
        
        try{
            this.onSceneLoadedOnly = async (sceneName:string)=>{
                    
                if(sceneName == scene){
                    this.onSceneLoadedOnly = null;
                    this.currentScene =  SceneFactory.createScene(scene);
                    this.currentScene.onEnter();

                    let progressInterval = setInterval(()=>{

                        let progress = this.currentScene.finishCount/this.currentScene.totalCount;
                        console.log("progress:"+progress + " = "+this.currentScene.finishCount + " = "+this.currentScene.totalCount);
                    
                        UIMessageManger.Instance(UIMessageManger).broadcast(
                            UIMessage.MSG_SCENE_PROGRESS,
                            progress*100);

                        if(this.currentScene.finishCount == this.currentScene.totalCount){
                            clearInterval(progressInterval);

                            //加载完成
                            this.currentScene.onComplete();
                            if(onLoadComplete != null) onLoadComplete();
                            UIManager.Instance(UIManager).closeLoading(commonUI.UILoadingPage);
                        }

                    }, 100);
                    this.currentScene.onPrepare(); 
                
                }
            };
            
            UIManager.Instance(UIManager).openLoading(commonUI.PackageName, commonUI.UILoadingPage);
       
            //清理旧场景
            if(this.currentScene){
                this.currentScene.onLeave();
                this.currentScene.onDestroy();
            }
            
            await UnityEngine.SceneManagement.SceneManager.LoadScene(scene);

        }catch(ex){
            console.log("load scene excep:"+ex);
        }
        
    }



    
}