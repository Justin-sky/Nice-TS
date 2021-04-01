
export class UIBase {

    public fui:any;  //FairyGUI 对象


    //绑定FairyGUI元件
    public bindAll(target:any):void{
        for(let k in target["binders"]){
            let fguiName = this["binders"][k];
            this[k] = this.fui.GetChild(fguiName);
        }
    }

        

}