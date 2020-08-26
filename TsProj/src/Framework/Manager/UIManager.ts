
import { Singleton } from '../Common/Singleton';
import { Logger } from '../Logger/Logger';
import { UILoginPage } from '../../game/Modules/Login/UI/UILoginPage';
import { UILoading } from '../UI/UILoading';
import { UIWindow } from '../UI/UIWindow';
import { UIWidge } from '../UI/UIWidge';
import { UIPanel } from '../UI/UIPanel';

const CS = require('csharp');

export class UIPageTrack{
    public name:string;
    public arg:any;
    public type:any;

}


export class UIManager extends Singleton<UIManager>{

    public static MainScene = "Main";
    public static MainPage = "UIMainPage";
    public static SceneLoading = "SceneLoading";

    private  m_pageTrackStack:Array<UIPageTrack>;
    private m_currentPage:UIPageTrack;

    private m_listLoadedPanel:Array<UIPanel>;
    private onSceneLoadedOnly:Function;


    constructor(){
        super();

        this.m_pageTrackStack = new Array<UIPageTrack>();
        this.m_listLoadedPanel = new Array<UIPanel>();
    }


    public init():void{

        this.m_pageTrackStack.length = 0;
        this.m_listLoadedPanel.length = 0;

        // SceneManager.sceneLoaded += (scene, mode) =>
        //     {
        //         if (onSceneLoadedOnly != null) onSceneLoadedOnly(scene.name);
        //     };
    }


    private closeAllLoadedPanel():void{

        for(let i= this.m_listLoadedPanel.length-1; i>=0; i--){
            let panel = this.m_listLoadedPanel[i];

            if(panel.isOpen){
                panel.close();
            }
            this.m_listLoadedPanel.slice(i,1);
        }

    }

    public clean():void{

        this.closeAllLoadedPanel();

        this.m_pageTrackStack.length = 0;
        this.m_listLoadedPanel.length = 0;
    }

    public open(name:string, arg?:any, implType:any = null){

        let ui:any = this.getUI(name);


        if(ui == null){
            ui = this.load(name, implType);
        }


        if(ui != undefined){
            if(this.m_listLoadedPanel.indexOf(ui) < 0){
                this.m_listLoadedPanel.push(ui);
            }

            ui.open(arg);

        }

        return ui;
    }

    private load(name:string, implType:any):any{

        let comp = CS.FairyGUI.UIPackage.CreateObject("game", "LoginPage").asCom
        
        let loginPage = new UILoginPage();

        
        return loginPage;
    }


    public getUI(name:string):UIPanel{

        for (const panel of this.m_listLoadedPanel) {
            // panel.name
        }
        return null;
    }


    //UILoading
    public openLoading(name:string, arg?:any):UILoading{

        let ui:UILoading = this.open(name, arg);

        return ui;
    }

    public closeLoading(name:string, arg?:any):void{
        let ui:UILoading = this.getUI(name) as UILoading;
        if(ui != null){
            ui.close(arg);
        }
    }


    //Scene
    public loadScene(scene:string, onLoadComplete:Function):void{

        this.onSceneLoadedOnly = (sceneName)=>{
            if(sceneName == scene){
                this.onSceneLoadedOnly = null;
                if(onLoadComplete != null) onLoadComplete();

                this.closeLoading(UIManager.SceneLoading);
            }
        };

        this.openLoading(UIManager.SceneLoading);
        CS.UnityEngine.SceneManagement.LoadScene(scene);

    }


    //Page
    private openPageWorker(page:string, arg:any, type:any){
        this.m_currentPage = new UIPageTrack();
        this.m_currentPage.name = name;
        this.m_currentPage.arg = arg;
        this.m_currentPage.type = type;

        this.closeAllLoadedPanel();

        this.open(page, arg, type);
    }

    public openPage(name:string, arg?:any){

        if(this.m_currentPage != undefined && this.m_currentPage.name!=name){
            this.m_pageTrackStack.push(this.m_currentPage);
        }

        this.openPageWorker(name, arg, null);
    }

    public goBackPage():void{

        if(this.m_pageTrackStack.length > 0){
            let track = this.m_pageTrackStack.pop();
            this.openPageWorker(track.name, track.arg, track.type);
        }else{
            this.enterMainPage();
        }
    }

    public openPageInScene(scene:string, page:string, arg:any, type:any){

        let oldScene:string = CS.UnityEngine.SceneManagement.GetActiveScene().name;

        if(oldScene == scene){
            this.openPageWorker(page, arg, type);
        }else{
            this.loadScene(scene, ()=>{
                this.openPageWorker(page, arg, type);
            });
        }
    }

    public enterMainPage():void{

        this.m_pageTrackStack.length = 0;
        this.openPageInScene(UIManager.MainScene, UIManager.MainPage,null,null)
    }

    //UIWindow
    public openWindow(name:string, arg:any):UIWindow{

        let ui:UIWindow = this.open(name, arg);

        return ui;
    }

    public closeWindow(name:string, arg:any){

        let ui:UIWindow = this.getUI(name) as UIWindow;
        if(ui != null){
            ui.close(arg);
        }
    }

    //UIWidget
    public openWidget(name:string, arg:any):UIWidge{

        let ui:UIWidge = this.open(name, arg);

        return ui;
    }

    public closeWidget(name:string, arg:any){

        let ui:UIWidge = this.getUI(name) as UIWidge;
        if(ui!=null){
            ui.close(arg);
        }
    }


}