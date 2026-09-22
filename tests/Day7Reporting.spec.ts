import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';


test.describe("Tricent Ecommerce Website Home Page Tests", () => {
    test.beforeEach("Go to Website", async({page}) => {
        await allure.description("This Group of Test will Check Basic Home page Functionality");
        await allure.owner("Ronak");
        await allure.parameter("browser", "chrome");
        await page.goto("https://demowebshop.tricentis.com/");
    });
    
    test("Logo Test", {tag:'@smoke'}, async({page})=> {
        await expect(page.locator(".header-logo img")).toBeVisible();
    });
    
    test("Page Title", {tag:'@sanity'}, async({page})=> {
        await expect(page).toHaveTitle("Demo Web Shop");
    });

    test("Search Box", {tag:'@regression'}, async({page})=> {
        await page.fill("input[value='Search store']", "laptop");
        await page.click("input[value='Search']");
        await expect.soft(page.locator(".product-title a").nth(0)).toContainText("Laptop", {ignoreCase: true});
    });
});


