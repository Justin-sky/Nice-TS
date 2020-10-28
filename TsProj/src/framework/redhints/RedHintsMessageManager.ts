import { Messenger } from "../common/Messenger";
import { Singleton } from "../common/Singleton";



export class RedHintsMessageManager extends Singleton<RedHintsMessageManager>{

    private redhintsMessage:Messenger = new Messenger();


    public addListener(msgCode:number,obj:any, listener:Function){

        this.redhintsMessage.addListener(msgCode, obj, listener);
    }

    public removeListener(msgCode:number, listener:Function){
        this.redhintsMessage.removeListener(msgCode, listener);
    }

    public removeListenerByCode(msgCode:number){
        this.redhintsMessage.removeListenerByType(msgCode);
    }

    public clearup(){
        this.redhintsMessage.clearup();
    }

    public broadcast(msgCode:number,params:any){


        this.redhintsMessage.broadcast(msgCode, params)
    }
    

}