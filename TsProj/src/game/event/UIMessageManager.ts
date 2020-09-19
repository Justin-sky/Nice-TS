import { Messenger } from "../../framework/common/Messenger";
import { Singleton } from "../../framework/common/Singleton";


export class UIMessageManger extends Singleton<UIMessageManger>{

    private uiMessage:Messenger = new Messenger();


    public addListener(msgCode:number,obj:any, listener:Function){

        this.uiMessage.addListener(msgCode, obj, listener);
    }

    public removeListener(msgCode:number, listener:Function){
        this.uiMessage.removeListener(msgCode, listener);
    }

    public removeListenerByCode(msgCode:number){
        this.uiMessage.removeListenerByType(msgCode);
    }

    public clearup(){
        this.uiMessage.clearup();
    }

    public broadcast(msgCode:number,params:any){


        this.uiMessage.broadcast(msgCode, params)
    }
}