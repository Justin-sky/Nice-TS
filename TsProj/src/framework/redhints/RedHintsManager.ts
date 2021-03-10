import { emit } from "puerts";
import { Singleton } from "../common/Singleton";
import { Logger } from "../logger/Logger";
import { RedHintsMessageManager } from "./RedHintsMessageManager";

export enum enumRedHints {
    /** 标记位 */
    none = 0,
    /** 聊天 */
    chat = 1,
    /** 聊天世界频道 */
    chat_world = 2,
    /** 聊天公会频道 */
    chat_family = 3,
    /** 聊天系统频道 */
    chat_system = 4,
}


export class RedHintsManager extends Singleton<RedHintsManager>{

    private _data: Array<number>;//记录每个红点的数值
    private _parentIndex: Array<number>;//记录父级索引
    private _childNum: Array<number>;//记录子项数量
    private _childIndex: Array<number>;//记录子项在父级中的排序索引

    /**
     * 红点值改变
    */
    public static RED_HINT_VALUE_CHANGED: string = "RED_HINT_VALUE_CHANGED";

    constructor(){
        super();
        this.init();
    }

    private init() {
        this._data = [0];//第一位无意义
        this._parentIndex = [0];
        this._childNum = [0];
        this._childIndex = [0];
        //------------------------记录父子关系-----------------------
        //聊天
        this.setParent(enumRedHints.chat_world, enumRedHints.chat);
        this.setParent(enumRedHints.chat_family, enumRedHints.chat);
        this.setParent(enumRedHints.chat_system, enumRedHints.chat);
    }

    /**
     * 设置红点的开启和关闭
    */
   public setRedHintOpenOrClose(red: number, isOpen: boolean) {
        if (this._childNum[red] > 0) {
            Logger.log("红点数据设置错误：不能直接对高级的红点数据操作");
            return;
        }
        this.doSetRedHintOpenOrClose(red, isOpen ? 1 : 0);
    }


    /**
     * 记录父子关系：子---父
    */
    private setParent(child: number, parent: number) {
        if (this._parentIndex[parent] == child) {
            Logger.log("关系反了");
            return;
        }
        if (this._parentIndex[child]) {
            Logger.log("重复设置");
            return;
        }
        this._parentIndex[child] = parent;
        if (isNaN(this._childNum[parent])) { this._childNum[parent] = 0 }
        this._childNum[parent]++;//子项数量增加
        this._childIndex[child] = this._childNum[parent];//子项的索引 从1开始
    }

    private doSetRedHintOpenOrClose(red: number, value: number) {
        if (this._data[red] != value) {
            this._data[red] = value;
            let _parent: number = this._parentIndex[red]
            if (_parent) {
                //如果有父级，更新父级
                let index: number = this._childIndex[red];//获取在父级中的索引
                this.doSetRedHintOpenOrClose(_parent, value > 0 ? this._data[_parent] | this.addV(index) : this._data[_parent] & this.subV(index));//设置父级的值
            }

            //发改变事件:全局事件
            //emit(RedHintsManager.RED_HINT_VALUE_CHANGED, red);
            //红点事件，局部事件
            RedHintsMessageManager.Instance(RedHintsMessageManager).broadcast(red, value);
        }
    }
    private addV(index: number): number {
        return 1 << (index - 1);
    }
    private subV(index: number): number {
        return ~this.addV(index);
    }
    /**
     * 查看红点是否开启
    */
    public checkRedIsOpen(red: number): boolean {
        return this._data[red] > 0;
    }


}