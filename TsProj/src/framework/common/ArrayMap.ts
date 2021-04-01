export class ArrayMap<K, V>
{
    private _arr:Array<V> = new Array<V>();
    private _map:Map<K,V> = new Map<K,V>();
    public add(key:K,value:V):V
    {
        this._map.set(key, value);
        this._arr.push(value);
        return value;
    }

    public get(key:K):V
    {
        return this._map.get(key);
    }

    public remove(key:K):V
    {
        var obj=this._map.get(key);
        if(!obj)return null;
        var index=this._arr.indexOf(obj);
        this._arr.splice(index,1);
        this._map.delete(key);
        return obj;
    }

    /**
     * 返回新的数组实例
     */
    public getArr():Array<V>
    {
        return this._arr;
    }

    public Count():Number{
        return this._arr.length;
    }

    public dispose()
    {
        this._arr.length=0;
        this._map.clear();
    }
}