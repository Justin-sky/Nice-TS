import { Story } from "inkjs/engine/Story";

export class InkStateInspector{

    public BindInkMethods(inkStory:Story):void{
        
        this.bindInkMethodOnce(inkStory,"GetCharacterName",this.getCharacterName);
        this.bindInkMethodOnceGeneral(inkStory,"GetCharacterNameByMutiParams",this.getCharacterNameMutiParams);
    
    }

    private getCharacterName():string{
        return "Justin Test Puerts";
    }

    private getCharacterNameMutiParams(p1:number,p2:number,p3:number):string{
        return "Justin Muti Params";
    }


    private bindInkMethodOnce(inkStory:Story,funcName:string,func:Story.ExternalFunction){
        try{
            inkStory.BindExternalFunction(funcName, func);
        }catch(err){
            console.warn(err);
        }
        
    }

    private bindInkMethodOnceGeneral(inkStory:Story, funcName:string,func:Story.ExternalFunction){
        try{
            inkStory.BindExternalFunctionGeneral(funcName, func);
        }catch(err){
            console.warn(err);
        }     
    }

    public unbindInkMethod(inkStory:Story,funcName:string){
        
        try{
            inkStory.UnbindExternalFunction(funcName);
        }catch(err){
            console.warn(err);
        }     
    }
}