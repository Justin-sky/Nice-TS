import {GroupID} from '../src/framework/core/ECS/GroupID'

test("groupid", ()=>{

    let groupid:GroupID = new GroupID();

    groupid.set(2);
    console.log(groupid.key)

    groupid.reset();
    console.log(groupid.key);
})



