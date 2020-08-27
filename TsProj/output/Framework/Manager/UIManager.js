"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../Common/Singleton");
const UIFactory_1 = require("../UI/UIFactory");
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
    //UILoading
    openLoading(name, arg) {
        let ui = this.open(name, arg);
        return ui;
    }
    closeLoading(name, arg) {
        let ui = this.getUI(name);
        if (ui != null) {
            ui.close(arg);
        }
    }
    //Scene
    loadScene(scene, onLoadComplete) {
        this.onSceneLoadedOnly = (sceneName) => {
            if (sceneName == scene) {
                this.onSceneLoadedOnly = null;
                if (onLoadComplete != null)
                    onLoadComplete();
                this.closeLoading(UIManager.SceneLoading);
            }
        };
        this.openLoading(UIManager.SceneLoading);
        CS.UnityEngine.SceneManagement.LoadScene(scene);
    }
    //Page
    openPageWorker(page, arg) {
        this.m_currentPage = new UIPageTrack();
        this.m_currentPage.name = name;
        this.m_currentPage.arg = arg;
        this.closeAllLoadedPanel();
        this.open(page, arg);
    }
    openPage(name, arg) {
        if (this.m_currentPage != undefined && this.m_currentPage.name != name) {
            this.m_pageTrackStack.push(this.m_currentPage);
        }
        this.openPageWorker(name, arg);
    }
    goBackPage() {
        if (this.m_pageTrackStack.length > 0) {
            let track = this.m_pageTrackStack.pop();
            this.openPageWorker(track.name, track.arg);
        }
        else {
            this.enterMainPage();
        }
    }
    openPageInScene(scene, page, arg, type) {
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
    enterMainPage() {
        this.m_pageTrackStack.length = 0;
        this.openPageInScene(UIManager.MainScene, UIManager.MainPage, null, null);
    }
    //UIWindow
    openWindow(name, arg) {
        let ui = this.open(name, arg);
        return ui;
    }
    closeWindow(name, arg) {
        let ui = this.getUI(name);
        if (ui != null) {
            ui.close(arg);
        }
    }
    //UIWidget
    openWidget(name, arg) {
        let ui = this.open(name, arg);
        return ui;
    }
    closeWidget(name, arg) {
        let ui = this.getUI(name);
        if (ui != null) {
            ui.close(arg);
        }
    }
}
UIManager.MainScene = "Main";
UIManager.MainPage = "UIMainPage";
UIManager.SceneLoading = "SceneLoading";
UIManager.BackBtn = "back_btn";
UIManager.WindowCloseBtn = "win_close_btn";
exports.UIManager = UIManager;
//# sourceMappingURL=UIManager.js.map