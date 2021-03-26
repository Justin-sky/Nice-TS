

test("hello world test", () =>{
    console.log("hello");
    expect(true).toBe(true);

    let map1:{[name:string]:number[]} = {}
    map1["t"] = [1,2]

    console.log(map1);


    let map2:{[name:string]:number[][]} = {}
    map2["t2"] = []
    map2["t2"][0]=[12,3]
    console.log(map2)
});