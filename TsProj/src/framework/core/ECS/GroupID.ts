export class GroupID {
    public key: string;
    private _id0: number;
    private _id1: number;
    private _id2: number;
    constructor() {
        this.reset();
    }

    assign(groupID: GroupID) {
        this._id0 = groupID._id0;
        this._id1 = groupID._id1;
        this._id2=  groupID._id2;
        this.key = groupID.key;
        return this;
    }

    reset() {
        this._id0 = this._id1 = this._id2= 0;
        this.key = "";
        return this;
    }

    equal(other: GroupID): boolean {
        return this._id0 == other._id0 && this._id1 == other._id1 && this._id2== other._id2;
    }

    clear(pos: number) {
        if (pos <= 31) {
            this._id0 &= ~(1 << pos);
        } else if(pos<=63){
            pos -= 31;
            this._id1 &= ~(1 << pos);
        }
        else{
            pos -= 63;
            this._id2 &= ~(1 << pos);
        }
        this.makeKey();
    }

    set(pos: number) {
        if (pos <= 31) {
            this._id0 |= (1 << pos);
        } else if(pos<=63) {
            pos -= 31;
            this._id1 |= 1 << pos;
        }
        else
        {
            pos -= 63;
            this._id2 |= 1 << pos;
        }
        this.makeKey();
        return this;
    }

    hasMask(mask: GroupID): boolean {
        return (this._id0 & mask._id0) == mask._id0 && (this._id1 & mask._id1) == mask._id1&& (this._id2 & mask._id2) == mask._id2;
    }

    has(pos: number): boolean {
        if (pos <= 31) {
            return !!(this._id0 & (1 << pos));
        }
        if (pos <= 63) {
            pos -= 31;
            return !!(this._id1 & (1 << pos));
        }
        pos -= 63;
        return !!(this._id2 & (1 << pos));
    }

    intersection(result: GroupID, other: GroupID) {
        result._id0 = this._id0 & other._id0;
        result._id1 = this._id1 & other._id1;
        result._id2 = this._id2 & other._id2;
        result.makeKey();
    }

    private makeKey() {
        this.key = this._id0 + "_" + this._id1+"_" + this._id2;
    }
}