import { GameObjectPool } from "../framework/common/GameObjectPool";
import { ResManager } from "../framework/common/ResManager";
import { StoryManager } from "../framework/ink/StoryManager";
import { StoryMessageManager } from "../framework/ink/StoryMessageManager";
import { GameSession } from "../framework/net/GameSession";
import { HttpManager } from "../framework/net/HttpManager";
import { SessionManager } from "../framework/net/SessionManager";
import { SceneManager } from "../framework/scene/SceneManager";
import { UIManager } from "../framework/ui/UIManager";
import { UIMessageManger } from "../game/event/UIMessageManager";

export  class GameConfig{

    public static debug:boolean = true;

    public static realmServerIP:string = "127.0.0.1"; 
    public static realmServerPort:number = 9001;

}

export class S{
    public static UIManager = UIManager.Instance(UIManager);
    public static UIMessageManger = UIMessageManger.Instance(UIMessageManger);
    public static SceneManager = SceneManager.Instance(SceneManager);
    public static GameObjectPool = GameObjectPool.Instance(GameObjectPool);
    public static ResManager = ResManager.Instance(ResManager);
    public static StoryManager = StoryManager.Instance(StoryManager);
    public static SessionManager = SessionManager.Instance(SessionManager);
    public static GameSession = GameSession.Instance(GameSession);
    public static StoryMessageManager = StoryMessageManager.Instance(StoryMessageManager);
    public static HttpManager = HttpManager.Instance(HttpManager);
}
