import { Choice } from "inkjs/engine/Choice";
import { ResManager } from "../common/ResManager";
import { Singleton } from "../common/Singleton";
import { InkWriter } from "./InkWriter";

export class StoryManager extends Singleton<StoryManager>{

    private _inkWriter:InkWriter;
    private storyAddress:string = "Story/TestStory.json";

    public get inkWriter():InkWriter{
        return this._inkWriter;
    }

    constructor(){
        super();
    }

    public async initialize(){

        if(this._inkWriter == null){

            var json =  (await ResManager.Instance(ResManager).loadTextAsset(this.storyAddress)).text;
            this._inkWriter = new InkWriter(json);
        }

    }

    public beginStory(knotName:string):void{
        this._inkWriter.beginStory(knotName);
    }

    public canContinue(){
        return this._inkWriter.canContinue;
    }

    public advanceStory(){
        this._inkWriter.advanceStory();
    }

    public selectChoice(choice:Choice):void{
        this._inkWriter.selectChoice(choice.index);
    }

    public loadCurrent():void{
        if(this._inkWriter!=null) this._inkWriter.load();
    }

    public getVariable(variableName:string):any{
        return this._inkWriter.getVariable(variableName);
    }

    public setVariable(variableName:string, value:any){
        this.inkWriter.setVariable(variableName, value);
    }

}