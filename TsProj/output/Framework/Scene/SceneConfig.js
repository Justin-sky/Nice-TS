"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SceneConfig {
    constructor() {
        //-- level、name对应于BuldSetting中添加的场景
        //- 启动场景
        this.LaunchScene = {
            "Level": 0,
            "Name": "LaunchScene",
            "Type": null,
        };
        //-- 加载场景
        this.LoadingScene = {
            "Level": 1,
            "Name": "LoadingScene",
            "Type": null,
        };
        // //- 登陆场景
        // public LoginScene = {
        // 	Level = 2,
        // 	Name = "LoginScene",
        // 	Type = require "Scenes.LoginScene",
        // };
        // //-- 主页场景
        // public HomeScene = {
        // 	Level = 3,
        // 	Name = "HomeScene",
        // 	Type = require "Scenes.HomeScene",
        // };
        // //-- 战斗场景
        // public BattleScene = {
        // 	Level = 4,
        // 	Name = "BattleScene",
        // 	Type = require "Scenes.BattleScene",
        // };
    }
}
exports.SceneConfig = SceneConfig;
//# sourceMappingURL=SceneConfig.js.map