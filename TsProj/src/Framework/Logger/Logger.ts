const CS = require('csharp');


export class Logger{

    public static log(msg:string):void{
        
        CS.Logger.Log(msg);
    }


    public static logError(msg:string):void{

        CS.Logger.LogError(msg);

    }
}