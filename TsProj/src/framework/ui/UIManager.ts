
import { Singleton } from '../common/Singleton';
import { UILoading } from './UILib/UILoading';
import { UIWindow } from './UIWindow';
import { UIWidge } from './UIWidge';
import { UIPanel } from './UIPanel';
import { UIFactory } from './UIFactory';
import { homeUI } from '../../data/ui/home';
import { S } from '../../global/GameConfig';
import { Logger } from '../logger/Logger';


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

    private distroyAllLoadedPanel():void{

        for(let i= this.m_listLoadedPanel.length-1; i>=0; i--){
            let panel = this.m_listLoadedPanel[i];

            if(panel.isOpen){
                panel.close();
            }
            //卸载资源
            S.ResManager.releaseFairyGUIPackage(panel.pkgName);
            panel.dispose();  
        }
        this.m_listLoadedPanel.length = 0;
    }

    public clean():void{

        this.distroyAllLoadedPanel();

        this.m_pageTrackStack.length = 0;
        this.m_listLoadedPanel.length = 0;
    }

    public async open(pkg:string, name:string, arg?:any){
   
        let ui:any = this.getUI(name);

        if(ui == null){
            //加载 package
            await S.ResManager.loadFairyGUIPackage(pkg);
            ui = UIFactory.createUI(pkg, name);
            this.m_listLoadedPanel.push(ui);
        }

        if(ui != null){
            // ###  ui as any 调用私有方法
            (ui as any)._internalOpen(arg);
        }

        return ui;
    }


    public getUI(name:string):UIPanel{

        for (const panel of this.m_listLoadedPanel) {
            if(panel.name == name){

                Logger.log("find panel in cache: "+name);

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

        this.distroyAllLoadedPanel();

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
    public async openWindow(pkg:string, name:string, arg:any){

        let ui:UIWindow = await this.open(pkg, name, arg);

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
    public async openWidget(pkg:string, name:string, arg:any){

        let ui:UIWidge = await this.open(pkg, name, arg);

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