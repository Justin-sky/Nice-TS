import {Logger} from 'csharp'

import {GameConfig} from '../../global/GameConfig';

export class LoggerJS{

    public static log(msg:any):void{
        
        if(GameConfig.debug)
            Logger.Log(`${msg}`);
    }


    public static logError(msg:any):void{

        if(GameConfig.debug)
            Logger.LogError(`${msg}`);

    }
}
