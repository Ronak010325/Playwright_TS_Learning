import {test, expect, Page, chromium} from '@playwright/test';

let page: Page;

test.beforeAll("Before All", async({browser}) =>{ 
    const context = await browser.newContext();
    page = await context.newPage();
})

test.afterAll("After All", async()=> {
    await page.close();
})

test.beforeEach("Login", async() => {
    // Login
    await page.goto("https://demoblaze.com/index.html");
    await page.getByRole("link", {name: "Log in"}).click();
    await page.locator("#loginusername").fill("demo");
    await page.locator("#loginpassword").fill("demo");
    await page.getByRole("button", {name: "Log in"}).click();
});

test.afterEach("Logout", async() => {
    // Logout
    await page.getByRole("link", {name: "Log out"}).click();
});

test.describe("smoke", async()=> {
    test("Total Number of Products", async() => {
        // Total Products
        const products = page.locator("#tbodyid>div");
        await expect(products).toHaveCount(9);
    });

});

test("Check Login", async() => {
    // Total Products
    const logoutBtn = page.getByRole("link", {name: "Log out"});
    await expect(logoutBtn).toBeVisible();
});