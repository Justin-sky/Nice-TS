

export class MesObj{
    public listeners:Array<Function>;
    public obj:any;
}


export class Messenger{

    private listenerMap = new Map<number,MesObj>();

    constructor(){

    }

    public addListener(e_type:number, e_obj:any, e_listner:Function):void{

        let msgObj = this.listenerMap.get(e_type);

        if(typeof(msgObj) == "undefined"){
            msgObj = new MesObj();
            msgObj.obj = e_obj;
            msgObj.listeners = new Array<Function>();
        }
        msgObj.listeners.push(e_listner);

        this.listenerMap.set(e_type, msgObj);
    }

    public getListener(e_type:number):MesObj{
        return this.listenerMap.get(e_type);
    }

    public broadcast(e_type:number, ...params:any[]) : void {

        let msgObj = this.listenerMap.get(e_type);
        
        if(typeof(msgObj) != "undefined"){
            for(let l of msgObj.listeners){
               l.apply(msgObj.obj, params);

            }
        }

    }


    public removeListenerByType(e_type:number) :void {

        this.listenerMap.delete(e_type);
    }


    public removeListener(e_type:number, e_listener:Function ):void{

        let msgObj = this.listenerMap.get(e_type);

        if(typeof(msgObj) != "undefined"){
            
            for(let i:number =0; i< msgObj.listeners.length; i++){
                if(msgObj.listeners[i] == e_listener){
                    msgObj.listeners.splice(i,1);
                }
            }
        }
    }

    public clearup():void{

        this.listenerMap.clear();
    }

}