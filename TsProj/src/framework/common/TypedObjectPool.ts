type Class<T> = new (...args: any[]) => T;

export class AnyObjectPool {
    private _class: any;
    private _pool: any[] = [];

    constructor(cls: any) {
        this._class = cls;
    }

    get(): any {
        let obj = this._pool.pop();
        return obj !== undefined ? obj : new this._class();
    }

    recover(obj: any) {
        this._pool.push(obj);
    }
}

export class TypedObjectPool<T> {
    private _class: Class<T>;
    private _pool: T[] = [];

    constructor(cls: Class<T>) {
        this._class = cls;
    }

    get(): T {
        let obj = this._pool.pop();
        return obj !== undefined ? obj : new this._class();
    }

    recover(obj: T) {
        this._pool.push(obj);
    }
}