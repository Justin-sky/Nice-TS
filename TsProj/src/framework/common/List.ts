
export  class List<T> extends Array<T> {
	public constructor() {
		super();
	}
 
	add:Function = function(value:T):void{
		this.push(value);
	}
 
	insert:Function = function(index:number, value:T):void{
		this.splice(index, 0, value);
	}
 
	remove:Function = function(value:T):void{
		var index:number = this.indexOf(value);
		this.removeAt(index);
	}
 
	removeAt:Function = function(index:number):void{
		this.splice(index, 1);
	}
 
	contains:Function = function(value:T):boolean{
		return this.indexOf(value)>=0;
	}
 
	public get count():number{
		return this.length;
	}
 
	clear:Function = function():void{
		this.splice(0);
	}
 
	foreach:Function = function(callback:Function):void {
        this._breaking = false;
        var sum = this.length;
        for(var i=0;i<sum;i++){
            if(this._breaking){
                break;
            }
            callback(this[i]);
        }
    }
 
    _breaking:boolean = false;
    break:Function = function():void {
        this._breaking = true;
    }
 
	toArray:Function = function():T[]{
		var array:T[] = [];
		this.forEach(element => {
			array.push(element);
		});
		return array;
	}
 
	append:Function = function(value:T[]):void{
		value.forEach(element => {
			this.push(element);
		});
	}
}
