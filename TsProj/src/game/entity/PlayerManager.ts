import { Singleton } from "../../framework/common/Singleton";
import { EntityFactory } from "../../framework/entity/EntityFactory";
import { Player } from "./Player";


export class PlayerManager extends Singleton<PlayerManager>{

    private player:Player;
    
    public getPlayer(reCreate:boolean=false):Player{
        if (reCreate)
        {
            this.player=null;
            this.player = EntityFactory.Instance(EntityFactory).create(Player);
        }
        else {
            if(this.player== null)
            {
                this.player = EntityFactory.Instance(EntityFactory).create(Player);
            }
            
        }

        return this.player;
    }

}