import {test, expect, Browser, BrowserContext, chromium, firefox, Page} from "@playwright/test";

// Browser --> BrowserContext --> Page

// Browser : chromium(chrome + edge), firefox, webkit(Safari).
// Context : Create multiple user profiles for the same browser instance.
//           It provides a way to operate on multiple independent browser session.
// Page : New Tab, Window, Popup.

test("Browser Context Test", async() => {
    // 1.Browser
    const browser: Browser = await firefox.launch();
    // 2.Context
    const context: BrowserContext = await browser.newContext();
    // 3.Page
    const page1: Page = await context.newPage();
    const page2: Page = await context.newPage();

    await page1.goto("https://testautomationpractice.blogspot.com/");
    await page2.goto("https://playwright.dev/docs/api/class-browsercontext");
    
    // await page1.waitForTimeout(4000);
    await expect(page1).toHaveURL("https://testautomationpractice.blogspot.com/");
    await expect(page2).toHaveURL("https://playwright.dev/docs/api/class-browsercontext");
    // await page2.waitForTimeout(4000);

    console.log("No. of Pages Created from same context :", context.pages().length);

    await page1.close();
    await context.close();
    await browser.close();
});