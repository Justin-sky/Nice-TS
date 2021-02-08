import { FairyGUI } from "csharp";
import { Choice } from "inkjs/engine/Choice";
import { storyUI } from "../../../data/ui/story";
import { binder } from "../../../framework/common/NiceDecorator";
import { StoryManager } from "../../../framework/ink/StoryManager";
import { StoryMessageManager } from "../../../framework/ink/StoryMessageManager";
import { UIWindow } from "../../../framework/ui/UIWindow";
import { SStoryManager, SStoryMessageManager, SUIManager } from "../../../global/GameConfig";

export class UIStoryWin extends UIWindow{

    @binder("speakerTxt")
    private m_speakerTxt:FairyGUI.GRichTextField;
    @binder("btnList")
    private m_btnList:FairyGUI.GList;

    private shouldContineStory:boolean = false;
    private optionsMap:Map<number,string> = new Map<number,string>();
    private allChoices:Choice[];

    public onAwake():void{
        super.onAwake();

        this.m_btnList.itemRenderer = (index:number, obj:FairyGUI.GObject)=>{
            this.renderBtnList(index, obj);
        }

        this.m_btnList.onClickItem.Add((event:FairyGUI.EventContext)=>{
             let clickId:number = this.m_btnList.GetChildIndex(event.data);
            if(this.shouldContineStory){
                SStoryManager.advanceStory();
            }else{
                this.optionsMap.clear();
                SStoryManager.selectChoice(this.allChoices[clickId])
            }
        });
    }

    public onShow(vo:any):void{
        super.onShow(vo);

        SStoryMessageManager.addListener(
            StoryMessageManager.ONCONTENTREADY,
            this,
            this.OnContentReady
        );
        SStoryMessageManager.addListener(
            StoryMessageManager.ONCHOICESPRESENTED,
            this,
            this.OnChoicesPresented
        );
        SStoryMessageManager.addListener(
            StoryMessageManager.ONSTORYFINISHED,
            this,
            this.OnStoryFinished
        );
        
        this.optionsMap.clear();
        this.shouldContineStory = false;

        SStoryManager.beginStory("story2");
    }


    private OnContentReady(
        speakerContent:string,
        speakerId:string,
        currentTags:string[],
        currentChoices:Choice[])
    {
        this.m_speakerTxt.text = speakerContent;

        if(StoryManager.Instance(StoryManager).canContinue){
            this.shouldContineStory = true;

            this.m_btnList.numItems = 1;
        }

        if(currentChoices.length>0){
            this.allChoices = currentChoices;
            this.shouldContineStory = false;

            let len = currentChoices.length;
            for(let i=0; i < len; i++){
                this.optionsMap.set(i, currentChoices[i].text);
            }

            this.m_btnList.numItems = len;
        }
    }

    private renderBtnList(index:number, obj:FairyGUI.GObject){
        let continueBtn:FairyGUI.GButton = obj.asButton;
        
        if(this.optionsMap.size>0){
            continueBtn.text = this.optionsMap.get(index);

        }else{
            continueBtn.text = "点击继续";
        }
    }

    private OnChoicesPresented(currentChoices:Choice[]){
      
        this.shouldContineStory = false;
        console.log("....OnChoicesPresented......")
    }

    private OnStoryFinished():void{

        console.log("Story Finished")

        SUIManager.closeWindow(storyUI.UIStoryWin,null);
    }


    public onClose(arg:any):void{
        super.onClose(arg);

        SStoryMessageManager.removeListener(
            StoryMessageManager.ONCONTENTREADY,
            this.OnContentReady
        );
        SStoryMessageManager.removeListener(
            StoryMessageManager.ONCHOICESPRESENTED,
            this.OnChoicesPresented
        );
        SStoryMessageManager.removeListener(
            StoryMessageManager.ONSTORYFINISHED,
            this.OnStoryFinished
        );
    }
}