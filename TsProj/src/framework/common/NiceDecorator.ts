


// FairyGUI 元件 绑定器
export function binder(name:string){
    return function(target:any, key:string | symbol){
        target["binders"] = target["binders"] || {};
        target["binders"][key] = name;
    }
}