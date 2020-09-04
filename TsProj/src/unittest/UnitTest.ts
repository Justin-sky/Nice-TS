import {TimeUtil} from '../framework/util/TimeUtil';
import {SingletonTest} from './SingletonTest';
import {Logger} from '../framework/logger/Logger';
import {Messenger} from '../framework/common/Messenger';
import { ResManager } from '../framework/manager/ResManager';
import { ModuleManager } from '../framework/manager/ModuleManager';
import { ModuleDef } from '../game/modules/ModuleDef';
import { NiceET } from '../data/pb/OuterMessage';
import { SkillConfigTB, SkillConfigTR } from '../data/excel/SkillConfig';
import { Opcode } from '../data/pb/Opcode';

const CS = require('csharp');
const flatbuffers = require("../fb/flatbuffers");

export class UnitTest{
    public static testVar:number = 10000;


    public static async doTest(){

        Logger.log("TimeUtil =============================");
        TimeUtil.test();

        Logger.log("Singleton =============================");
        SingletonTest.Instance(SingletonTest);
        Logger.log("===");
        let t1: SingletonTest = SingletonTest.Instance(SingletonTest);
        let t2: SingletonTest = SingletonTest.Instance(SingletonTest);

        Logger.log(t1.test() + " : " + t2.test());
        t1.add();
        Logger.log(t1.test() + " : " + t2.test());
        t2.add();
        Logger.log(t1.test() + " : " + t2.test());


        Logger.log("Messager =============================");

        let messenger:Messenger = new Messenger();
        let listen:Function = function(a:number, b:string){
            Logger.log(`listen call: ${a} , ${b}`)
        }
        let listen2:Function = function(a:number, b:string){
            Logger.log(`listen call2: ${a} , ${b}`)
        }

        let  EVENT_CODE:number = 100;
        messenger.addListener(EVENT_CODE,this, listen);
        messenger.addListener(EVENT_CODE,this, listen2);
        messenger.broadcast(EVENT_CODE, 999," Hello");

        messenger.removeListener(EVENT_CODE,listen);
        messenger.broadcast(EVENT_CODE, 999," Hello");

        messenger.clearup();
        messenger.broadcast(EVENT_CODE, 999," Hello");


        Logger.log("Timer =============================");

        let interval = setInterval(()=>{
            Logger.log("inter val..")
        },1000);
        let timeout = setTimeout(()=>{
            clearInterval(interval);
        },5000); 





        Logger.log("ResourceManager =============================");

        let prefab = await ResManager.Instance(ResManager).loadPrefab("Models/1001/Character.prefab") ;
        
        Logger.log(prefab);

        //let inst = CS.UnityEngine.GameObject.Instantiate(prefab);
        //inst.name = "Test Ch";


        Logger.log("引用类型 =============================");
        let testMap:Map<string,Array<number>> = new Map();
        testMap.set("key1" ,new Array());

        let arr1:Array<number> = testMap.get("key1");
        arr1.push(12);
        arr1.push(333);

        let arr2:Array<number> = testMap.get("key1");
        Logger.log(arr2);


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
    
        
        Logger.log("UIManager =============================");



        Logger.log("excel data =============================");
        let skillMap = SkillConfigTB.Instance(SkillConfigTB).trs;
        let skilltr:SkillConfigTR = skillMap.get(1003);
        Logger.log(`${skilltr._Name} : ${skilltr._AttackType}`)
        let impacttype = skilltr._ImpactType;
        Logger.log(impacttype);



        Logger.log("Protobuf =============================");

        try{
            let c2m_req = {
                "RpcId" : 11,
                "ActorId" : 998,
                "request" : "test"
            };


            //验证
           let v1 = NiceET.C2M_TestRequest.verify(c2m_req);
            Logger.log("verify pb: "+ v1);
            
            let msg = NiceET.C2M_TestRequest.create(c2m_req);
            msg.RpcId = 100000;
            msg.request = "good bye";
            msg.ActorId = 88888;

            Logger.log(msg);

            let buf = NiceET.C2M_TestRequest.encode(msg).finish();
            Logger.log(buf);

            let de_buf = NiceET.C2M_TestRequest.decode(buf);
            Logger.log(de_buf.RpcId);
            Logger.log(de_buf.request);

            let de_m = NiceET.C2M_TestRequest.decode;
            let de_m_t = de_m(buf);
            Logger.log("========:"+de_m_t.request);

            Logger.log("protobuf opcode:");
            let op_test = Opcode.map[Opcode.C2M_TESTREQUEST](buf);
            Logger.log("test opcode: "+ op_test.request);

        }catch(ex){
            Logger.log(ex);
        }

        Logger.log("UintArray =============================");

        let  opcode_arr = new Uint8Array([257,25]);
        Logger.log(opcode_arr.subarray(0,1));
        Logger.log(opcode_arr.length);

        let opcode_arr2 = new Uint8Array([33]);

        //合并 Uint8Array
        let merge_arr = new Uint8Array(opcode_arr.length + opcode_arr2.length);
        merge_arr.set(opcode_arr2);
        merge_arr.set(opcode_arr, opcode_arr2.length);
        Logger.log(merge_arr.length);
     
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
        Logger.log(n);


        n = 300;
        let buffer1:Uint8Array = new Uint8Array(2);
        buffer1[0] = n >>> 8;
        buffer1[1] = n & 0xff;

        Logger.log(buffer1);
        n = buffer1[0]<<8 | buffer1[1];
        Logger.log(n);

        

    }

    

}