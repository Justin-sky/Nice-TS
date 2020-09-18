import { Opcode } from "../../data/pb/Opcode";
import { NiceET } from "../../data/pb/OuterMessage";
import { SessionManager } from "../../framework/net/SessionManager";


export class LoginAPI{


    public static loginRealmServer(account:string, password:string, callback:Function){

         let msg = NiceET.C2R_Login.create();
         msg.RpcId = SessionManager.Instance(SessionManager).realmRpcID;
         msg.Account = account;
         msg.Password = password;
         let buf = NiceET.C2R_Login.encode(msg).finish();

        SessionManager.Instance(SessionManager).sendRealmMsg(
            Opcode.C2R_LOGIN,
            msg.RpcId,
            buf,
            (response:any)=>{
                let msg  =  response as NiceET.R2C_Login;
                callback(msg);
            }
        )

    }
    

    public static loginGateServer(gateId, gateKey, callback:Function){

        let rpcId = SessionManager.Instance(SessionManager).gateRpcID;
        let msg = NiceET.C2G_LoginGate.create();
        msg.RpcId = rpcId;
        msg.GateId = gateId;
        msg.Key = gateKey;
        
        let buf = NiceET.C2G_LoginGate.encode(msg).finish();

        SessionManager.Instance(SessionManager).sendGateMsg(
            Opcode.C2G_LOGINGATE,
            rpcId,
            buf,
            (response:any)=>{
                let msg = response as NiceET.G2C_LoginGate;
                callback(msg);
            }
        );

    }
}