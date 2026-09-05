import {test, expect, Locator} from "@playwright/test";

test("Different action on elements of webpage", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // 1. Input Boxs
    const inputBox: Locator = page.getByPlaceholder("Enter Name");
    
    // Actions
    await inputBox.fill("Name Entered");
    const verifyFill: string | null = await inputBox.getAttribute("maxlength");
    console.log("Entred Text : ", await inputBox.inputValue());

    // Assertions
    await expect.soft(inputBox).toBeVisible();
    await expect.soft(inputBox).toBeEnabled();
    expect.soft(verifyFill).toBe("15");
});

test("Radio Button Test", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    // 2. CheckBoxs & Radio Btns
    const radioBtn: Locator = page.locator("#male");
    
    // Actions
    await radioBtn.check();
    // Assertion
    expect.soft(await radioBtn.isChecked()).toBeTruthy();
    await expect(radioBtn).toBeChecked();
});

test.only("Checkbox Test", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Single CheckBox
    // const sunday:Locator = page.getByLabel("Sunday");
    // await sunday.check();
    // await expect(sunday).toBeChecked();

    // Multiple Checkbox
    // const days: Locator = page.locator("//label[text()='Days:']/parent::div//input");
    // const count: number = await days.count();
    // for(let i : number = 0 ; i < count ; i++) {
    //     if(await days.nth(i).isChecked()) {
    //         await days.nth(i).uncheck();
    //     } else {
    //         await days.nth(i).check();
    //     }
    // };

    // Uncheck the last 2 CheckBoxs
    // for(let i: number = count - 2 ; i < count ; i++) {
    //     await days.nth(i).uncheck();
    //     expect(await days.nth(i).isChecked()).toBeFalsy();
    // expect(await days.nth(i)).not.toBeChecked();
    // }

    // Either You can store Labels in an Array and use the .getByLabel() to check all the checkboxs.
    const labels: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const locators: Locator[] = labels.map(label => page.getByLabel(label));  //You can also do it in this way.
    // for(const label of labels) {        
    //     await page.getByLabel(label).check();
    //     await expect(page.getByLabel(label)).toBeChecked();
    // }

    const nameLabel: string = "Tuesday";
    for(const locator of locators) {
        const labelText: string | null = await locator.getAttribute("id");
        if(labelText?.toLowerCase() == nameLabel.toLowerCase()) {
            await locator.check();
            break;
        }
    }
});