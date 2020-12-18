import { FairyGUI } from "csharp";
import { Choice } from "inkjs/engine/Choice";
import { storyUI } from "../../../data/ui/story";
import { binder } from "../../../framework/common/NiceDecorator";
import { StoryManager } from "../../../framework/ink/StoryManager";
import { StoryMessageManager } from "../../../framework/ink/StoryMessageManager";
import { UIManager } from "../../../framework/ui/UIManager";
import { UIWindow } from "../../../framework/ui/UIWindow";

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
                StoryManager.Instance(StoryManager).advanceStory();
            }else{
                this.optionsMap.clear();
                StoryManager.Instance(StoryManager).selectChoice(this.allChoices[clickId])
            }
        });
    }

    public onOpen(vo:any):void{
        super.onOpen(vo);

        StoryMessageManager.Instance(StoryMessageManager).addListener(
            StoryMessageManager.ONCONTENTREADY,
            this,
            this.OnContentReady
        );
        StoryMessageManager.Instance(StoryMessageManager).addListener(
            StoryMessageManager.ONCHOICESPRESENTED,
            this,
            this.OnChoicesPresented
        );
        StoryMessageManager.Instance(StoryMessageManager).addListener(
            StoryMessageManager.ONSTORYFINISHED,
            this,
            this.OnStoryFinished
        );
        
        this.optionsMap.clear();
        StoryManager.Instance(StoryManager).beginStory("story2");
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

        UIManager.Instance(UIManager).closeWindow(storyUI.UIStoryWin,null);
    }


    public onClose(arg:any):void{
        super.onClose(arg);

        StoryMessageManager.Instance(StoryMessageManager).removeListener(
            StoryMessageManager.ONCONTENTREADY,
            this.OnContentReady
        );
        StoryMessageManager.Instance(StoryMessageManager).removeListener(
            StoryMessageManager.ONCHOICESPRESENTED,
            this.OnChoicesPresented
        );
        StoryMessageManager.Instance(StoryMessageManager).removeListener(
            StoryMessageManager.ONSTORYFINISHED,
            this.OnStoryFinished
        );
    }
}