import {theFramePool} from '../src/framework/core/FramePool'

test("FramePool", ()=>{

    let testarray =  theFramePool.allocItem("test", Array);
    testarray.push(1);
    testarray.push(2);
  

    let acount = theFramePool.getAllocatedItemCount("test");
    let rcount = theFramePool.getRecoveredItemCount("test");

    expect(acount).toBe(1);
    expect(rcount).toBe(0);

    theFramePool.recoverAll();

    acount = theFramePool.getAllocatedItemCount("test");
    rcount = theFramePool.getRecoveredItemCount("test");
    
    expect(acount).toBe(0);
    expect(rcount).toBe(1);
})
