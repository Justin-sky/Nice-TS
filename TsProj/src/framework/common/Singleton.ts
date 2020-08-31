

export class Singleton<T>{

    private static instance:any = null;

    public static Instance<T>( c: { new(): T } ) : T{

        if(this.instance == null){
            this.instance = new c();
        }

        return this.instance;
    }

}