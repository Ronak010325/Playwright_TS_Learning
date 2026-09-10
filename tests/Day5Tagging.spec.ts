import { test, expect } from "@playwright/test";

// Approuch 1 (In Test Title)
// test("@sanity @regression Tagging Tests", async({page}) => {
//     await page.goto("https://www.google.com/");
//     await expect(page).toHaveTitle("Google");
// });

// Approuch 2 (Using {tag:'@tag'} as third argument).
test("Smoke Test", {tag:'@sanity'}, async({page}) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
});

test("Smoke and Regression Test", {tag:['@sanity', '@regression']}, async({page}) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
    await page.getByRole("link", {name: 'Store'}).click();
    expect(await page.locator("text='Popular on the Google Store.'").innerText()).toBe("Popular on the Google Store.");
});