import {test, expect, Locator} from "@playwright/test";

test("Select DropDown Tests", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // Select dropdown
    const selectTag: Locator = page.locator("#country");
    // 1. Using Visible Text
    await selectTag.selectOption("France");
    // 2. Using Value Attribute
    await selectTag.selectOption({value: 'india'});
    // 3. Using Label
    await selectTag.selectOption({label: 'United States'});
    // 4. Index Value
    await selectTag.selectOption({index: 2}); //Index Value starts from 0 not 1

    // Count options
    const options: Locator = page.locator("//select[@id='country']/option");
    const optionCount: number = await options.count();
    expect(optionCount).toBe(10);

    // Option is present
    const optionStr: string = "India";
    const optionTexts: string[] = (await options.allTextContents()).map(i => i.trim());
    var isPresent: boolean = false;
    for(const option of optionTexts) {
        if(option == optionStr) {
            isPresent = true;
            console.log("Option : ", option);
            break;
        }
    }
    expect(isPresent).toBeTruthy();
});

test("Multi Select Dropdown", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");


    const multiSelectTag: Locator = page.locator("#colors");
    // 1. Using Visible Text
    // await multiSelectTag.selectOption(["Red", "Blue", "Yellow"]);
    // 2. Using Value Attribute
    // await multiSelectTag.selectOption(["red", "blue", "yellow", "white"]);
    // 3. Using Label
    // await multiSelectTag.selectOption([{label: "Red"}, {label: "Blue"}, {label: "Yellow"}]);
    // 4. Index Value
    await multiSelectTag.selectOption([{index: 0}, {index: 1}, {index: 3}]);

    await page.waitForTimeout(3000);
})