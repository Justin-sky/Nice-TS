


export class BaseScene{

    private scene_config;  //-- 场景配置
    private preload_resources; //-- 预加载资源：资源路径->资源类型
    private preload_prefab; //- 预加载GameObject：资源路径->实例化个数

    constructor(scen_config){
      
        this.scene_config = scen_config;
        this.preload_resources = {};
        this.preload_prefab = {};

        this.onCreate();
    }

    //-- 创建：初始化一些需要全局保存的状态
    public onCreate(){

    }

    //-- 添加预加载资源
    //-- 注意：只有prefab类型才需要填inst_count，用于指定初始实例化个数
    public addPreloadResource(path:string, res_type:any, inst_count?:number){


    }


    //-- 加载前的初始化
    public onEnter(){

    }


    //-- 场景加载结束：后续资源准备（预加载等）
    //-- 注意：这里使用Async，子类别重写了，需要加载的资源添加到列表就可以了
    public async CoOnPrepare(){

    }

    //-- 场景加载完毕
    public onComplete(){

    }


    //-- 离开场景：清理场景资源
    public onLeave(){

    }

    //-- 销毁：释放全局保存的状态
    public onDestroy(){
        this.scene_config = undefined;
        this.preload_resources = undefined;
    }


}