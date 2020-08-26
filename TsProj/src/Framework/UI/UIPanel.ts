import { UITypeDef, UILayerDef } from "./UIDefine";


export abstract class UIPanel {

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
    
    private m_openAniClip:any;  //打开时动画 
    private m_closeAniClip:any; //关闭时动画 

    //public Signal<object> onClose = new Signal<object>();

    public abstract get isOpen() : boolean;


    public onAwake():void{}
    public onDestroy():void{}
    public onEnable():void{}
    public onDisable():void{}
    public onUpdate():void{}

    public onOpen(arg:any):void{
        this.layer = UILayerDef.getDefaultLayer(this.uiType);
    }
    public onClose(arg:any):void{}

    public awake():void{
        this.onAwake();

    }

    public update():void{
        this.onUpdate();
    }

    public open(arg:any):void{
        //显示UI
        // this.gameObject.SetActive(true);

        this.onOpen(arg);

        //播放动画 


    }

    public close(arg:any = null):any{

        this.onClose(arg);

    }


    public addUIClickListener(controlName:string, listener:Function){


    }


    public removeUIClickListener(controlName:string, listener){

        
    }

}