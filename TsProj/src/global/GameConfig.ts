import { GameObjectPool } from "../framework/common/GameObjectPool";
import { ResManager } from "../framework/common/ResManager";
import { StoryManager } from "../framework/ink/StoryManager";
import { StoryMessageManager } from "../framework/ink/StoryMessageManager";
import { GameSession } from "../framework/net/GameSession";
import { SessionManager } from "../framework/net/SessionManager";
import { SceneManager } from "../framework/scene/SceneManager";
import { UIManager } from "../framework/ui/UIManager";
import { UIMessageManger } from "../game/event/UIMessageManager";

export  class GameConfig{

    public static debug:boolean = true;

    public static realmServerIP:string = "127.0.0.1"; 
    public static realmServerPort:number = 9001;

}


export const SUIManager = UIManager.Instance(UIManager);
export const SUIMessageManger = UIMessageManger.Instance(UIMessageManger);
export const SSceneManager = SceneManager.Instance(SceneManager);
export const SGameObjectPool = GameObjectPool.Instance(GameObjectPool);
export const SResManager = ResManager.Instance(ResManager);
export const SStoryManager = StoryManager.Instance(StoryManager);
export const SSessionManager = SessionManager.Instance(SessionManager);
export const SGameSession = GameSession.Instance(GameSession);
export const SStoryMessageManager = StoryMessageManager.Instance(StoryMessageManager);