import {test, expect, Locator} from "@playwright/test";

test("Xpath Locator Strategy", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // 1. Absolute Xpath
    // await page.locator("//html[1]/body[1]/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/input[2]").fill("Entered Value@gmail.com");
    // 2. Relative Xpath
    // await page.locator("//input[@id='name']").fill("Entered Value");
    
    // 3. Multiple Elements
    // const days: Locator = page.locator("//label[normalize-space()='Days:']/parent::div/div/label");
    // console.log("First Day : " + await days.first().textContent());
    // console.log("Last Day : " + await days.last().textContent());
    // console.log("Nth Day : "+ await days.nth(2).textContent()); //This Works on Index Value.
    // const daysNames: string[] = await days.allTextContents(); 
    // daysNames.forEach(x => {
    //     console.log("Day : " + x);
    // }
    // );

    // 4.Dynamic Elements
    // Playwright specific locators are :- page.getByRole("button", {name: /START|STOP/})
    // "|" means OR and "/ /" use this while defining the regular expression.

    const startStopBtn: Locator = page.getByRole("button", {name: /START|STOP/});
    // 1. OR :- "//button[@name='start' or @name='stop']" can also use this xpath
    // 2. CONTAINS() :- "//button[contains(@name, 'st')]"
    // 3. STARTS-WITH() :- "//button[starts-with(@name, 'st')]"
    // 4. TEXT() :- "//button[text()='START' or text()='STOP']"
    await startStopBtn.click();
    await page.waitForTimeout(4000);
    await startStopBtn.click();

    // 5.CSS locator
    // 1. (,) :- "button[name='start'], button[name='stop']"
})