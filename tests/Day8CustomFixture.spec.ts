// import { test,expect } from '@playwright/test';
import { test,expect } from './CustomeFixtures/login.js';

// This is the Basic Test that we perform.
// test.skip("Custom Fixture Test", async({page}) => {
//     await page.goto("https://demoblaze.com/index.html");
//     await page.getByRole("link", {name: "Log in"}).click();
//     await page.locator("#loginusername").fill("demo");
//     await page.locator("#loginpassword").fill("demo");
//     await page.getByRole("button", {name: "Log in"}).click();

//     const logoutBtn = page.getByRole("link", {name: "Log out"});
//         await expect(logoutBtn).toBeVisible();
// });

// 1. With Hooks
// test.beforeEach("Login", async({page}) => {
//     await page.goto("https://demoblaze.com/index.html");
//     await page.getByRole("link", {name: "Log in"}).click();
//     await page.locator("#loginusername").fill("demo");
//     await page.locator("#loginpassword").fill("demo");
//     await page.getByRole("button", {name: "Log in"}).click();
// });

// test("Test Logged In", async({page}) => {
//     // Check Logout Btn Present or not
//     const logoutBtn = page.getByRole("link", {name: "Log out"});
//     await expect(logoutBtn).toBeVisible();
// });

// 2. With Custome Fixture
test("Test Logged In", async({loggedInPage})=> {
        // Check Logout Btn Present or not
        const logoutBtn = loggedInPage.getByRole("link", {name: "Log out"});
        await expect(logoutBtn).toBeVisible();
})