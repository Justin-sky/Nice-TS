import { UIWindow } from "../UIWindow";


export class UIMsgBoxArg{

    public title:string = "";
    public content:string = "";
    public btnText:string = "";//"确定|取消|关闭"
}


export class UIMsgBox extends UIWindow{

    private m_arg:UIMsgBoxArg;

    

    public onAwake():void{
        super.onAwake();

       // this.m_account = this.fui.GetChild("account");
    }


}