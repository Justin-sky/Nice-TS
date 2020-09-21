import { UIPage } from "../../../../framework/ui/UIPage";
import { binder } from "../../../../framework/common/NiceDecorator";
import { FairyGUI } from "csharp";
import { SessionManager } from "../../../../framework/net/SessionManager";
import { NiceET } from "../../../../data/pb/OuterMessage";
import { LoginAPI } from "../../../api/LoginAPI";
import { UIManager } from "../../../../framework/ui/UIManager";
import { loginUI } from "../../../../data/ui/login";
import { VoServer, VoServerItem } from "../vo/VoServer";
import { UIMessageManger } from "../../../event/UIMessageManager";
import { UIMessage } from "../../../event/UIMessage";
import { SceneManager } from "../../../../framework/scene/SceneManager";
import { SceneDef } from "../../../../framework/scene/SceneDef";




export class UILoginPage extends UIPage{

    @binder("account")
    public m_account:FairyGUI.GTextField;
    @binder("password")
    public m_password:FairyGUI.GTextField;

    @binder("selserverBtn")
    public m_selserverBtn:FairyGUI.GButton;

    @binder("loginBtn")
    public m_loginBtn:FairyGUI.GButton;


    private gateId:any;
    private gateKey:number|Long;

    public onAwake():void{
        super.onAwake();
        
        this.m_loginBtn.onClick.Add(()=>{
            this.onLoginClick();
        });

        this.m_selserverBtn.onClick.Add(()=>{
            this.openSelServerWin();
        });

        this.m_loginBtn.enabled = false;

        SessionManager.Instance(SessionManager).connectRealmServer(
            (code:number)=>{
                    this.m_loginBtn.enabled = true;

             } ,(code:number)=>{
             });
    }
    

    private onSelectServer(serverItem:VoServerItem){

        console.log(" server selected: "+serverItem.serverName)
        this.m_selserverBtn.text = serverItem.serverName;
    }


    public onOpen(vo:any):void{
        super.onOpen(vo);

         //监听选服消息
         UIMessageManger.Instance(UIMessageManger).addListener(
            UIMessage.MSG_SELECT_SERVER,
            this,
            this.onSelectServer
        );
    }
    public onClose(arg:any):void{
        super.onClose(arg);

        UIMessageManger.Instance(UIMessageManger).removeListener(
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

            for(let j=1; j<20; j++){

                let voServerItem:VoServerItem = new VoServerItem();
                voServerItem.areaId = i;
                voServerItem.serverId = j;

                voServerItem.serverName = "测试服务器"+i+":"+j;
                voServerItem.serverStatus = Math.floor(Math.random()*3+1);

                
                voServer.serverMap.get(i).push(voServerItem);
            }
        }

        UIManager.Instance(UIManager).openWindow(
            loginUI.PackageName, 
            loginUI.UISelServerWin,
            voServer);
    }

    private onLoginClick(){

        let account = this.m_account.text;
        let password = this.m_password.text;

        console.log(`account:${account} - password: ${password}`);

        if(account != "" && password != ""){
            
            LoginAPI.loginRealmServer(
                account, 
                password,
                (msg:NiceET.R2C_Login)=>{

                    this.gateId = msg.GateId;
                    this.gateKey = msg.Key;
                    console.log("login ream succ, gate addr:"+msg.Address + ",key:"+msg.Key);

                    SessionManager.Instance(SessionManager).disconnectRealmServer();
                    
                    //登录网关服
                    SessionManager.Instance(SessionManager).connectGateServer(
                        msg.Address,
                        (code:number)=>{this.onConnGateSucc(code); },
                        (code:number)=>{this.onConnGateErr(code); }
                    );
                
                });

        }

    }

    private onConnGateSucc(code:number){
        console.log("connect gate succ: "+code)

        LoginAPI.loginGateServer(
            this.gateId,
            this.gateKey,
            (msg:NiceET.G2C_LoginGate)=>{

                let playerID = msg.PlayerId;
                console.log("login gate response.." +playerID);

                SceneManager.Instance(SceneManager).loadScene(SceneDef.HomeScene,()=>{});
            });
    }

    private onConnGateErr(code:number){
        console.log("connect gate err: "+code)
    }
}