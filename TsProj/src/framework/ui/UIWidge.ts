import { UIPanel } from "./UIPanel";
import { UITypeDef } from "./UIDefine";


export abstract class UIWidge extends UIPanel{

    public get uiType(): UITypeDef {    
        return UITypeDef.Widget;
    }

    public onAwake():void{
        
    }


    public onShow(vo:any):void{

    
    }

    public onClose(arg:any):void{
   
    }

}