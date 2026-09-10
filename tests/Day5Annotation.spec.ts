import { test, expect } from "@playwright/test";

/*
Common Annotations which we use
1. only()
2. skip()
3. fail()
4. fixme()
5. slow()
*/

// 1.only()
// test.only("Annotation Test", async() => {        //This will run
//     console.log("Only Annotation Test Method");
// });

// test("Without Annotation Test", async() => {     //This will not run
//     console.log("Without Annotation Test Method");
// });

// 2.skip()
test("Skip Annotation Test", async({browserName}) => {      //This will not run
    test.skip(browserName == "firefox", "Browser Name is Firefox");
    console.log("Browser Name is not Firefox");
});

// 3.fail()
// test.fail("Failed Annotation Test", async()=>{ 
//     console.log("Failed Test");
// });

// 4.fixme()
test.fixme("Fixme Annotation Test", async()=>{ 
    console.log("Failed Test");
});