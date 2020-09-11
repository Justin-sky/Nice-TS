import { UIPanel } from "./UIPanel";
import { UITypeDef } from "./UIDefine";


export abstract class UIWidge extends UIPanel{

    public get uiType(): UITypeDef {    
        return UITypeDef.Widget;
    }
}