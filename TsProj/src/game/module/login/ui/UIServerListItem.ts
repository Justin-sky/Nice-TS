import { FairyGUI } from "csharp";



export  class UIServerListItem extends FairyGUI.GButton{

    public set itemLabel(txt:string){
        this.text = txt;
    }

} 