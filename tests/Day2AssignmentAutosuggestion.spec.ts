import {test, expect, Locator} from "@playwright/test";

test("Myntra Bootstrap dropdown", async({page}) => {
    await page.goto("https://www.myntra.com/");

    await page.getByPlaceholder("Search for products, brands and more").fill("mobile");

    await page.waitForTimeout(5000);
    const options:Locator = page.locator("ul.desktop-group>li");
    const count:number = await options.count();
    console.log(count);
    // for(let i: number = 0 ; i < count ; i++) {
    //     console.log("Options : ", options.nth(i).textContent());
    // }
});