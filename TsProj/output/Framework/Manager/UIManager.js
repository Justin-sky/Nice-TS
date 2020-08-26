"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("../Common/Singleton");
const UILoginPage_1 = require("../../game/Modules/Login/UI/UILoginPage");
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
        // SceneManager.sceneLoaded += (scene, mode) =>
        //     {
        //         if (onSceneLoadedOnly != null) onSceneLoadedOnly(scene.name);
        //     };
    }
    closeAllLoadedPanel() {
        for (let i = this.m_listLoadedPanel.length - 1; i >= 0; i--) {
            let panel = this.m_listLoadedPanel[i];
            if (panel.isOpen) {
                panel.close();
            }
            this.m_listLoadedPanel.slice(i, 1);
        }
    }
    clean() {
        this.closeAllLoadedPanel();
        this.m_pageTrackStack.length = 0;
        this.m_listLoadedPanel.length = 0;
    }
    open(name, arg, implType = null) {
        let ui = this.getUI(name);
        if (ui == null) {
            ui = this.load(name, implType);
        }
        if (ui != undefined) {
            if (this.m_listLoadedPanel.indexOf(ui) < 0) {
                this.m_listLoadedPanel.push(ui);
            }
            ui.open(arg);
        }
        return ui;
    }
    load(name, implType) {
        let comp = CS.FairyGUI.UIPackage.CreateObject("game", "LoginPage").asCom;
        let loginPage = new UILoginPage_1.UILoginPage();
        return loginPage;
    }
    getUI(name) {
        for (const panel of this.m_listLoadedPanel) {
            // panel.name
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
    openPageWorker(page, arg, type) {
        this.m_currentPage = new UIPageTrack();
        this.m_currentPage.name = name;
        this.m_currentPage.arg = arg;
        this.m_currentPage.type = type;
        this.closeAllLoadedPanel();
        this.open(page, arg, type);
    }
    openPage(name, arg) {
        if (this.m_currentPage != undefined && this.m_currentPage.name != name) {
            this.m_pageTrackStack.push(this.m_currentPage);
        }
        this.openPageWorker(name, arg, null);
    }
    goBackPage() {
        if (this.m_pageTrackStack.length > 0) {
            let track = this.m_pageTrackStack.pop();
            this.openPageWorker(track.name, track.arg, track.type);
        }
        else {
            this.enterMainPage();
        }
    }
    openPageInScene(scene, page, arg, type) {
        let oldScene = CS.UnityEngine.SceneManagement.GetActiveScene().name;
        if (oldScene == scene) {
            this.openPageWorker(page, arg, type);
        }
        else {
            this.loadScene(scene, () => {
                this.openPageWorker(page, arg, type);
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
exports.UIManager = UIManager;
//# sourceMappingURL=UIManager.js.map