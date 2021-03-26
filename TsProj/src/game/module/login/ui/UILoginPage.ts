import { UIPage } from "../../../../framework/ui/UIPage";
import { binder } from "../../../../framework/common/NiceDecorator";
import { FairyGUI, UnityEngine } from "csharp";
import { LoginAPI } from "../../../api/LoginAPI";
import { loginUI } from "../../../../data/ui/login";
import { VoServer, VoServerItem } from "../vo/VoServer";
import { UIMessage } from "../../../event/UIMessage";
import { SceneDef } from "../../../../framework/scene/SceneDef";
import { storyUI } from "../../../../data/ui/story";
import { commonUI } from "../../../../data/ui/common";
import { S } from "../../../../global/GameConfig";
import { Logger } from "../../../../framework/logger/Logger";



export class UILoginPage extends UIPage{

    @binder("account")
    public m_account:FairyGUI.GTextField;
    @binder("password")
    public m_password:FairyGUI.GTextField;

    @binder("selserverBtn")
    public m_selserverBtn:FairyGUI.GButton;

    @binder("loginBtn")
    public m_loginBtn:FairyGUI.GButton;

    @binder("storyBtn")
    public m_storyBtn:FairyGUI.GButton;

    @binder("newGuideBtn")
    public m_newGuideBtn:FairyGUI.GButton;

    @binder("hold")
    public m_holder:FairyGUI.GGraph;

    private gateId:any;
    private gateKey:number|Long;
    private _effectGo:any = null;

    public async onAwake(){
        super.onAwake();
        
        this.m_loginBtn.onClick.Add(()=>{
            this.onLoginClick();
        });

        this.m_storyBtn.onClick.Add(()=>{
            S.UIManager.openWindow(
                storyUI.PackageName, 
                storyUI.UIStoryWin,
                null);
        });

        this.m_newGuideBtn.onClick.Add(()=>{
            S.UIManager.openWindow(
                commonUI.PackageName,
                commonUI.UIUIGuideWin,
                null
            );
        });

        this.m_selserverBtn.onClick.Add(()=>{
            this.openSelServerWin();
        });

        // let connected = await S.SessionManager.connectRealmServer();
        
        // this.m_loginBtn.enabled = connected;
        // Logger.log("connect ream server: "+connected)
    }
    

    private onSelectServer(serverItem:VoServerItem){

        Logger.log(" server selected: "+serverItem.serverName)
        this.m_selserverBtn.text = serverItem.serverName;
    }


    public async onShow(vo:any){
        super.onShow(vo);

        //加载特效
        this._effectGo = await S.ResManager.loadPrefab("Effect/Prefab/UI/ef_ui_pet_rank_yellow_test.prefab")
        let inst = UnityEngine.GameObject.Instantiate(this._effectGo) as UnityEngine.GameObject;
        let wrapper = new FairyGUI.GoWrapper(inst);
        this.m_holder.SetNativeObject(wrapper);


         //监听选服消息
         S.UIMessageManger.addListener(
            UIMessage.MSG_SELECT_SERVER,
            this,
            this.onSelectServer
        );
    }
    public onClose(arg:any):void{
        super.onClose(arg);

        //卸载铁效
        S.ResManager.releaseAddressGO(this._effectGo);

        S.UIMessageManger.removeListener(
            UIMessage.MSG_SELECT_SERVER,
            this.onSelectServer
        );
    }

    private openSelServerWin(){

        // 测试数据
        let voServer:VoServer = new VoServer();
        for(let i=1; i<10; i++){
            voServer.areaMap.set(i,"分区"+i);
            voServer.serverMap.set(i, new Array<VoServerItem>());

            for(let j=1; j<200; j++){

                let voServerItem:VoServerItem = new VoServerItem();
                voServerItem.areaId = i;
                voServerItem.serverId = j;

                voServerItem.serverName = "测试服务器"+i+":"+j;
                voServerItem.serverStatus = Math.floor(Math.random()*3+1);

                
                voServer.serverMap.get(i).push(voServerItem);
            }
        }

        S.UIManager.openWindow(
            loginUI.PackageName, 
            loginUI.UISelServerWin,
            voServer);
    }

    private async onLoginClick(){

        let account = this.m_account.text;
        let password = this.m_password.text;

        Logger.log(`account:${account} - password: ${password}`);

        S.SceneManager.loadScene(SceneDef.HomeScene);


        // if(account != "" && password != ""){
            
        //     let msg = await LoginAPI.loginRealmServer(account, password)
        //     this.gateId = msg.GateId;
        //     this.gateKey = msg.Key;
        //     Logger.log("login ream succ, gate addr:"+msg.Address + ",key:"+msg.Key);

        //     S.SessionManager.disconnectRealmServer();
            
        //     //登录网关服
        //     let connected = await S.SessionManager.connectGateServer(msg.Address);
        //     if(connected){
        //         Logger.log("connect gate succ")

        //         let msg = await LoginAPI.loginGateServer( this.gateId, this.gateKey)

        //         let playerID = msg.PlayerId;
        //         Logger.log("login gate response.." +playerID);

        //         S.SceneManager.loadScene(SceneDef.HomeScene);

        //     }else{
        //     Logger.log("connect gate err ")
        //     }


        //  }

    }
}