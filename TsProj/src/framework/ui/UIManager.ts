
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
    public ui:UIPanel;
}


export class UIManager extends Singleton<UIManager>{

    private  m_pageTrackStack:Array<UIPageTrack>;
    private m_currentPage:UIPageTrack;
    private m_lastScensePage:UIPageTrack;

    private m_listLoadedPanel:Array<UIPanel>;

    private m_loadingPage:UIPanel;
    private m_gmPage:UIPanel;


    constructor(){
        super();

        this.m_pageTrackStack = new Array<UIPageTrack>();
        this.m_listLoadedPanel = new Array<UIPanel>();

    }

    private distroyPanel(panel:UIPanel){
        if(panel.isOpen){
            panel.close();
        }
        //卸载资源
        S.ResManager.releaseFairyGUIPackage(panel.pkgName);
        panel.dispose();  
    }

    private distroyAllLoadedPanel():void{
        for(let i= this.m_listLoadedPanel.length-1; i>=0; i--){
            let panel = this.m_listLoadedPanel[i];

            this.distroyPanel(panel);
            this.m_listLoadedPanel.splice(i, 1);
        }
    }

    public clean():void{

        this.distroyAllLoadedPanel();

        this.m_pageTrackStack.length = 0;
        this.m_listLoadedPanel.length = 0;
    }

    public getPanelUI(name:string):UIPanel{

        for (const panel of this.m_listLoadedPanel) {
            if(panel.name == name){

                Logger.log("find panel in cache: "+name);

                return panel;
            }
        }
        return null;
    }

    public async open(pkg:string, name:string, arg?:any){
   
        let ui:any = this.getPanelUI(name);

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


    private async openPageWorker(pkg:string, page:string, arg:any){

        //设置 m_currentPage
        this.m_currentPage = new UIPageTrack();
       
        this.m_currentPage.pkg = pkg;
        this.m_currentPage.name = page;
        this.m_currentPage.arg = arg;

        //打开新Page
        await S.ResManager.loadFairyGUIPackage(pkg);
        let ui = UIFactory.createUI(pkg, page);
        (ui as any)._internalOpen(arg);

        //保存到 m_currentPage
        this.m_currentPage.ui = ui;

        //销毁当前page 中打开的各自Panels
        this.distroyAllLoadedPanel();

        return this.m_currentPage;
    }
    
     //==========================================================UIPage
    //打开场景页面,此页面不计入页面栈,无返回上一面按钮
    public async openPageInScene(pkg:string, page:string, arg:any){
        
        let _openPage = await this.openPageWorker(pkg, page, arg);

        if(this.m_lastScensePage){
            this.distroyPanel(this.m_lastScensePage.ui);
        }
        this.m_lastScensePage = _openPage;
    }

    //打开页面, 会关闭上一个页面上的所有窗口,Widiget等
    public async openPage(pkg:string, name:string, arg?:any){

        //1, 检查栈中是否存在此页面
        let len = this.m_pageTrackStack.length;
        for(let i = len-1; i >= 0 ;i--){
            let track = this.m_pageTrackStack[i];
            if(track.pkg == pkg && track.name == name){
                
                this.distroyAllLoadedPanel();
                this.distroyPanel(this.m_currentPage.ui);
               
                track.ui.visible = true;
                track.ui.onShow(track.arg);
               
                
                //卸载此页栈上面的界面
                for(let j = len -1; j > i; j--){
                    let del_track = this.m_pageTrackStack[j];
                    this.distroyPanel(del_track.ui);
                    this.m_pageTrackStack.slice(j,1);
                }
               
                this.m_currentPage = this.m_pageTrackStack.pop();
                return this.m_currentPage;
            }
        }

        //2 先把当前Page入栈
        if(this.m_currentPage != undefined && this.m_currentPage.name!=name){
            this.m_pageTrackStack.push(this.m_currentPage);
        }

        //将栈中其它Page 设为不可见
        for(let track of this.m_pageTrackStack){
            track.ui.visible = false;
        }

        await this.openPageWorker(pkg, name, arg);
    }


    //返回上一个页面
    public async goBackPage(){

        if(this.m_pageTrackStack.length > 0){

            //关闭当前页面
            this.distroyAllLoadedPanel();
            this.distroyPanel(this.m_currentPage.ui);

            //打开堆栈中的上一页面
            let track = this.m_pageTrackStack.pop();
            track.ui.visible = true;
            this.m_currentPage = track;

            track.ui.onShow(track.arg);
    
            
        }else{
            await this.enterMainPage();
        }
    }



    //回到主城
    public enterMainPage():void{

         //将栈中其它Page 设为不可见
         for(let track of this.m_pageTrackStack){
            this.distroyPanel(track.ui);
        }
        this.m_pageTrackStack.length = 0;
    }

    //==========================================================UILoading
    //打开Loading界面
    public async openLoading(pkg:string, name:string, arg?:any){
        if(!this.m_loadingPage){
            this.m_loadingPage = UIFactory.createUI(pkg, name);
        }
        (this.m_loadingPage as any)._internalOpen(arg);
       
    }

    //关闭Loading界面
    public closeLoading(arg?:any):void{
        if(this.m_loadingPage){
            this.m_loadingPage.close(arg);
        }
    }

    //==========================================================UIWindow
    //打开窗口
    public async openWindow(pkg:string, name:string, arg:any){

        let ui:UIWindow = await this.open(pkg, name, arg);

        return ui;
    }

    //关闭窗口
    public closeWindow(name:string, arg:any){

        let ui:UIWindow = this.getPanelUI(name) as UIWindow;
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

        let ui:UIWidge = this.getPanelUI(name) as UIWidge;
        if(ui!=null){
            ui.close(arg);
        }
    }

    public closeAllPanels(){
        //删除除Loading界面外的所有Window, Widget
        this.distroyAllLoadedPanel();
        //删除所有Page
        let len = this.m_pageTrackStack.length;
        for(let i = len-1; i >= 0 ;i--){
            let track = this.m_pageTrackStack[i];
            
            this.distroyPanel(track.ui);
            this.m_pageTrackStack.slice(i,1);
        }
    }
}