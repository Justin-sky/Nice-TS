import {Logger} from '../Logger/Logger';

export class Messenger{

    private listenerMap = new Map<number,Array<Function>>();

    constructor(){

    }

    public addListener(e_type:number, e_listner:Function, ...params:any[] ):void{

        let listeners = this.listenerMap.get(e_type);

        if(typeof(listeners) == "undefined"){
            listeners = Array<Function>();
        }
        listeners.push(e_listner);

        this.listenerMap.set(e_type, listeners);
    }


    public broadcast(e_type:number, ...params:any[]) : void {

        let listeners = this.listenerMap.get(e_type);
        
        if(typeof(listeners) != "undefined"){
            for(let l of listeners){
                l.apply(this, params);
            }
        }

    }


    public removeListenerByType(e_type:number) :void {

        this.listenerMap.delete(e_type);
    }


    public removeListener(e_type:number, e_listener:Function ):void{

        let listeners = this.listenerMap.get(e_type);

        if(typeof(listeners) != "undefined"){
            
            for(let i:number =0; i< listeners.length; i++){
                if(listeners[i] == e_listener){
                    listeners.splice(i,1);
                }
            }
        }
    }

    public clearup():void{

        this.listenerMap.clear();
    }

}