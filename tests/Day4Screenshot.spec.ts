import {test, expect} from "@playwright/test";

test("Test Screenshot Function", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");
    const date = Date.now();

    // 1. This is For Elements that are visible on the page at the time of performing actions.
    // await page.screenshot({path:"Screenshots/normalScreenshot"+date+".jpeg"});
    
    // 2. This is For Entire Page.
    // await page.screenshot({path:"Screenshots/fullPageScreenshot"+date+".jpeg", fullPage: true});

    // 3. Specific Element or Section Screenshot
    await page.locator("//img[@alt='Tricentis Demo Web Shop']").screenshot({path:"Screenshots/elementScreenshot"+date+".jpeg"});
    await page.locator("//div[@class='product-grid home-page-product-grid']").screenshot({path:"Screenshots/sectionScreenshot"+date+".jpeg"});
});