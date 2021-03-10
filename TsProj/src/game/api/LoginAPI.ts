import { nice_ts } from "../../data/pb/gen/pb";
import { Opcode } from "../../data/pb/Opcode";
import { Logger } from "../../framework/logger/Logger";
import { S } from "../../global/GameConfig";


export class LoginAPI{

    public static async benchmarkTest(){

        
        for(let i=1; i<2;i++){
            let msg = nice_ts.C2GS_Test.create();
            msg.testID = i;
            msg.testName = "benchmark test";

            let response = await S.SessionManager.sendGateMsg(
                Opcode.MSG_C2GS_Test,
                msg
            )
            let test  =  response as nice_ts.GS2C_Test;
            Logger.log("code: "+test.Error +",msg:"+test.Message +",res:"+test.testResponse);
        }
        
    }


    public static async loginRealmServer(account:string, password:string):Promise<nice_ts.R2C_Login>{

         let msg = nice_ts.C2R_Login.create();
         msg.Account = account;
         msg.Password = password;

         let response = await S.SessionManager.sendRealmMsg(
            Opcode.MSG_C2R_Login,
            msg
        )

        return response as nice_ts.R2C_Login;
    }
    

    public static async loginGateServer(gateId, gateKey):Promise<nice_ts.G2C_LoginGate>{

        let msg = nice_ts.C2G_LoginGate.create();
        msg.GateId = gateId;
        msg.Key = gateKey;
        
        let response = await S.SessionManager.sendGateMsg(
            Opcode.MSG_C2G_LoginGate,
            msg
        );

        return response as nice_ts.G2C_LoginGate;
    }
}