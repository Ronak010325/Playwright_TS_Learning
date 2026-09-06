import {test, expect, Locator, Frame} from "@playwright/test";

test("Frame Assignment Test", async({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    // Handling Frame 1
    const frame1 = page.frameLocator("frame[src='frame_1.html']");
    await frame1.locator("input").fill("Frame 1");
    expect(await frame1.locator("input").inputValue()).toContain("Frame 1");
    
    // Handling Frame 2
    const frame2 = page.frameLocator("frame[src='frame_2.html']");
    await frame2.locator("input").fill("Frame 2");
    expect(await frame2.locator("input").inputValue()).toContain("Frame 2");
    
    // Handling Frame 3
    const frame3 = page.frameLocator("frame[src='frame_3.html']");
    await frame3.locator("input").fill("Frame 3");
    expect(await frame3.locator("input").inputValue()).toContain("Frame 3");
    
    // Handling Innear Frame in Frame 3
    const outterFrame3 = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3"});
    if(outterFrame3) {
        const innerFrames = outterFrame3.childFrames();
        const inputField = innerFrames[0].getByLabel("Hi, I am the UI.Vision IDE");
        await inputField.check();
        await expect(inputField).toBeChecked();
    }
    
    // Handling Frame 4
    const frame4 = page.frameLocator("frame[src='frame_4.html']");
    await frame4.locator("input").fill("Frame 4");
    expect(await frame4.locator("input").inputValue()).toContain("Frame 4");
    
    // Handling Frame 5
    const frame5 = page.frameLocator("frame[src='frame_5.html']");
    await frame5.locator("input").fill("Frame 5");
    expect(await frame5.locator("input").inputValue()).toContain("Frame 5");
    await frame5.getByRole("link", {name: 'https://a9t9.com'}).click();
    await page.waitForTimeout(2000);

    await expect(frame5.getByAltText("Ui.Vision by a9t9 software - Image-Driven Automation")).toBeVisible();
});