/*Shows how to write basic async tests
Format is to wait for a callback to occur with-in some time period from start of test*/
import { delay } from "redux-saga";

it("async test 1", done =>{
    setTimeout(done,100);
})

it ("async test 2", () =>{
    return new Promise(
        resolve=>setTimeout(resolve,1500)
    );
})

//This is a wrapped that makes runing the test much faster with redux
it("async test 3", async()=>{
    await delay(100)
})