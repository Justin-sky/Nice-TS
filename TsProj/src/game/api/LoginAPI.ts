import { nice_ts } from "../../data/pb/gen/pb";
import { Opcode } from "../../data/pb/Opcode";
import { SessionManager } from "../../framework/net/SessionManager";


export class LoginAPI{

    public static benchmarkTest(){

        
        for(let i=1; i<2;i++){
            let msg = nice_ts.C2GS_Test.create();
            msg.testID = i;
            msg.testName = "benchmark test";
            let buf = nice_ts.C2GS_Test.encode(msg).finish();

            let rpcId = SessionManager.Instance(SessionManager).gateRpcID;
            //test
            rpcId = i
            console.log("send msg: "+rpcId)
            SessionManager.Instance(SessionManager).sendGateMsg(
                Opcode.MSG_C2GS_Test,
                rpcId,
                buf,
                (response:any)=>{
                    let msg  =  response as nice_ts.GS2C_Test;
                    console.log("code: "+msg.Error +",msg:"+msg.Message +",res:"+msg.testResponse);
                }
            )
        }
        
    }


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