import {TimeUtil} from '../framework/util/TimeUtil';
import {SingletonTest} from './SingletonTest';
import {Messenger} from '../framework/common/Messenger';
import { ResManager } from '../framework/common/ResManager';
import { SkillConfigTB, SkillConfigTR } from '../data/excel/SkillConfig';
import { RedHintsMessageManager } from '../framework/redhints/RedHintsMessageManager';
import { enumRedHints, RedHintsManager } from '../framework/redhints/RedHintsManager';
import { Story } from 'inkjs';
import { nice_ts } from '../data/pb/gen/pb';


export class UnitTest{
    public static testVar:number = 10000;


    public static async doTest(){

        console.log("TimeUtil =============================");
        TimeUtil.test();

        console.log("Singleton =============================");
        SingletonTest.Instance(SingletonTest);
        console.log("===");
        let t1: SingletonTest = SingletonTest.Instance(SingletonTest);
        let t2: SingletonTest = SingletonTest.Instance(SingletonTest);

        console.log(t1.test() + " : " + t2.test());
        t1.add();
        console.log(t1.test() + " : " + t2.test());
        t2.add();
        console.log(t1.test() + " : " + t2.test());


        console.log("Messager =============================");

        let messenger:Messenger = new Messenger();
        let listen:Function = function(a:number, b:string){
            console.log(`listen call: ${a} , ${b}`)
        }
        let listen2:Function = function(a:number, b:string){
            console.log(`listen call2: ${a} , ${b}`)
        }

        let  EVENT_CODE:number = 100;
        messenger.addListener(EVENT_CODE,this, listen);
        messenger.addListener(EVENT_CODE,this, listen2);
        messenger.broadcast(EVENT_CODE, 999," Hello");

        messenger.removeListener(EVENT_CODE,listen);
        messenger.broadcast(EVENT_CODE, 999," Hello");

        messenger.clearup();
        messenger.broadcast(EVENT_CODE, 999," Hello");


        console.log("Timer =============================");

        let interval = setInterval(()=>{
            console.log("inter val..")
        },1000);
        let timeout = setTimeout(()=>{
            clearInterval(interval);
        },5000); 





        console.log("ResourceManager =============================");

       // let prefab = await ResManager.Instance(ResManager).loadPrefab("Models/1001/Character.prefab") ;
        
        //console.log(prefab);

        //let inst = CS.UnityEngine.GameObject.Instantiate(prefab);
        //inst.name = "Test Ch";


        console.log("引用类型 =============================");
        let testMap:Map<string,Array<number>> = new Map();
        testMap.set("key1" ,new Array());

        let arr1:Array<number> = testMap.get("key1");
        arr1.push(12);
        arr1.push(333);

        let arr2:Array<number> = testMap.get("key1");
        console.log(arr2);


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
    
        
        console.log("UIManager =============================");



        console.log("excel data =============================");
        let skillMap = SkillConfigTB.Instance(SkillConfigTB).trs;
        let skilltr:SkillConfigTR = skillMap.get(1003);
        console.log(`${skilltr._Name} : ${skilltr._AttackType}`)
        let impacttype = skilltr._ImpactType;
        console.log(impacttype);



        console.log("Protobuf =============================");

        try{
            let c2rLogin = {
                "Account" : "test",
                "Password" : "1234"
            };


            //验证
            let v1 = nice_ts.C2R_Login.verify(c2rLogin);
            console.log("verify pb: "+ v1);

            let msg = nice_ts.C2R_Login.create(c2rLogin)
            msg.Account = "test1"
            msg.Password = "1122"
            console.log(msg)

            let buf = nice_ts.C2R_Login.encode(msg).finish()
            console.log(buf)

            let de_buf = nice_ts.C2R_Login.decode(buf)
            console.log(de_buf.Account)
            console.log(de_buf.Password)


        }catch(ex){
            console.log(ex);
        }


        console.log("UintArray =============================");

        let  opcode_arr = new Uint8Array([257,25]);
        console.log(opcode_arr.subarray(0,1));
        console.log(opcode_arr.length);

        let opcode_arr2 = new Uint8Array([33]);

        //合并 Uint8Array
        let merge_arr = new Uint8Array(opcode_arr.length + opcode_arr2.length);
        merge_arr.set(opcode_arr2);
        merge_arr.set(opcode_arr, opcode_arr2.length);
        console.log(merge_arr.length);
     
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
        console.log(n);


        n = 300;
        let buffer1:Uint8Array = new Uint8Array(2);
        buffer1[0] = n >>> 8;
        buffer1[1] = n & 0xff;

        console.log(buffer1);
        n = buffer1[0]<<8 | buffer1[1];
        console.log(n);

        
        console.log("sleep =============================");
        await TimeUtil.sleep(1000);
        console.log("sleep ..end");


        // console.log("flatbuffer =============================");
        // try{
        //     let bytes:ArrayBuffer = await ResManager.Instance(ResManager).loadTextBytes("Config/fb/unitconfig.bytes")
        //     let unitByte = new flatbuffers.ByteBuffer(new Uint8Array(bytes));
        //     console.log(unitByte);
        //     let unitconfig:fb.unitconfigTB = fb.unitconfigTB.getRootAsunitconfigTB(unitByte)
        //     console.log(unitconfig.unitconfigTRSLength());
            
    
        //     for(let i=0; i<unitconfig.unitconfigTRSLength(); i++){
        //         let a =  unitconfig.unitconfigTRS(i);
        //         console.log(a.Name());
        //     }

        // }catch(ex){
        //     console.error(ex);
        // }



        try{
            console.log("测试红点系统 =============================");

            RedHintsMessageManager.Instance(RedHintsMessageManager).addListener(
                enumRedHints.chat,
                this,
                function(){
                    console.log("red hints chat...");
                }
            );
            RedHintsMessageManager.Instance(RedHintsMessageManager).addListener(
                enumRedHints.chat_family,
                this,
                function(){
                    console.log("red hints chat_family...");
                }
            );
            RedHintsMessageManager.Instance(RedHintsMessageManager).addListener(
                enumRedHints.chat_system,
                this,
                function(){
                    console.log("red hints chat...");
                }
            );

            RedHintsManager.Instance(RedHintsManager).setRedHintOpenOrClose(
                enumRedHints.chat_family, true
            );
            let r_chat = RedHintsManager.Instance(RedHintsManager).checkRedIsOpen(
                enumRedHints.chat
            ) ;
            let r_chat_family = RedHintsManager.Instance(RedHintsManager).checkRedIsOpen(
                enumRedHints.chat_family
            ) ;
            let r_chat_system = RedHintsManager.Instance(RedHintsManager).checkRedIsOpen(
                enumRedHints.chat_system
            ) ;
            console.log(r_chat, r_chat_family, r_chat_system)

        }catch(error){
            console.log(error)
        }


        
        try{
            console.log("Ink Story =============================");


            var json = await (await ResManager.Instance(ResManager).loadTextAsset("Story/TestStory.json")).text;
            let story = new Story(json);
            story.ChoosePathString("story1", true);
            story.BindExternalFunction("GetCharacterName",()=>{
                return "Justin Test";
            })
            story.BindExternalFunctionGeneral("GetCharacterNameByMutiParams",(args:[])=>{
                console.log(args.length);
                return "TTTT";
            })

            console.log(story.Continue());
            console.log(story.Continue());
            console.log(story.Continue());
        }catch(error){
            console.log(error)
        }


    }

    

}

