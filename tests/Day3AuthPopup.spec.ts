import {test, expect, Locator} from "@playwright/test";

test("Authentication Popup", async({browser}) => {
    const context = await browser.newContext({
        httpCredentials:{
            username: 'admin',
            password: 'admin'
        }
    });
    const page = await context.newPage();
    
    // 1. Link Approuch
    // await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    // const text: string = await page.locator(".example p").innerText();
    // expect(text.includes("Congratulations")).toBeTruthy();
    
    // 2. Context
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    const text: string = await page.locator(".example p").innerText();
    expect(text.includes("Congratulations")).toBeTruthy();

})