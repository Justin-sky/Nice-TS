import { UIPage } from "../../../framework/ui/UIPage";
import { LoggerJS } from "../../../framework/logger/Logger";
import { binder } from "../../../framework/common/NiceDecorator";
import { FairyGUI } from "csharp";
import { SessionManager } from "../../../framework/net/SessionManager";
import { NiceET } from "../../../data/pb/OuterMessage";
import { LoginAPI } from "../api/LoginAPI";
import { UIManager } from "../../../framework/ui/UIManager";
import { loginUI } from "../../../data/ui/login";




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
            this.onSelServer();
        });

        this.m_loginBtn.enabled = false;

        SessionManager.Instance(SessionManager).connectRealmServer((code:number)=>{
            this.m_loginBtn.enabled = true;

        } ,(code:number)=>{


        });
    }
    

    public onOpen(vo:any):void{
        super.onOpen(vo);

        
    }
    public onClose(arg:any):void{
        super.onClose(arg);

    }

    private onSelServer(){

        LoggerJS.log("sele server..............");

        UIManager.Instance(UIManager).openWindow(loginUI.PackageName, loginUI.UISelServerWin,null);
    }

    private onLoginClick(){

        let account = this.m_account.text;
        let password = this.m_password.text;

        LoggerJS.log(`account:${account} - password: ${password}`);

        if(account != "" && password != ""){
            
            LoginAPI.loginRealmServer(account, password,(msg:NiceET.R2C_Login)=>{

                this.gateId = msg.GateId;
                this.gateKey = msg.Key;
                LoggerJS.log("login ream succ, gate addr:"+msg.Address + ",key:"+msg.Key);

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
        LoggerJS.log("connect gate succ: "+code)

        LoginAPI.loginGateServer(this.gateId,this.gateKey,(msg:NiceET.G2C_LoginGate)=>{
            let playerID = msg.PlayerId;
            LoggerJS.log("login gate response.." +playerID);

            UIManager.Instance(UIManager).enterMainPage();
        });
    }

    private onConnGateErr(code:number){
        LoggerJS.log("connect gate err: "+code)
    }
}