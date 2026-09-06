import {test, expect, Locator, Frame} from "@playwright/test";

test("Testing Frames", async({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frames: Frame[] = page.frames();
    console.log("Total No. of Frames : ", frames.length);
    const frame1: Frame | null = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1"});
    if(frame1) {
        await frame1.locator("input").fill("Frame 1");
        console.log("Send Values :", await frame1.locator("input").inputValue());
        await page.waitForTimeout(3000);
    }
});

test("Frame 2", async({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame2: Frame | null = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_2"});
    if(frame2) {
        await frame2?.locator("input").fill("Frame 2");
        console.log("Frame 2 Input box :", await frame2?.locator("input").inputValue());
        await page.waitForTimeout(3000);
    }
});

// test("Frame 3", async({page}) => {
//     await page.goto("https://ui.vision/demo/webtest/frames/");
//     const frame3: Frame | null = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3"});
//     if(frame3) {
//         const inputField = frame3?.locator("input[name='mytext3']");
//         await inputField?.fill("Frame 3");
//         await page.waitForTimeout(3000);
//     }
// });

test.only("Frame 3 Innear Frame", async({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const farme3Locator = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3"});
    // const farme3Locator = page.frameLocator("frame[@src='frame_3.html']");
    if(farme3Locator) {
        const numberOfFrames : Frame[] = farme3Locator.childFrames();
        console.log("Number of Frames : ",numberOfFrames.length);

        // If there are multiple frames inside a frame then you can use Index values to access those frames.
        const inputCheck = numberOfFrames[0].getByLabel("I am a human");
        await inputCheck.check();
        await expect(inputCheck).toBeChecked();
    }
});

// test("FrameLocator Test", async({page}) => {
//     await page.goto("https://ui.vision/demo/webtest/frames/");
    // const frameLocatorFrame = page.frameLocator("frame[src='frame_3.html']");
//     const inputField: Locator = frameLocatorFrame.locator("input");
//     await inputField.fill("Frame input using frameLocator");
//     expect(await inputField.inputValue()).toBe("Frame input using frameLocator");
// });