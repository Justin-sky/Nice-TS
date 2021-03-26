export class Queue<T> {
    private _datas: T[] = [];
    private _startIndex: number = 0;
    private _endIndex: number = 0;

    constructor(capacity: number) {
        this.inceaseCapacity(capacity);
    }

    clear() {
        this._datas.length = 0;
        this._startIndex = this._endIndex = 0;
    }

    add(item: T) {
        let datas = this._datas;
        if (this.isFull()) {
            this.inceaseCapacity(datas.length * 2);
        }

        datas[this._endIndex] = item;
        if (this._endIndex++ >= datas.length) {
            this._endIndex = 0;
        }
    }

    dequeue(): T {
        if (this.isEmpty()) {
            return undefined;
        }

        let data = this._datas[this._startIndex];
        if (this._startIndex++ >= this._datas.length) {
            this._startIndex = 0;
        }
        return data;
    }

    peek(): T{
        if (this.isEmpty()) {
            return undefined;
        }
        return this._datas[this._startIndex];
    }

    size(): number {
        let start = this._startIndex;
        let end = this._endIndex;
        if (end >= start) {
            return end - start;
        }
        return end + this._datas.length - start;
    }

    isEmpty(): boolean {
        return this._endIndex == this._startIndex;
    }

    inceaseCapacity(capacity: number) {
        let prevSize = this.size();
        if (capacity <= prevSize) {
            return;
        }

        let datas = this._datas;
        datas.length = capacity;

        let prevStartIndex = this._startIndex;
        let prevEndIndex = this._endIndex;
        if (prevEndIndex < prevStartIndex) {
            for(let i=0; i<prevEndIndex; i++) {
                datas[(prevSize + i) % capacity] = datas[i];
            }
            this._endIndex = (prevSize + prevEndIndex) % capacity;
        }
    }

    private isFull(): boolean {
        return ((this._endIndex + 1) % this._datas.length) == this._startIndex;
    }
}