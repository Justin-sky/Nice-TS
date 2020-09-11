import { BaseScene } from "./BaseScene";
import { BattleScene } from "./BattleScene";
import { HomeScene } from "./HomeScene";
import { LoginScene } from "./LoginScene";
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