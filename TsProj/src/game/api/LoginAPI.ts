import { nice_ts } from "../../data/pb/login";
import { Opcode } from "../../data/pb/Opcode";
import { SessionManager } from "../../framework/net/SessionManager";


export class LoginAPI{


    public static loginRealmServer(account:string, password:string, callback:Function){

         let msg = nice_ts.C2R_Login.create();
         msg.Account = account;
         msg.Password = password;
         let buf = nice_ts.C2R_Login.encode(msg).finish();
        
         let rpcId = SessionManager.Instance(SessionManager).realmRpcID;

        SessionManager.Instance(SessionManager).sendRealmMsg(
            Opcode.MSG_C2R_Login,
            rpcId,
            buf,
            (response:any)=>{
                let msg  =  response as nice_ts.R2C_Login;
                callback(msg);
            }
        )

    }
    

    public static loginGateServer(gateId, gateKey, callback:Function){

        let rpcId = SessionManager.Instance(SessionManager).gateRpcID;
        let msg = nice_ts.C2G_LoginGate.create();
        msg.GateId = gateId;
        msg.Key = gateKey;
        
        let buf = nice_ts.C2G_LoginGate.encode(msg).finish();

        SessionManager.Instance(SessionManager).sendGateMsg(
            Opcode.MSG_C2G_LoginGate,
            rpcId,
            buf,
            (response:any)=>{
                let msg = response as nice_ts.G2C_LoginGate;
                callback(msg);
            }
        );

    }
}