import { Vec2 } from "./Vec2";

const kPrecise = 7;

export class BattleMath {
    static readonly kDegToRad = (Math.PI / 180.0).fixed();
    static readonly kRadToDeg = (180.0 / Math.PI).fixed();

    static lengthSQ(x: number, y: number): number {
        return x * x + y * y;
    }

    static distanceSQ(x0: number, y0: number, x1: number, y1: number): number {
        let dx = x0 - x1;
        let dy = y0 - y1;
        return dx * dx + dy * dy;
    }

    static trueMod(val: number, max: number): number {
        return ((val % max) + max) % max;
    }

    static sign(val: number): number {
        return val >= 0 ? 1.0 : -1.0;
    }

    static getShortestRotationSign(src: number, dst: number): number {
        let dAngle = dst - src;
        let absDAngle = Math.abs(dAngle);
        return (absDAngle < 180) ? this.sign(dAngle) : -this.sign(dAngle);
    }

    static clampValueBySign(val: number, dst: number, sign: number): number {
        if (sign > 0) {
            return Math.min(val, dst);
        }
        return Math.max(val, dst);
    }

    static circleCollision(center0: Vec2, radius0: number, center1: Vec2, radius1: number): boolean {
        let distSQ = Vec2.distanceSQ(center0, center1).fixed();
        let radius = radius0 + radius1;
        let radiusSQ = (radius * radius).fixed();
        return distSQ < radiusSQ;
    }

    static fixed(n: number): number {
        return +(n.toFixed(kPrecise));
    }

    static fixedVec2(v: Vec2): Vec2 {
        v.x = +(v.x.toFixed(kPrecise));
        v.y = +(v.y.toFixed(kPrecise));
        return v;
    }

    static dirToRotation(x: number, y: number): number {
        let angle = (Math.atan2(y, x) * BattleMath.kRadToDeg).fixed();
        return angle.trueMod(360);
    }
}