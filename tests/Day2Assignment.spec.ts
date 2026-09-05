import {test, expect, Locator} from "@playwright/test";

test("Dropdown Assignment : ", async({page}) => {
    await page.goto("https://bstackdemo.com/");

    const sortSelect: Locator = page.locator(".sort>select");
    await sortSelect.selectOption({label: "Lowest to highest"});
    await page.waitForTimeout(1000);
    const prices: Locator = page.locator(".val>b");

    console.log("Lowest Prices : ", await prices.first().textContent());
    console.log("Highest Prices : ", await prices.last().textContent());
    
    // Check the prices are sorted or not.
    // const originalPrices : number[] = (await page.locator(".val>b").allTextContents()).map(i => Number(i));
    
    // In Ascending Order
    // const sortedPrices : number[] = [...originalPrices].sort((a,b) => a - b);
    // In Descending Order
    // const sortedPrices : number[] = [...originalPrices].sort((a,b) => b - a);

    // expect(originalPrices).toEqual(sortedPrices);
});