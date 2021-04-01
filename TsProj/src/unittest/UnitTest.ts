import {TimeUtil} from '../framework/util/TimeUtil';
import {SingletonTest} from './SingletonTest';
import {Messenger} from '../framework/common/Messenger';
import { ResManager } from '../framework/common/ResManager';
import { SkillConfigTB, SkillConfigTR } from '../data/excel/SkillConfig';
import { RedHintsMessageManager } from '../framework/redhints/RedHintsMessageManager';
import { enumRedHints, RedHintsManager } from '../framework/redhints/RedHintsManager';
import { Story } from 'inkjs';
import { nice_ts } from '../data/pb/gen/pb';
import { S } from '../global/GameConfig';
import { Logger } from '../framework/logger/Logger';
import { PlayerManager } from '../game/entity/PlayerManager';
import { BagComponent } from '../game/entity/component/BagComponent';
import { PlayerInfoComponent } from '../game/entity/component/PlayerInfoComponent';
import { TestC, TestP } from 'csharp';


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

       // let prefab = await ResManager.Instance(ResManager).loadPrefab("Models/1001/Character.prefab") ;
        
        //Logger.log(prefab);

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
            let c2rLogin = {
                "Account" : "test",
                "Password" : "1234"
            };


            //验证
            let v1 = nice_ts.C2R_Login.verify(c2rLogin);
            Logger.log("verify pb: "+ v1);

            let msg = nice_ts.C2R_Login.create(c2rLogin)
            msg.Account = "test1"
            msg.Password = "1122"
            Logger.log(msg)

            let buf = nice_ts.C2R_Login.encode(msg).finish()
            Logger.log(buf)

            let de_buf = nice_ts.C2R_Login.decode(buf)
            Logger.log(de_buf.Account)
            Logger.log(de_buf.Password)


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

        
        Logger.log("sleep =============================");
        await TimeUtil.sleep(1000);
        Logger.log("sleep ..end");


        // Logger.log("flatbuffer =============================");
        // try{
        //     let bytes:ArrayBuffer = await ResManager.Instance(ResManager).loadTextBytes("Config/fb/unitconfig.bytes")
        //     let unitByte = new flatbuffers.ByteBuffer(new Uint8Array(bytes));
        //     Logger.log(unitByte);
        //     let unitconfig:fb.unitconfigTB = fb.unitconfigTB.getRootAsunitconfigTB(unitByte)
        //     Logger.log(unitconfig.unitconfigTRSLength());
            
    
        //     for(let i=0; i<unitconfig.unitconfigTRSLength(); i++){
        //         let a =  unitconfig.unitconfigTRS(i);
        //         Logger.log(a.Name());
        //     }

        // }catch(ex){
        //     Logger.error(ex);
        // }



        try{
            Logger.log("测试红点系统 =============================");

            RedHintsMessageManager.Instance(RedHintsMessageManager).addListener(
                enumRedHints.chat,
                this,
                function(){
                    Logger.log("red hints chat...");
                }
            );
            RedHintsMessageManager.Instance(RedHintsMessageManager).addListener(
                enumRedHints.chat_family,
                this,
                function(){
                    Logger.log("red hints chat_family...");
                }
            );
            RedHintsMessageManager.Instance(RedHintsMessageManager).addListener(
                enumRedHints.chat_system,
                this,
                function(){
                    Logger.log("red hints chat...");
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
            Logger.log(r_chat, r_chat_family, r_chat_system)

        }catch(error){
            Logger.log(error)
        }


        
        try{
            Logger.log("Ink Story =============================");


            var json = await (await ResManager.Instance(ResManager).loadTextAsset("Story/TestStory.json")).text;
            let story = new Story(json);
            story.ChoosePathString("story1", true);
            story.BindExternalFunction("GetCharacterName",()=>{
                return "Justin Test";
            })
            story.BindExternalFunctionGeneral("GetCharacterNameByMutiParams",(args:[])=>{
                Logger.log(args.length);
                return "TTTT";
            })

            Logger.log(story.Continue());
            Logger.log(story.Continue());
            Logger.log(story.Continue());
        }catch(error){
            Logger.log(error)
        }


        Logger.log("HttpManager=========================")

        let txt = await S.HttpManager.get("https://www.baidu.com/");
        Logger.log(txt);

        
         //Logger.log("entity=========================")

         let player = PlayerManager.Instance(PlayerManager).getPlayer();
         let bagC =  player.addComponent<BagComponent>(BagComponent);
         //Logger.log(bagC.name);
 
         let infoC = player.addComponent<PlayerInfoComponent>(PlayerInfoComponent);
         //Logger.log(infoC.nickName);
 
         //测试事件
         let event = new Event();
         event.name = "helloEvent"
 
         //Lambda 表达式订阅
         bagC.subscribe<Event>(
             (e)=>{
                 //Logger.log("Event trigger:"+e.name)
             }, Event)
         
         let trigger2 = (e:Event)=>{
             //Logger.log("Event trigger2:"+e.name)
         }
 
         //订阅
         bagC.subscribe<Event>(trigger2, Event)
         //取消订阅
         bagC.unSubscribe<Event>(trigger2, Event);
 
         bagC.publish<Event>(event, Event);


        //test delegate
        TestC.SetPackageItemExtension(new TTestC())

        setInterval(()=>{

            let p = TestC.getObj();

            if(p instanceof TTestC){
                console.log("aaaaaaaaaaaaaaaa")
            }else{
                console.log("bbbbbbbbbbbbbbbbbbbb")
            }

        },1000)
 
    }


}

class TTestC extends TestP{

    public test(){
        console.log("hello test delegate")
    }
}



export class Event{
    id:number;
    name:string;
}


