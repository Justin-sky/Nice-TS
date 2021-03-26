require( "../src/framework/core/JSExtends")

import { Entity } from "../src/framework/core/ECS/Entity";
import { EntityContext } from "../src/framework/core/ECS/EntityContext";
import { ListNode } from "../src/framework/core/ListNode";
import { Vec2 } from "../src/framework/core/Vec2";



class UnitEntity extends Entity {}
class EventEntity extends Entity { }





class Game{



}




function createVec2FieldConvertor(name: string, xField: string, yField: string): () => Vec2 {
    let hideName = "__hide_" + name;
    return function () {
        let hideVec2 = this[hideName];
        if (!hideVec2) {
            hideVec2 = this[hideName] = new Vec2();
        }
        hideVec2.set(this[xField], this[yField]);
        return hideVec2;
    };
}


class BuffComponent{
    name:string = "";
    buffID:number = 0;
    skillID:number = 0;
}

class EventHandleListComponent{
    name:string = "";
    eventHandleList:ListNode[] = null;
}

test("ECS test", () =>{

    let unitCtx = new EntityContext("Battle", UnitEntity);
    unitCtx.regFieldConvertor("pos", createVec2FieldConvertor("pos", "posX", "posY"))

    let unit = unitCtx.create().add(BuffComponent,EventHandleListComponent);
    unit.buffID = 11;
    unit.skillID = 12;
    unit.name = "hello"
   
    let buff:BuffComponent = unit.get(BuffComponent);
    console.log(buff.buffID)
    let event:EventHandleListComponent = unit.get(EventHandleListComponent);
    console.log(event.name);

});