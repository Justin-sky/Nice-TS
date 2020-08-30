"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../common/Singleton");
const UIFactory_1 = require("../ui/UIFactory");
const ModuleDef_1 = require("../../game/modules/ModuleDef");
const UIDefine_1 = require("../ui/UIDefine");
const CS = require('csharp');
class UIPageTrack {
}
exports.UIPageTrack = UIPageTrack;
var UIMessageNames;
(function (UIMessageNames) {
    UIMessageNames[UIMessageNames["UIFRRAME_ON_PANEL_CREATE"] = 0] = "UIFRRAME_ON_PANEL_CREATE";
    UIMessageNames[UIMessageNames["UIFRRAME_ON_PANEL_OPEN"] = 1] = "UIFRRAME_ON_PANEL_OPEN";
    UIMessageNames[UIMessageNames["UIFRRAME_ON_PANEL_CLOSE"] = 2] = "UIFRRAME_ON_PANEL_CLOSE";
    UIMessageNames[UIMessageNames["UIFRRAME_ON_PAGE_BACK"] = 3] = "UIFRRAME_ON_PAGE_BACK";
    UIMessageNames[UIMessageNames["UIFRRAME_ON_WINDOW_CLOSE"] = 4] = "UIFRRAME_ON_WINDOW_CLOSE";
})(UIMessageNames = exports.UIMessageNames || (exports.UIMessageNames = {}));
class UIManager extends Singleton_1.Singleton {
    constructor() {
        super();
        this.m_pageTrackStack = new Array();
        this.m_listLoadedPanel = new Array();
        CS.UnityEngine.SceneManagement.SceneManager.add_sceneLoaded((scene, mode) => {
            if (this.onSceneLoadedOnly != null)
                this.onSceneLoadedOnly(scene.name);
        });
    }
    closeAllLoadedPanel() {
        for (let i = this.m_listLoadedPanel.length - 1; i >= 0; i--) {
            let panel = this.m_listLoadedPanel[i];
            if (panel.isOpen) {
                panel.close();
            }
            this.m_listLoadedPanel.slice(i, 1);
            panel.dispose();
        }
    }
    clean() {
        this.closeAllLoadedPanel();
        this.m_pageTrackStack.length = 0;
        this.m_listLoadedPanel.length = 0;
    }
    open(pkg, name, arg) {
        let ui = this.getUI(name);
        if (ui == null) {
            ui = UIFactory_1.UIFactory.createUI(pkg, name);
            this.m_listLoadedPanel.push(ui);
        }
        if (ui != null) {
            ui.open(arg);
        }
        return ui;
    }
    getUI(name) {
        for (const panel of this.m_listLoadedPanel) {
            if (panel.name == name) {
                panel;
            }
        }
        return null;
    }
    //==========================================================UILoading
    //打开Loading界面
    openLoading(pkg, name, arg) {
        let ui = this.open(pkg, name, arg);
        return ui;
    }
    //关闭Loading界面
    closeLoading(name, arg) {
        let ui = this.getUI(name);
        if (ui != null) {
            ui.close(arg);
        }
    }
    //==========================================================Scene
    //加载场景 
    loadScene(scene, onLoadComplete) {
        this.onSceneLoadedOnly = (sceneName) => {
            if (sceneName == scene) {
                this.onSceneLoadedOnly = null;
                if (onLoadComplete != null)
                    onLoadComplete();
                this.closeLoading(UIDefine_1.UIDefs.UILoadingPage);
            }
        };
        this.openLoading(UIDefine_1.UIPackages.Game, UIDefine_1.UIDefs.UILoadingPage);
        CS.UnityEngine.SceneManagement.SceneManager.LoadScene(scene);
    }
    //==========================================================Page
    openPageWorker(pkg, page, arg) {
        this.m_currentPage = new UIPageTrack();
        this.m_currentPage.pkg = pkg;
        this.m_currentPage.name = page;
        this.m_currentPage.arg = arg;
        this.closeAllLoadedPanel();
        this.open(pkg, page, arg);
    }
    //打开页面, 会关闭上一个页面上的所有窗口,Widiget等
    openPage(pkg, name, arg) {
        if (this.m_currentPage != undefined && this.m_currentPage.name != name) {
            this.m_pageTrackStack.push(this.m_currentPage);
        }
        this.openPageWorker(pkg, name, arg);
    }
    //返回上一个页面
    goBackPage() {
        if (this.m_pageTrackStack.length > 0) {
            let track = this.m_pageTrackStack.pop();
            this.openPageWorker(track.pkg, track.name, track.arg);
        }
        else {
            this.enterMainPage();
        }
    }
    //打开场景页面,此页面不计入页面栈,无返回上一面按钮
    openPageInScene(scene, pkg, page, arg) {
        let oldScene = CS.UnityEngine.SceneManagement.SceneManager.GetActiveScene().name;
        if (oldScene == scene) {
            this.openPageWorker(pkg, page, arg);
        }
        else {
            this.loadScene(scene, () => {
                //场景加载完成
                this.openPageWorker(pkg, page, arg);
            });
        }
    }
    //回到主城
    enterMainPage() {
        this.m_pageTrackStack.length = 0;
        this.openPageInScene(ModuleDef_1.SceneDef.HomeScene, UIDefine_1.UIPackages.Game, UIDefine_1.UIDefs.UIHomePage, null);
    }
    //==========================================================UIWindow
    //打开窗口
    openWindow(pkg, name, arg) {
        let ui = this.open(pkg, name, arg);
        return ui;
    }
    //关闭窗口
    closeWindow(name, arg) {
        let ui = this.getUI(name);
        if (ui != null) {
            ui.close(arg);
        }
    }
    //==========================================================UIWidget
    //打开Widiget
    openWidget(pkg, name, arg) {
        let ui = this.open(pkg, name, arg);
        return ui;
    }
    //u关闭Widiget
    closeWidget(name, arg) {
        let ui = this.getUI(name);
        if (ui != null) {
            ui.close(arg);
        }
    }
}
exports.UIManager = UIManager;
//# sourceMappingURL=UIManager.js.map