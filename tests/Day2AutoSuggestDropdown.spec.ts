import {test, expect, Locator} from "@playwright/test";

test("AutoSuggest dropdown", async({page}) => {
    await page.goto("https://www.flipkart.com/");

    const searchBox = page.locator("//form[@class='lilxh_ header-form-search']//input[@placeholder='Search for Products, Brands and More']");
    await searchBox.fill("Mobile");

    await page.waitForTimeout(5000);
    // //button[@type='submit']/parent::div/following-sibling::ul/li//a/div[2]
    const options: Locator = page.locator("ul>li");
    console.log("Number of Options : ", await options.count());

    for(let i: number = 0 ; i < await options.count() ; i++) {
        // console.log("Option Name : ",await options.nth(i).innerText());
        if(await options.nth(i).innerText() == "mobile under 20000rs") {
            await options.nth(i).click();
            break;
        }
    }

});

test.only("Bootstrap dropdown", async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();

    // Click PIM
    await page.locator("//ul/li[2]/a").click();

    // Click 4th dropdown button
    await page.locator("//form//i").nth(3).click();

    await page.waitForTimeout(3000);
    const options: Locator = page.locator("//div[@role='option']");
    const count: number = await options.count();
    console.log("Total no. of options : ", count);
    for(let i: number = 0 ; i < count ; i++) {
        if(await options.nth(i).textContent() == "Quality Assurance") {
            await options.nth(i).click();
            break;
        }
    }
})
