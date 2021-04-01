import { UITypeDef, UILayerDef } from "./UIDefine";
import { FairyGUI } from "csharp";
import { S } from "../../global/GameConfig";
import { UIBase } from "./UIBase";
import { UIComponent } from "./UIComponent";
import { List } from "../common/List";

export abstract class UIPanel extends UIBase {

    public pkgName:string;
    private _name:string;
    private _timer;

    private _components:List<string> = new List();
    private _uiComponents:List<UIComponent>=new List();


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

    public set visible(isActivate:boolean){

        this.fui.visible = isActivate;
    }

    public abstract onAwake():void;
    public abstract onShow(vo?:any):void;
    public abstract onClose(arg?:any):void;
    public onDispose(){};

    public onUpdate():void{}

    public awake():void{
        this.onAwake();
        
    }

    public startTimer()
    {
        if(!this._timer)
            this._timer=setInterval(this.update.bind(this),200);
    }


    public update():void{
        this.onUpdate();
    }

    /**
     * 此私有方法在UI Manager中调用 ，特殊调用。
     * @param arg 
     */
    private _internalOpen(arg:any):void{
        
        this.layer = UILayerDef.getDefaultLayer(this.uiType);
        FairyGUI.GRoot.inst.AddChild(this.fui);

        this.onShow(arg);
    }

    public async createComponent<T extends UIComponent>(pkg:string, name:string,cls:{new():T}):Promise<T>
    {
        //加载组件Package资源
        if(pkg != this.pkgName && !this._components.contains(pkg)){
            await S.ResManager.loadFairyGUIPackage(pkg);
            this._components.add(pkg);
        }
        
        let comp=new cls();
        comp.createUI(pkg,name);
        this._uiComponents.add(comp);
        return comp;
    }


    public close(arg:any = null):void{

        this.onClose(arg);
        FairyGUI.GRoot.inst.RemoveChild(this.fui);
        if(this._timer)
        {
            clearInterval(this._timer);
            this._timer=null;
        }
        
    }

    public dispose():void{

        //卸载组件Package
        this._components.foreach(element => {
            S.ResManager.releaseFairyGUIPackage(element);
        });
        
        this._uiComponents.forEach(element=>{
             element.onClose();
             if(element.parent!=undefined && element.parent!=null)
             {
                element.parent.RemoveChild(element.fui);
             }
             element.fui.Dispose();
        })

        this._components.clear();
        this._uiComponents.clear();
        this.fui.Dispose();
        this.onDispose();
    }


}