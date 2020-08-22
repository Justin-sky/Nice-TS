import {TimeUtil} from '../Framework/Util/TimeUtil';
import {SingletonTest} from './SingletonTest';
import {Logger} from '../Framework/Logger/Logger';
import {Messenger} from '../Framework/Common/Messenger';
import { TimeManager } from '../Framework/Updater/TimeManager';
import { Timer } from '../Framework/Updater/Timer';

export class UnitTest{
    public static testVar:number = 10000;


    public static doTest():void{

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
        messenger.addListener(EVENT_CODE, listen);
        messenger.addListener(EVENT_CODE,listen2);
        messenger.broadcast(EVENT_CODE, 999," Hello");

        messenger.removeListener(EVENT_CODE,listen);
        messenger.broadcast(EVENT_CODE, 999," Hello");

        messenger.clearup();
        messenger.broadcast(EVENT_CODE, 999," Hello");


        Logger.log("Timer =============================");
        let timeFun = function(){
            Logger.log(this.testVar);
            Logger.log("timer tick..");
        };
        let timer:Timer = TimeManager.Instance(TimeManager).getTImer(5,timeFun,this);
        timer.start();



    }

    

}