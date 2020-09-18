import { UITypeDef, UILayerDef } from "./UIDefine";
import { FairyGUI } from "csharp";

export abstract class UIPanel {

    public fui:any;  //FairyGUI 对象


    private _name:string;
    public set name(v:string){
        this._name = v;
    }
    public get name():string{
        return this._name;
    }

    public get uiType(): UITypeDef {    
        return UITypeDef.Unkown;
    }
    
    private m_layer:UILayerDef = UILayerDef.Unkown;
    public get layer() : UILayerDef {
        return this.m_layer; 
    }
    public set layer(v : UILayerDef) {
        this.m_layer = v;
    }
    
    public  get isOpen() : boolean{

        return this.fui.visible;
    }

    public abstract onAwake():void;
    public onUpdate():void{}

    public onOpen(vo:any):void{
        this.layer = UILayerDef.getDefaultLayer(this.uiType);
    }
    public onClose(arg:any):void{}

    public awake():void{
        this.onAwake();

    }

    //绑定FairyGUI元件
    public bindAll(target:any):void{
        for(let k in target["binders"]){
            let fguiName = this["binders"][k];
            this[k] = this.fui.GetChild(fguiName);
        }
    }

    public update():void{
        this.onUpdate();
    }

    public open(arg:any):void{
        
        this.onOpen(arg);

        FairyGUI.GRoot.inst.AddChild(this.fui);


    }

    public close(arg:any = null):void{


        this.onClose(arg);

        FairyGUI.GRoot.inst.RemoveChild(this.fui);

    }

    public dispose():void{
        this.fui.Dispose();
    }
}