import { TypedObjectPool } from "../common/TypedObjectPool";

class TimeEvent {
    id: number;
    endTime: number;
    interval: number;

    fireTime: number;
    fired: boolean;
    isEnd: boolean;

    init(id: number, curTime: number, life: number, delay: number, interval: number) {
        this.id = id;
        this.fired = false;
        this.isEnd = false;
        this.interval = interval;
        this.endTime = curTime + life;
        
        this.fireTime = curTime + delay;
        this.tick(curTime, curTime);
        return this;
    }

    tick(curTime: number, prevTime: number) {
        if (this.isEnd) {
            return;
        }

        let fireTime = this.fireTime;
        this.fired = fireTime <= curTime;
        if (this.fired) {
            this.fireTime = curTime + this.interval;
        }
        this.isEnd = curTime >= this.endTime;
    }

    stop() {
        this.fired = false;
        this.isEnd = true;
    }

    mod(delta: number) {
        if (this.isEnd) {
            return;
        }
        this.fireTime += delta;
        this.endTime += delta;
    }

    timeLeft(curTime: number) {
        return Math.max(0, this.endTime - curTime);
    }
}

export class TimeServer {
    private _dt: number;
    private _time: number;
    private _prevTime: number;
    private _nextID: number = 1;
    private _idToEvent: { [id: number]: TimeEvent } = {};
    private _finishedTimer: number[] = [];
    private _pool: TypedObjectPool<TimeEvent> = new TypedObjectPool(TimeEvent);

    get dt() { return this._dt; }
    get time() { return this._time; }
    get prevTime() { return this._prevTime; }

    constructor() {
        this.reset();
    }

    reset() {
        this._dt = 0;
        this._time = 0;
        this._prevTime = 0;
        this._nextID = 1;
        this.removeAllTimer();
        this._finishedTimer.length = 0;
    }

    tick(dt: number, time: number) {
        this._dt = dt;
        let prevTime = this._prevTime = this._time;
        this._time = time;

        let idToEvent = this._idToEvent;

        for (let id in idToEvent) {
            let event = idToEvent[id];
            event.tick(time, prevTime);
            if (event.isEnd) {
                this._finishedTimer.push(event.id);
            }
        }
    }

    postTick() {
        this.removeFinishedTimer();
    }

    wait(life: number): number {
        return this.loop(life, life, life + 1);
    }

    loop(life: number, delay: number, interval: number): number {
        let id = this._nextID++;
        let event = this._pool.get();
        this._idToEvent[id] = event;
        event.init(id, this._time, life, delay, interval);
        return id;
    }

    stop(id: number) {
        let event = this._idToEvent[id];
        if (event) {
            event.stop();
        }
    }

    resetTime(id: number, life: number) {
        let event = this._idToEvent[id];
        if (event) {
            event.init(event.id, this._time, life, 0, event.interval);
        }
    }

    modTime(id: number, modVal: number) {
        let event = this._idToEvent[id];
        if (event) {
            event.mod(modVal);
        }
    }

    waitOrResetTime(id: number, life: number): number {
        if (this.isEnd(id)) {
            return this.wait(life);
        }
        this.resetTime(id, life);
        return id;
    }

    on(id: number): boolean {
        let event = this._idToEvent[id];
        return event ? event.fired : false;
    }

    isEnd(id: number): boolean {
        let event = this._idToEvent[id];
        return event ? event.isEnd : true;
    }

    timeLeft(id: number): number {
        let event = this._idToEvent[id];
        return event ? event.timeLeft(this._time) : 0;
    }

    private removeFinishedTimer() {
        let finishedTimer = this._finishedTimer;
        let idToEvent = this._idToEvent;
        let pool = this._pool;

        for (let id of this._finishedTimer) {
            let event = idToEvent[id];
            pool.recover(event);

            delete idToEvent[id];
        }
        finishedTimer.length = 0;
    }

    private removeAllTimer() {
        let idToEvent = this._idToEvent;
        let pool = this._pool;

        for (let id in idToEvent) {
            let event = idToEvent[id];
            pool.recover(event);
            delete idToEvent[id];
        }
    }
}