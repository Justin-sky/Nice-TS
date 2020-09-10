
import { Singleton } from '../common/Singleton';
import { UILoading } from '../ui/UILoading';
import { UIWindow } from '../ui/UIWindow';
import { UIWidge } from '../ui/UIWidge';
import { UIPanel } from '../ui/UIPanel';
import { UIFactory } from '../ui/UIFactory';
import { SceneDef } from '../../modules/ModuleDef';
import { gameUI } from '../../data/ui/game';

const CS = require('csharp');

export class UIPageTrack{
    public pkg:string;
    public name:string;
    public arg:any;
}


export class UIManager extends Singleton<UIManager>{

    private  m_pageTrackStack:Array<UIPageTrack>;
    private m_currentPage:UIPageTrack;

    private m_listLoadedPanel:Array<UIPanel>;
    private onSceneLoadedOnly:Function;


    constructor(){
        super();

        this.m_pageTrackStack = new Array<UIPageTrack>();
        this.m_listLoadedPanel = new Array<UIPanel>();

        CS.UnityEngine.SceneManagement.SceneManager.add_sceneLoaded((scene, mode) =>
        {
            if (this.onSceneLoadedOnly != null) this.onSceneLoadedOnly(scene.name);
        }); 
        

    }

    private closeAllLoadedPanel():void{

        for(let i= this.m_listLoadedPanel.length-1; i>=0; i--){
            let panel = this.m_listLoadedPanel[i];

            if(panel.isOpen){
                panel.close();
            }

            this.m_listLoadedPanel.slice(i,1);
            panel.dispose();  
        }

    }

    public clean():void{

        this.closeAllLoadedPanel();

        this.m_pageTrackStack.length = 0;
        this.m_listLoadedPanel.length = 0;
    }

    public open(pkg:string, name:string, arg?:any){

        let ui:any = this.getUI(name);

        if(ui == null){
            ui = UIFactory.createUI(pkg, name);
            this.m_listLoadedPanel.push(ui);
        }

        if(ui != null){
            ui.open(arg);
        }

        return ui;
    }


    public getUI(name:string):UIPanel{

        for (const panel of this.m_listLoadedPanel) {
            if(panel.name == name){
                panel;
            }
        }
        return null;
    }


    //==========================================================UILoading
    //打开Loading界面
    public openLoading(pkg:string, name:string, arg?:any):UILoading{

        let ui:UILoading = this.open(pkg, name, arg);

        return ui;
    }
    //关闭Loading界面
    public closeLoading(name:string, arg?:any):void{
        let ui:UILoading = this.getUI(name) as UILoading;
        if(ui != null){
            ui.close(arg);
        }
    }


    //==========================================================Scene
    //加载场景 
    public loadScene(scene:string, onLoadComplete:Function):void{

        this.onSceneLoadedOnly = (sceneName)=>{
            if(sceneName == scene){
                this.onSceneLoadedOnly = null;
                if(onLoadComplete != null) onLoadComplete();

                this.closeLoading(gameUI.UILoadingPage);
            }
        };

        this.openLoading(gameUI.PackageName, gameUI.UILoadingPage);
        CS.UnityEngine.SceneManagement.SceneManager.LoadScene(scene);

    }


    //==========================================================Page
    private openPageWorker(pkg:string, page:string, arg:any){
        this.m_currentPage = new UIPageTrack();
        this.m_currentPage.pkg = pkg;
        this.m_currentPage.name = page;
        this.m_currentPage.arg = arg;

        this.closeAllLoadedPanel();

        this.open(pkg, page, arg);
    }

    //打开页面, 会关闭上一个页面上的所有窗口,Widiget等
    public openPage(pkg:string, name:string, arg?:any){

        if(this.m_currentPage != undefined && this.m_currentPage.name!=name){
            this.m_pageTrackStack.push(this.m_currentPage);
        }

        this.openPageWorker(pkg, name, arg);
    }

    //返回上一个页面
    public goBackPage():void{

        if(this.m_pageTrackStack.length > 0){
            let track = this.m_pageTrackStack.pop();
            this.openPageWorker(track.pkg ,track.name, track.arg);
        }else{
            this.enterMainPage();
        }
    }

    //打开场景页面,此页面不计入页面栈,无返回上一面按钮
    public openPageInScene(scene:string, pkg:string, page:string, arg:any){
        let oldScene:string = CS.UnityEngine.SceneManagement.SceneManager.GetActiveScene().name;
        if(oldScene == scene){
            this.openPageWorker(pkg, page, arg);
        }else{
            this.loadScene(scene, ()=>{
                 //场景加载完成
                this.openPageWorker(pkg, page, arg);
            });
        }

    }

    //回到主城
    public enterMainPage():void{

        this.m_pageTrackStack.length = 0;
        this.openPageInScene(SceneDef.HomeScene, gameUI.PackageName ,gameUI.UIHomePage,null)
    }

    //==========================================================UIWindow
    //打开窗口
    public openWindow(pkg:string, name:string, arg:any):UIWindow{

        let ui:UIWindow = this.open(pkg, name, arg);

        return ui;
    }

    //关闭窗口
    public closeWindow(name:string, arg:any){

        let ui:UIWindow = this.getUI(name) as UIWindow;
        if(ui != null){
            ui.close(arg);
        }
    }

    //==========================================================UIWidget
    //打开Widiget
    public openWidget(pkg:string, name:string, arg:any):UIWidge{

        let ui:UIWidge = this.open(pkg, name, arg);

        return ui;
    }

    //u关闭Widiget
    public closeWidget(name:string, arg:any){

        let ui:UIWidge = this.getUI(name) as UIWidge;
        if(ui!=null){
            ui.close(arg);
        }
    }


}