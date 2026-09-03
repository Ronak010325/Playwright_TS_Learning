import {test, expect, Locator} from "@playwright/test";

test("Xpath Locator Strategy", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // Absolute Xpath
    // await page.locator("//html[1]/body[1]/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/input[2]").fill("Entered Value@gmail.com");
    // // Relative Xpath
    // await page.locator("//input[@id='name']").fill("Entered Value");
    
    // Multiple Elements
    const days: Locator = page.locator("//label[normalize-space()='Days:']/parent::div/div/label");
    // console.log("First Day : " + await days.first().textContent());
    // console.log("Last Day : " + await days.last().textContent());
    // console.log("Nth Day : "+ await days.nth(2).textContent()); //This Works on Index Value.
    const daysNames: string[] = await days.allTextContents(); 
    daysNames.forEach(x => {
        console.log("Day : " + x);
    }
    );
})