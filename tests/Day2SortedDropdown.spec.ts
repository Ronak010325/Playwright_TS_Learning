import {test, expect, Locator} from "@playwright/test";

test("Check Whether options are Sorted", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    // const dropDownOptions: string[] = (await page.locator("#country>option").allTextContents()).map(i => i.trim());
    const dropDownOptions: string[] = (await page.locator("#animals>option").allTextContents()).map(i => i.trim());
    
    const originalArray: string[] = [...dropDownOptions];
    const sortedArray: string[] = [...originalArray].sort();
    // sort() method is mutable means it will change the original. 
    
    console.log("Original Array : ", dropDownOptions);
    console.log("Sorted Array : ", sortedArray);
    expect(dropDownOptions).toEqual(sortedArray);
    
    await page.waitForTimeout(3000);
});

test.only("Check Duplicates in Dropdown", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // const dropDownOptions: string[] = (await page.locator("#country>option").allTextContents()).map(i => i.trim());
    const dropDownOptions: string[] = (await page.locator("#colors>option").allTextContents()).map(i => i.trim());
    
    const myset = new Set<String>(); //Set Collactions
    let duplicates: string[] = [];
    
    for(const i of dropDownOptions) {
        if(!myset.has(i)) {
            myset.add(i);
        } else {
            duplicates.push(i);
        }
    }

    expect(duplicates.length).toBe(0);
    
    await page.waitForTimeout(3000);
});