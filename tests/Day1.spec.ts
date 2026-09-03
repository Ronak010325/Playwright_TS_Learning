import { test, expect } from "@playwright/test";

test("This is my First Test", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    let inputTitle : string = await page.title();
    console.log("Title : "+inputTitle);
    await expect(page).toHaveTitle("OrangeHRM");
});