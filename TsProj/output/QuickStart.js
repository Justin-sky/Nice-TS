"use strict";
//部署:npm run build
Object.defineProperty(exports, "__esModule", { value: true });
const csharp_1 = require("csharp");
const puerts_1 = require("puerts");
//静态函数
csharp_1.UnityEngine.Debug.Log('hello world');
//对象构造
let obj = new csharp_1.PuertsTest.DerivedClass();
//实例成员访问
obj.BMFunc(); //父类方法
obj.DMFunc(csharp_1.PuertsTest.MyEnum.E1); //子类方法
console.log(obj.BMF, obj.DMF);
obj.BMF = 10; //父类属性
obj.DMF = 30; //子类属性
console.log(obj.BMF, obj.DMF);
//静态成员
console.log(csharp_1.PuertsTest.BaseClass.BSF, csharp_1.PuertsTest.DerivedClass.DSF, csharp_1.PuertsTest.DerivedClass.BSF);
//委托，事件
//如果你后续不需要-=，可以像这样直接传函数当delegate
obj.MyCallback = msg => console.log("do not need remove, msg=" + msg);
//通过new构建的delegate，后续可以拿这个引用去-=
let delegate = new csharp_1.PuertsTest.MyCallback(msg => console.log('can be removed, msg=' + msg));
//由于ts不支持操作符重载，Delegate.Combine相当于C#里头的obj.myCallback += delegate;
obj.MyCallback = csharp_1.System.Delegate.Combine(obj.MyCallback, delegate);
obj.Trigger();
//Delegate.Remove相当于C#里头的obj.myCallback += delegate;
obj.MyCallback = csharp_1.System.Delegate.Remove(obj.MyCallback, delegate);
obj.Trigger();
//事件
obj.add_MyEvent(delegate);
obj.Trigger();
obj.remove_MyEvent(delegate);
obj.Trigger();
//静态事件
csharp_1.PuertsTest.DerivedClass.add_MyStaticEvent(delegate);
obj.Trigger();
csharp_1.PuertsTest.DerivedClass.remove_MyStaticEvent(delegate);
obj.Trigger();
//可变参数
obj.ParamsFunc(1024, 'haha', 'hehe', 'heihei');
//in out 参数
let p1 = puerts_1.$ref();
let p2 = puerts_1.$ref(10);
let ret = obj.InOutArgFunc(100, p1, p2);
console.log('ret=' + ret + ', out=' + puerts_1.$unref(p1) + ', ref=' + puerts_1.$unref(p2));
//泛型
//先通过$generic实例化泛型参数
let List = puerts_1.$generic(csharp_1.System.Collections.Generic.List$1, csharp_1.System.Int32);
let lst = new List();
lst.Add(1);
lst.Add(0);
lst.Add(2);
lst.Add(4);
obj.PrintList(lst);
//typescript和c#的async，await联动，为了不在低版本的Unity下报错，先注释，c#7.3以上版本可以打开这些注释
/*async function asyncCall() {
    let task = obj.GetFileLength("Assets/Examples/05_Typescript/TsQuickStart.cs");
    let result = await $promise(task);
    console.log('file length is ' + result);
    let task2 = obj.GetFileLength("notexistedfile");//这个会抛文件找不到异常，被catch
    let result2 = await $promise(task2);
    console.log('file length is ,' + result2);
}
asyncCall().catch(e => console.error("catch:" + e));*/
//# sourceMappingURL=QuickStart.js.map