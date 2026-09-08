import {test, expect, Locator} from "@playwright/test";

test("Assertions Test :", async({page})=> {
    await page.goto("https://demowebshop.tricentis.com/");

    // 1. Auto retry Assertion (Applied on Page and Locator)
    await expect(page).toHaveTitle(/Demo Web/);
    
    // 2. Non Auto retry Assertion (Applied on Values)
    const url = page.url();
    expect(url).toBe("https://demowebshop.tricentis.com/");

    // 3. Negative Assertion
    const sectionText = await page.locator(".topic-html-content-header").innerText();
    expect(sectionText).not.toBe("Welcome to your store");

    // 4. Hard Assertion (Immedieatly Stops the Execution if Failed)
    await expect(page).toHaveTitle(/Demo Web/);
    
    // 5. Soft Assertion (Continues the Execution if Failed)
    await expect.soft(page).toHaveTitle(/Demo Web/);
})