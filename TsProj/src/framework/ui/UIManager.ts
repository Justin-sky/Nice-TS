
import { Singleton } from '../common/Singleton';
import { UILoading } from './UILib/UILoading';
import { UIWindow } from './UIWindow';
import { UIWidge } from './UIWidge';
import { UIPanel } from './UIPanel';
import { UIFactory } from './UIFactory';
import { SceneDef } from '../scene/SceneDef';
import { homeUI } from '../../data/ui/home';


export class UIPageTrack{
    public pkg:string;
    public name:string;
    public arg:any;
}


export class UIManager extends Singleton<UIManager>{

    private  m_pageTrackStack:Array<UIPageTrack>;
    private m_currentPage:UIPageTrack;

    private m_listLoadedPanel:Array<UIPanel>;


    constructor(){
        super();

        this.m_pageTrackStack = new Array<UIPageTrack>();
        this.m_listLoadedPanel = new Array<UIPanel>();

    }

    private closeAllLoadedPanel():void{

        for(let i= this.m_listLoadedPanel.length-1; i>=0; i--){
            let panel = this.m_listLoadedPanel[i];

            if(panel.isOpen){
                panel.close();
            }

            panel.dispose();  
        }
        this.m_listLoadedPanel.length = 0;
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

                console.log("find panel in cache: "+name);

                return panel;
            }
        }
        return null;
    }

    //打开场景页面,此页面不计入页面栈,无返回上一面按钮
    public openPageInScene(pkg:string, page:string, arg:any){
        this.openPageWorker(pkg, page, arg);
    }

    //==========================================================UILoading
    //打开Loading界面
    public openLoading(pkg:string, name:string, arg?:any){

        this.openPageInScene(pkg, name, arg);

    }
    //关闭Loading界面
    public closeLoading(name:string, arg?:any):void{
        let ui:UILoading = this.getUI(name) as UILoading;
        if(ui != null){
            ui.close(arg);
        }
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



    //回到主城
    public enterMainPage():void{

        this.m_pageTrackStack.length = 0;
        this.openPageInScene(homeUI.PackageName ,homeUI.UIHomePage,null)
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