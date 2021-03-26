// 一次回收所有对象的对象池, 一般用于生命期只有固定帧数的对象上.
import { Constructor } from "./types";

type PoolMap = { [key: string]: [] };

export class FramePool {
    private _allocatedPoolMap: PoolMap = {};
    private _recoveredPoolMap: PoolMap = {};

    // TODO: 如果我们Patch的话, 应该可以去掉这个stringSign.
    allocItem<T>(sign: string, cls: Constructor<T>): T {
        let recoveredPool = this.getOrCreatePool(this._recoveredPoolMap, sign);
        let item = recoveredPool.length ? recoveredPool.pop() : new cls();
        let allocatedPool = this.getOrCreatePool(this._allocatedPoolMap, sign);
        allocatedPool.push(item);
        return item;
    }

    getAllocatedItemCount(sign: string): number {
        return this._allocatedPoolMap[sign] ? this._allocatedPoolMap[sign].length : 0; 
    }

    getRecoveredItemCount(sign: string): number {
        return this._recoveredPoolMap[sign] ? this._recoveredPoolMap[sign].length : 0; 
    }

    recoverAll() {
        let allocatedMap = this._allocatedPoolMap;
        let recoveredMap = this._recoveredPoolMap;

        for (let key in allocatedMap) {
            let allocatedArray = allocatedMap[key];
            let recoveredArray = recoveredMap[key] || [];

            recoveredArray.push(...allocatedArray);
            allocatedArray.length = 0;

            this._recoveredPoolMap[key] = recoveredArray;
        }
    }

    private getOrCreatePool(poolMap: PoolMap, sign: string): Array<any> {
        return poolMap[sign] || (poolMap[sign] = []);
    }
}

export let theFramePool = new FramePool();