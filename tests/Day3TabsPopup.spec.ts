import {test, expect, Browser, chromium, BrowserContext, Page, Locator} from "@playwright/test";

// test("Tabs Tests :",async() => {
//     const browser: Browser = await chromium.launch();
//     const browserContext: BrowserContext = await browser.newContext();
//     const page: Page = await browserContext.newPage();

//     await page.goto("https://testautomationpractice.blogspot.com/");
//     await expect(page).toHaveTitle("Automation Testing Practice");

//     // Event to catch the new launched page
//     // browserContext.waitForEvent('page');
//     // Trigger action that launches new page
//     const btn: Locator = page.getByRole("button", {name: 'New Tab'});
//     // await btn.click();

//     const [childPage] = await Promise.all([browserContext.waitForEvent('page'), btn.click()]);

//     const pages = browserContext.pages();
//     console.log("Numbers of Pages :", pages.length);

//     // Switching between Pages :- 
//     // 1. Using BrowserContext.pages();
//     console.log("Title of Parent Page : ", await pages[0].title())
//     console.log("Title of Child Page : ", await pages[1].title())
//     // await page.waitForTimeout(4000);
    
//     // 2. Directly using the Variables you declared using the context you don't have
//     // to use the Promise.all() method. (Suitable when you only have 2 Pages)
//     console.log("Title of Parent Page : ", await page.title())
//     console.log("Title of Child Page : ", await childPage.title())
// });

test.only("Pop up Tests :", async() => {
    const browser: Browser = await chromium.launch();
    const browserContext: BrowserContext = await browser.newContext();
    const page: Page = await browserContext.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const popUpBtn: Locator = page.locator("#PopUp");
    await popUpBtn.click();
    
    const [childPage] = await Promise.all([page.waitForEvent('popup'), popUpBtn.click()]);
    
    const pages = browserContext.pages();
    console.log("Total Number of Pages :", pages.length);

    for(let i = 0 ; i < pages.length ; i++) {
        console.log(i);
        const title: string = await pages[i].title();
        console.log(title);
        // if(title.includes("Playwright")) {
        //     await pages[i].close();
        //     break;
        // }
        if(title.includes("Selenium")) {
            await pages[i].close();
            break;
        }
    }
    
    await page.waitForTimeout(3000);
});