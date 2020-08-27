"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../Common/Singleton");
const UIFactory_1 = require("../UI/UIFactory");
const ModuleDef_1 = require("../../game/Modules/ModuleDef");
const UIDefine_1 = require("../UI/UIDefine");
const CS = require('csharp');
class UIPageTrack {
}
exports.UIPageTrack = UIPageTrack;
class UIManager extends Singleton_1.Singleton {
    constructor() {
        super();
        this.m_pageTrackStack = new Array();
        this.m_listLoadedPanel = new Array();
    }
    init() {
        this.m_pageTrackStack.length = 0;
        this.m_listLoadedPanel.length = 0;
        CS.UnityEngine.SceneManagement.SceneManager.sceneLoaded = (scene, mode) => {
            if (this.onSceneLoadedOnly != null)
                this.onSceneLoadedOnly(scene.name);
        };
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
    openLoading(name, arg) {
        let ui = this.open(name, arg);
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
        this.openLoading(UIDefine_1.UIDefs.UILoadingPage);
        CS.UnityEngine.SceneManagement.LoadScene(scene);
    }
    //==========================================================Page
    openPageWorker(page, arg) {
        this.m_currentPage = new UIPageTrack();
        this.m_currentPage.name = name;
        this.m_currentPage.arg = arg;
        this.closeAllLoadedPanel();
        this.open(page, arg);
    }
    //打开页面, 会关闭上一个页面上的所有窗口,Widiget等
    openPage(name, arg) {
        if (this.m_currentPage != undefined && this.m_currentPage.name != name) {
            this.m_pageTrackStack.push(this.m_currentPage);
        }
        this.openPageWorker(name, arg);
    }
    //返回上一个页面
    goBackPage() {
        if (this.m_pageTrackStack.length > 0) {
            let track = this.m_pageTrackStack.pop();
            this.openPageWorker(track.name, track.arg);
        }
        else {
            this.enterMainPage();
        }
    }
    //打开场景页面,此页面不计入页面栈,无返回上一面按钮
    openPageInScene(scene, page, arg) {
        let oldScene = CS.UnityEngine.SceneManagement.GetActiveScene().name;
        if (oldScene == scene) {
            this.openPageWorker(page, arg);
        }
        else {
            this.loadScene(scene, () => {
                this.openPageWorker(page, arg);
            });
        }
    }
    //回到主城
    enterMainPage() {
        this.m_pageTrackStack.length = 0;
        this.openPageInScene(ModuleDef_1.SceneDef.HomeScene, UIDefine_1.UIDefs.UIHomePage, null);
    }
    //==========================================================UIWindow
    //打开窗口
    openWindow(name, arg) {
        let ui = this.open(name, arg);
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
    openWidget(name, arg) {
        let ui = this.open(name, arg);
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