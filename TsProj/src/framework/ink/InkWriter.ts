import { Story } from "inkjs/engine/Story";
import { InkStateInspector } from "./InkStateInspector";
import { StoryMessageManager } from "./StoryMessageManager";

export class InkWriter{

    public static DEBUG_STORY_ID:string = "DEBUG_STORY";
    public static COMMAND_PREFIX:string = ">>>";
    public static COMMAND_DELIMITER:string = ":";
    public static COMMAND_ARG_DELIMITER:string = ',';

    private _currentStory:Story;
    private _allInkCommands:Map<string,Function> = new Map<string,Function>();


    constructor(storyJson:string){
        this.setupInkCommands();
        this.createStroy(storyJson);
        this.load();
    }

    public load():void{
        let storyState:string = "";
        if(storyState!=null && storyState!=""){
            this._currentStory.state.LoadJson(storyState);
        }
    }

    private createStroy(json:string){
        this._currentStory = new Story(json);

       
    }

    public beginStory(knotName:string){
        if(this._currentStory == null){
            console.warn("Trying to AdvanceStory in InkWriter when no story has been created");
            return;
        }

        this._currentStory.ChoosePathString(knotName, true);

         let inkState:InkStateInspector = new InkStateInspector();
         inkState.BindInkMethods(this._currentStory);

        this.advanceStory();
    }


    private giveReward():boolean{
        console.log("give reward...");

        return true;
    }

    private setupInkCommands():void{
        this._allInkCommands.set("GIVE_REWARD",this.giveReward)
    }

    private handleCommand(command:string, args:string[]):boolean{
        if(this._allInkCommands.has(command)){
            return this._allInkCommands.get(command)(args);
        }
        console.error("Could not find InkCommand with name:"+command);
        return true;
    }

    private parseCommandName(text:string):string{
        let num:number = text.indexOf(InkWriter.COMMAND_PREFIX);
        let num2:number = text.indexOf(InkWriter.COMMAND_DELIMITER);
        if(num2 == -1){
            num2 = text.length;
        }

        let length:number = num2 - (num + InkWriter.COMMAND_PREFIX.length);
        return text.substr(num + InkWriter.COMMAND_PREFIX.length, length).trim();
    }

    public parseCommandArgs(text:string):string[]{
        let num:number = text.indexOf(InkWriter.COMMAND_DELIMITER);
        if(num == -1){
            return [];
        }
        let length:number = text.length - (num + 1);
        let list:string[] = text.substr(num+1, length).
                            trim().
                            split(InkWriter.COMMAND_ARG_DELIMITER);
        for (let i:number=0; i<list.length; i++) {
            list[i] = list[i].trim();
        }
        return list;
    }

    public extractSpeaker(line:string):[string,string]{
        if(line.startsWith(InkWriter.COMMAND_PREFIX)){
            return ["0",line.trim()];
        }

        let array:string[] = line.split(':',2);
        if(array.length > 1){
            let speakID:string = array[0].trim();
            let speakContent:string = array[1].trim();

            return [speakID, speakContent];
        }

        return ["0",line.trim()];
    }

    public saveCurrentStory():void{
        let currState = this._currentStory.state.toJson();
        //TODOｓａｖｅ
    }

    public canContinue():boolean{
        return this._currentStory.canContinue;
    }

    public advanceStory():void{
        if(this._currentStory == null){
            console.warn("Trying to AdvanceStory in InkWriter when no story has been created");
        }
        else if(this._currentStory.canContinue){
            let text:string = this._currentStory.Continue().trim();
            if(text == ""){
                this.advanceStory();
                return
            }

            let speakID:string;
            let speakContent:string;

            [speakID, speakContent] = this.extractSpeaker(text);

            let commandName:string = null;
            let args:string[] = null;
            if(speakContent.startsWith(InkWriter.COMMAND_PREFIX)){
                commandName = this.parseCommandName(speakContent);
                args = this.parseCommandArgs(speakContent);
                if(commandName != null && commandName !=""){
                    if(this.handleCommand(commandName, args)){
                        this.advanceStory();
                    }
                }
            }else{
                //OnContentReady
                StoryMessageManager.Instance(StoryMessageManager).broadcastContentReady(
                    StoryMessageManager.ONCONTENTREADY,
                    speakContent,
                    speakID,
                    this._currentStory.currentTags,
                    this._currentStory.currentChoices
                );
            }
        }
        else if(this._currentStory.currentChoices.length > 0){
            //OnChoicesPresented
            StoryMessageManager.Instance(StoryMessageManager).broadcastChoicesPresented(
                StoryMessageManager.ONCHOICESPRESENTED,
                this._currentStory.currentChoices
            );
        }else{
            //OnStoryFinished
            StoryMessageManager.Instance(StoryMessageManager).broadcastStoryFinished(
                StoryMessageManager.ONSTORYFINISHED
            )
        }
    }

    public selectChoice(choiceIndex:number):void{
        if(this._currentStory == null){
            console.warn("Trying to ChooseChoice in InkWriter when no story has begun");
            return;
        }
        this._currentStory.ChooseChoiceIndex(choiceIndex);
        this.advanceStory();
    }

    public getVariable(variableName:string):any{
        return this._currentStory.variablesState.GetVariableWithName(variableName);
    }

    public setVariable(variableName:string, value:any){
        this._currentStory.variablesState.$(variableName, value);
    }
}