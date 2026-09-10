import { test, expect, Locator } from "@playwright/test";

const items: string[] = ["laptop", "smartphone", "gift card", "monitor"];

items.forEach((value: string, index: number, arr: string[]) => {
  test("Parameterised Test " + (index + 1) + " : ", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    const item: string = value;

    await page.locator("#small-searchterms").fill(item);
    await page.locator(".search-box-button").click();

    const titles: Locator = page.locator(".item-box .product-title");
    expect(titles.nth(0)).toContainText(item, { ignoreCase: true });
  });
});
