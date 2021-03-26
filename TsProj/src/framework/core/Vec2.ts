import { BattleMath } from "./BattleMath";

export class Vec2 {
    static readonly kZero = new Vec2(0, 0);
    static readonly kAxisX = new Vec2(1, 0);
    static readonly kAxisY = new Vec2(0, 1);
    static readonly kOne = new Vec2(1, 1);

    x: number;
    y: number;

    get width() { return this.x; }
    set width(w: number) { this.x = w; }
    get height() { return this.y; }
    set height(h: number) { this.y = h; }

    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
    }

    set(x: number, y: number) {
        this.x = x;
        this.y = y;
        return this;
    }

    setVec2(v: Vec2) {
        this.x = v.x;
        this.y = v.y;
        return this;
    }

    setScalar(s: number) {
        this.x = s;
        this.y = s;
        return this;
    }

    setX(x: number) {
        this.x = x;
        return this;
    }

    setY(y: number) {
        this.y = y;
        return this;
    }

    equal(v: Vec2): boolean {
        return this.x == v.x && this.y == v.y;
    }

    fixed() {
        this.x = this.x.fixed();
        this.y = this.y.fixed();
        return this;
    }

    setLength(len: number) {
        return Vec2.mulScalar(this, Vec2.normalize(this, this), len);
    }

    clone(): Vec2 {
        return new Vec2(this.x, this.y);
    }

    lengthSQ(): number {
        return this.x * this.x + this.y * this.y;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    clampLength(maxLen: number) {
        let lenSQ = this.lengthSQ().fixed();
        let maxLenSQ = (maxLen * maxLen).fixed();
        if (lenSQ > maxLenSQ) {
            this.setLength(maxLen);
        }
        return this;
    }

    static add(out: Vec2, a: Vec2, b: Vec2): Vec2 {
        out.x = a.x + b.x;
        out.y = a.y + b.y;
        return out;
    }

    static addScalar(out: Vec2, a: Vec2, s: number): Vec2 {
        out.x = a.x + s;
        out.y = a.y + s;
        return out;
    }

    static addScaledVec(out: Vec2, a: Vec2, b: Vec2, s: number): Vec2 {
        out.x = a.x + b.x * s;
        out.y = a.y + b.y * s;
        return out;
    }

    static sub(out: Vec2, a: Vec2, b: Vec2): Vec2 {
        out.x = a.x - b.x;
        out.y = a.y - b.y;
        return out;
    }

    static subScalar(out: Vec2, a: Vec2, s: number): Vec2 {
        out.x = a.x - s;
        out.y = a.y - s;
        return out;
    }

    static mul(out: Vec2, a: Vec2, b: Vec2): Vec2 {
        out.x = a.x * b.x;
        out.y = a.y * b.y;
        return out;
    }

    static mulScalar(out: Vec2, a: Vec2, f: number): Vec2 {
        out.x = a.x * f;
        out.y = a.y * f;
        return out;
    }

    static div(out: Vec2, a: Vec2, b: Vec2): Vec2 {
        out.x = a.x / b.x;
        out.y = a.y / b.y;
        return out;
    }

    static divScalar(out: Vec2, a: Vec2, s: number) {
        return Vec2.mulScalar(out, a, 1.0 / s);
    }

    static neg(out: Vec2, a: Vec2): Vec2 {
        out.x = -a.x;
        out.y = -a.y;
        return out;
    }

    static dot(a: Vec2, b: Vec2): number {
        return a.x * b.x + a.y * b.y;
    }

    static cross(a: Vec2, b: Vec2): number {
        return a.x * b.y - a.y * b.x;
    }

    static normalize(out: Vec2, a: Vec2): Vec2 {
        return Vec2.divScalar(out, a, a.length());
    }

    static distanceSQ(a: Vec2, b: Vec2): number {
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        return dx * dx + dy * dy;
    }

    static distance(a: Vec2, b: Vec2): number {
        return Math.sqrt(Vec2.distanceSQ(a, b));
    }

    static lerp(out: Vec2, a: Vec2, b: Vec2, f: number): Vec2 {
        out.x = (b.x - a.x) * f + a.x;
        out.y = (b.y - a.y) * f + a.y;
        return out;
    }

    static rotation(a: Vec2, b: Vec2): number {
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        if (dx == 0 && dy == 0) {
            return 0;
        }
        let angle = Math.atan2(dy, dx) * BattleMath.kRadToDeg;
        return BattleMath.trueMod(angle, 360);
    }

    toString() {
        return `{x:${this.x}, y:${this.y}}`;
    }
}