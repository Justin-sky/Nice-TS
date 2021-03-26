import {LinearEnum} from '../src/framework/core/types'


test("LinearEnum", () =>{
    
    // { Count: number, [index: number]: string};
    let t:LinearEnum  = { Count:1 , 2:"Count"};

    expect(t.Count).toBe(1);
    expect(t[2]).toBe("Count")
});


