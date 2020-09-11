import { BaseScene } from "./BaseScene";
import { BattleScene } from "../../modules/pve/scene/BattleScene";
import { HomeScene } from "../../modules/home/scene/HomeScene";
import { LoginScene } from "../../modules/login/scene/LoginScene";
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
            case SceneDef.BattleScene:
                scene = new BattleScene();
                break;
        }

        return scene;
    }
}