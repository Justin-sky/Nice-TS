const CS = require('csharp');

import {GameConfig} from '../../global/GameConfig';

export class Logger{

    public static log(msg:any):void{
        
        if(GameConfig.debug)
            CS.Logger.Log(`${msg}`);
    }


    public static logError(msg:any):void{

        if(GameConfig.debug)
            CS.Logger.LogError(`${msg}`);

    }
}