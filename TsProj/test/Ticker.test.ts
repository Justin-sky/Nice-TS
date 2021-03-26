import { Ticker } from "../src/framework/core/Ticker";


const kLogicDeltaTime = 0.1;

function tick(dt: number, time: number, frameRatio: number) {
    //this._rootSystem.tick(dt, time, frameRatio);
}

function postTick(dt: number, time: number, frameRatio: number) {
    //this._rootSystem.postTick(dt, time, frameRatio);
    //this._context.postTick();
}

function fixedTick(dt: number, time: number) {
    //this._rootSystem.fixedTick(dt, time);
}

function postFixedTick(dt: number, time: number) {
    //this._rootSystem.postFixedTick(dt, time);
    //this._context.postFixedTick();
}



test("Ticker test", () =>{
    


    let ticker = new Ticker(
        kLogicDeltaTime,
        (dt: number, time: number, frameRatio: number) => tick(dt, time, frameRatio),
        (dt: number, time: number, frameRatio: number) => postTick(dt, time, frameRatio),
        (dt: number, time: number) => fixedTick(dt, time),
        (dt: number, time: number) => postFixedTick(dt, time)
    );
    

    while(true){
        let dt = 0.001;
        let battleSpeed = 1;
        
        //加速： Global.battleSpeed
        dt = dt * battleSpeed;

        ticker.tick(dt);

        return;
    }

});