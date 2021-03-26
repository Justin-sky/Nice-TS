import { FairyGUI } from "csharp";
import { binder } from "../../../../framework/common/NiceDecorator";
import { UIWindow } from "../../../../framework/ui/UIWindow";
import { S } from "../../../../global/GameConfig";
import { UIMessage } from "../../../event/UIMessage";
import { VoServer, VoServerItem } from "../vo/VoServer";
import { UIServerListItem } from "./UIServerListItem";



export class UISelServerWin extends UIWindow{

    @binder("areaList")
    private areaList:FairyGUI.GList;
    @binder("serverList")
    private serverList:FairyGUI.GList;
    @binder("backBtn")
    private backBtn:FairyGUI.GButton;
    @binder("okBtn")
    private okBtn:FairyGUI.GButton;
    @binder("title")
    private title:FairyGUI.GLabel;

    private  clickAreaIndex:number = 0;
    private  clickServerIndex:number = 0;
    private voServer:VoServer;

    public onAwake():void{
        super.onAwake();

        this.backBtn.onClick.Add(()=>{
            this.close();
        });

        this.okBtn.onClick.Add(()=>{
            this.onSelectServer();
        });

        this.areaList.onClickItem.Add((event:FairyGUI.EventContext)=>{
            this.clickAreaIndex = this.areaList.GetChildIndex(event.data);
            
            this.serverList.numItems = this.voServer.serverMap.get(this.clickAreaIndex+1).length;
            this.serverList.RefreshVirtualList();
        });

        this.serverList.onClickItem.Add((event:FairyGUI.EventContext)=>{

            this.clickServerIndex = this.serverList.GetChildIndex(event.data);

            this.title.text = "已选择服务器："+this.clickServerIndex;
        });

        let pool = [];
       
    }
    
    private onSelectServer(){

        let selItem:VoServerItem = this.voServer.serverMap.get(this.clickAreaIndex+1)[this.clickServerIndex];

        S.UIMessageManger.broadcast(
            UIMessage.MSG_SELECT_SERVER,
            selItem
        );

        this.close();
    }


    public onShow(vo:VoServer):void{
        super.onShow(vo);
        this.voServer = vo;

        this.areaList.SetVirtual();
        this.areaList.itemRenderer = (index:number, obj:FairyGUI.GObject)=>{
            this.renderAreaListItem(index, obj);
        };
        this.areaList.numItems = vo.areaMap.size;
        

        this.serverList.SetVirtual();
        this.serverList.itemRenderer = (index:number, obj:UIServerListItem)=>{
            this.renderServerListItem(index, obj);
        };
        this.serverList.numItems = vo.serverMap.get(this.clickAreaIndex+1).length;
    }

    private renderAreaListItem(index:number, obj:FairyGUI.GObject){

        let areaBtn:FairyGUI.GButton = obj.asButton;
        areaBtn.text = this.voServer.areaMap.get(index+1);

    }

    private renderServerListItem(index:number, item:UIServerListItem){

        if(item instanceof UIServerListItem){
            console.log("1111111111111111111111")
        }else{
            console.log("333333333333333333")
        }
        item.itemLabel = this.voServer.serverMap.get(this.clickAreaIndex+1)[index].serverName;
        //serverBtn.icon = FairyGUI.UIPackage.
    }

    public onClose(arg:any):void{
        super.onClose(arg);

    }


}