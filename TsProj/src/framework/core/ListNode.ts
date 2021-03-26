import { TypedObjectPool } from "./TypedObjectPool";

export class ListNode {
    private static _pool = new TypedObjectPool(ListNode);
    static create(): ListNode { return this._pool.get(); }

    data: any;
    dataExtra: any;
    next: ListNode;
    prev: ListNode;
    event:number;
    isEmpty(): boolean {
        return this.next === this;
    }

    insertAfter(prev: ListNode) {
        this.prev = prev;
        this.next = prev.next;

        this.next.prev = this;
        prev.next = this;
    }

    remove() {
        this.prev.next = this.next;
        this.next.prev = this.prev;

        this.prev = this;
        this.next = this;
        this.data=null;
        ListNode._pool.recover(this);
    }

    reset() {
        this.data = null;
        this.next = this;
        this.prev = this;
        return this;
    }
}