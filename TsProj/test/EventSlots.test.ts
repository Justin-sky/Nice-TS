import { EventSlots } from "../src/framework/core/ECS/EventSlots";


test("EventSlots", () =>{
    let  e:number = 1000;
    let  e2:number = 1001;

    let eventSlots = new EventSlots();

    eventSlots.add(e, (event, data, eventCounter) => {

            console.log(`${event}: ${data} : ${eventCounter}`);

            return true;
    }, "Hello Event");



    eventSlots.fire(e, "not");
    eventSlots.fire(e, "not1");
    eventSlots.fire(e, "not2");
    

    console.log("======================================")

    eventSlots.add(e2, (event, data, eventCounter) => {

            console.log(`${event}: ${data} : ${eventCounter}`);

            return false;
    }, "Hello Event 2");


    eventSlots.fire(e2, "not3");
    eventSlots.fire(e2, "not4");
    eventSlots.fire(e2, "not5");
});