import {test} from "@playwright/test";

test.beforeAll("Before All Test", async()=> {
    console.log("Before All Test Methods");
})

test.afterAll("After All Test", async()=> {
    console.log("After All Test Methods");
})

test.beforeEach("Before Each Test", async()=> {
    console.log("Before Each Test Method");
});

test.afterEach("After Each Test", async()=> {
    console.log("After Each Test Method");
});

test("Test Method 1", async()=>{
    console.log("Test 1");
})

test("Test Method 2", async()=>{
    console.log("Test 2");
})