import Prando from "../src/framework/core/Prando";


test("Parndo", () =>{
   

    let rand = new Prando(1000);

    console.log(rand.next(0,1));

    console.log(rand.nextInt(0,100));

    console.log(rand.nextBoolean());

    console.log(rand.nextChar());

    console.log(rand.nextString(3));

});