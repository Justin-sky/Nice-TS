import { BaseScene } from "./BaseScene";
import { PveScene } from "../../game/module/pve/scene/PveScene";
import { HomeScene } from "../../game/module/home/scene/HomeScene";
import { LoginScene } from "../../game/module/login/scene/LoginScene";
import { SceneDef } from "./SceneDef";



export class SceneFactory{


    public static createScene(sceneName:string):BaseScene{

        let scene:BaseScene = null;

        switch (sceneName){
            case SceneDef.LoginScene:
                scene = new LoginScene();
                break;
            case SceneDef.HomeScene:
                scene = new HomeScene();
                break;
            case SceneDef.PveScene:
                scene = new PveScene();
                break;
        }

        return scene;
    }
}