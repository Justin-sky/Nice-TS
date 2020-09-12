import {TimeUtil} from '../framework/util/TimeUtil';
import {SingletonTest} from './SingletonTest';
import {LoggerJS} from '../framework/logger/Logger';
import {Messenger} from '../framework/common/Messenger';
import { ResManager } from '../framework/common/ResManager';
import { NiceET } from '../data/pb/OuterMessage';
import { SkillConfigTB, SkillConfigTR } from '../data/excel/SkillConfig';
import { Opcode } from '../data/pb/Opcode';



export class UnitTest{
    public static testVar:number = 10000;


    public static async doTest(){

        LoggerJS.log("TimeUtil =============================");
        TimeUtil.test();

        LoggerJS.log("Singleton =============================");
        SingletonTest.Instance(SingletonTest);
        LoggerJS.log("===");
        let t1: SingletonTest = SingletonTest.Instance(SingletonTest);
        let t2: SingletonTest = SingletonTest.Instance(SingletonTest);

        LoggerJS.log(t1.test() + " : " + t2.test());
        t1.add();
        LoggerJS.log(t1.test() + " : " + t2.test());
        t2.add();
        LoggerJS.log(t1.test() + " : " + t2.test());


        LoggerJS.log("Messager =============================");

        let messenger:Messenger = new Messenger();
        let listen:Function = function(a:number, b:string){
            LoggerJS.log(`listen call: ${a} , ${b}`)
        }
        let listen2:Function = function(a:number, b:string){
            LoggerJS.log(`listen call2: ${a} , ${b}`)
        }

        let  EVENT_CODE:number = 100;
        messenger.addListener(EVENT_CODE,this, listen);
        messenger.addListener(EVENT_CODE,this, listen2);
        messenger.broadcast(EVENT_CODE, 999," Hello");

        messenger.removeListener(EVENT_CODE,listen);
        messenger.broadcast(EVENT_CODE, 999," Hello");

        messenger.clearup();
        messenger.broadcast(EVENT_CODE, 999," Hello");


        LoggerJS.log("Timer =============================");

        let interval = setInterval(()=>{
            LoggerJS.log("inter val..")
        },1000);
        let timeout = setTimeout(()=>{
            clearInterval(interval);
        },5000); 





        LoggerJS.log("ResourceManager =============================");

        let prefab = await ResManager.Instance(ResManager).loadPrefab("Models/1001/Character.prefab") ;
        
        LoggerJS.log(prefab);

        //let inst = CS.UnityEngine.GameObject.Instantiate(prefab);
        //inst.name = "Test Ch";


        LoggerJS.log("引用类型 =============================");
        let testMap:Map<string,Array<number>> = new Map();
        testMap.set("key1" ,new Array());

        let arr1:Array<number> = testMap.get("key1");
        arr1.push(12);
        arr1.push(333);

        let arr2:Array<number> = testMap.get("key1");
        LoggerJS.log(arr2);


        // Logger.log("FariyGUI =============================");
        //  let page:UI_LoginPage = new UI_LoginPage();
        //  CS.FairyGUI.GRoot.inst.AddChild(page._ui);
        //  Logger.log(page._ui);

        // Logger.log("ModuleManager =============================");

        // ModuleManager.Instance(ModuleManager).createModule(ModuleDef.LoginModule,"create login");

        // ModuleManager.Instance(ModuleManager).sendMessage(ModuleDef.LoginModule, "test1",2233);
        // ModuleManager.Instance(ModuleManager).sendMessage(ModuleDef.HomeModule, "test2",2233);
        // Logger.log("then create Home");
        // ModuleManager.Instance(ModuleManager).createModule(ModuleDef.HomeModule,"create login");
    
        
        LoggerJS.log("UIManager =============================");



        LoggerJS.log("excel data =============================");
        let skillMap = SkillConfigTB.Instance(SkillConfigTB).trs;
        let skilltr:SkillConfigTR = skillMap.get(1003);
        LoggerJS.log(`${skilltr._Name} : ${skilltr._AttackType}`)
        let impacttype = skilltr._ImpactType;
        LoggerJS.log(impacttype);



        LoggerJS.log("Protobuf =============================");

        try{
            let c2m_req = {
                "RpcId" : 11,
                "ActorId" : 998,
                "request" : "test"
            };


            //验证
           let v1 = NiceET.C2M_TestRequest.verify(c2m_req);
           LoggerJS.log("verify pb: "+ v1);
            
            let msg = NiceET.C2M_TestRequest.create(c2m_req);
            msg.RpcId = 100000;
            msg.request = "good bye";
            msg.ActorId = 88888;

            LoggerJS.log(msg);

            let buf = NiceET.C2M_TestRequest.encode(msg).finish();
            LoggerJS.log(buf);

            let de_buf = NiceET.C2M_TestRequest.decode(buf);
            LoggerJS.log(de_buf.RpcId);
            LoggerJS.log(de_buf.request);

            let de_m = NiceET.C2M_TestRequest.decode;
            let de_m_t = de_m(buf);
            LoggerJS.log("========:"+de_m_t.request);

            LoggerJS.log("protobuf opcode:");
            let op_test = Opcode.map[Opcode.C2M_TESTREQUEST](buf);
            LoggerJS.log("test opcode: "+ op_test.request);

        }catch(ex){
            LoggerJS.log(ex);
        }


        LoggerJS.log("UintArray =============================");

        let  opcode_arr = new Uint8Array([257,25]);
        LoggerJS.log(opcode_arr.subarray(0,1));
        LoggerJS.log(opcode_arr.length);

        let opcode_arr2 = new Uint8Array([33]);

        //合并 Uint8Array
        let merge_arr = new Uint8Array(opcode_arr.length + opcode_arr2.length);
        merge_arr.set(opcode_arr2);
        merge_arr.set(opcode_arr, opcode_arr2.length);
        LoggerJS.log(merge_arr.length);
     
        let n:number = 5678;
        let buffer:Uint8Array = new Uint8Array(4);

        // << 左移  >> 右移  >>> 无符号右移
        //n转uint8Array
        buffer[0] = n >>> 24;
        buffer[1] = n >>> 16;
        buffer[2] = n >>> 8;
        buffer[3] = n & 0xff;


        //unit8Array转n
        n = buffer[0] << 24 | buffer[1] << 16 | buffer[2] << 8 | buffer[3];
        LoggerJS.log(n);


        n = 300;
        let buffer1:Uint8Array = new Uint8Array(2);
        buffer1[0] = n >>> 8;
        buffer1[1] = n & 0xff;

        LoggerJS.log(buffer1);
        n = buffer1[0]<<8 | buffer1[1];
        LoggerJS.log(n);

        
        LoggerJS.log("sleep =============================");
        await TimeUtil.sleep(5000);
        LoggerJS.log("sleep ..end");

    }

    

}

