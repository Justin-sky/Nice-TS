const CS = require('csharp');

import {GameConfig} from '../../Global/GameConfig';

export class Logger{

    public static log(msg:string):void{
        
        if(GameConfig.debug)
            CS.Logger.Log(msg);
    }


    public static logError(msg:string):void{

        if(GameConfig.debug)
            CS.Logger.LogError(msg);

    }
}