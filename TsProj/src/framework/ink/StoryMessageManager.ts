import { Choice } from "inkjs/engine/Choice";
import { Messenger } from "../common/Messenger";
import { Singleton } from "../common/Singleton";

export class StoryMessageManager extends Singleton<StoryMessageManager>{

    public static ONCONTENTREADY:number = 1001;
    public static ONCHOICESPRESENTED:number = 1002;
    public static ONSTORYFINISHED:number = 1003;

    private storyMessage:Messenger = new Messenger();


    public addListener(msgCode:number,obj:any, listener:Function){

        this.storyMessage.addListener(msgCode, obj, listener);
    }

    public removeListener(msgCode:number, listener:Function){
        this.storyMessage.removeListener(msgCode, listener);
    }

    public removeListenerByCode(msgCode:number){
        this.storyMessage.removeListenerByType(msgCode);
    }

    public clearup(){
        this.storyMessage.clearup();
    }

    public broadcastContentReady(
        msgCode:number,
        speakerContent:string,
        speakerId:string,
        currentTags:string[],
        currentChoices:Choice[]
        )
    {

        this.storyMessage.broadcast(msgCode, speakerContent,speakerId,currentTags,currentChoices);
    }

    public broadcastChoicesPresented(
        mesgCode:number,
        currentChoices:Choice[]
    ){
        this.storyMessage.broadcast(mesgCode,currentChoices);
    }

    public broadcastStoryFinished(mesgCode:number){
        this.storyMessage.broadcast(mesgCode);   
    }
}