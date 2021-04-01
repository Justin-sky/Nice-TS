import { UIBase } from "./UIBase";
import { FairyGUI } from "csharp";


export abstract class UIComponent extends UIBase{

    private _timer;
    public parent:FairyGUI.GComponent;
    // constructor(pkg:string, name:string)
    // {
    //     super();
    //     this.createUI(pkg,name);
    // }
    public createUI(pkg:string, name:string)
    {
        let comp = FairyGUI.UIPackage.CreateObject(pkg, name).asCom
        this.fui = comp;
        this.bindAll(this);
        this.onAwake();
    }

    public addToParent(p : FairyGUI.GComponent, vo?:any){
        this.parent=p;
        p.AddChild(this.fui);
        
        this.fui.SetSize(this.parent.width, this.parent.height);
        this.fui.AddRelation(this.parent, FairyGUI.RelationType.Size);

        this.onShow(vo);
    }

    public SetDisable(visible:boolean)
    {
        this.fui.visible=visible;
    }

    public onShow(vo?:any):void{
        this.SetDisable(true);
    }

    public abstract onAwake():void;
    public abstract onClose(arg?:any):void;

    public startTimer()
    {
        this._timer=setInterval(this.update.bind(this),200);
    }

    public onUpdate():void{}

    public update():void{
        this.onUpdate();
    }
}