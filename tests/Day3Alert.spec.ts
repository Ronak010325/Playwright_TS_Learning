import {test, expect, Locator} from "@playwright/test";

test("Simple Alert", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog", dialog => {
        console.log("Type of Dialog : ", dialog.type());
        expect(dialog.type()).toBe("alert");
        console.log("Message : ",dialog.message());
        expect(dialog.message()).toContain("I am an alert box!");
        dialog.accept()
    });
    await page.locator("#alertBtn").click(); //Action that Triggers Alert
    await page.waitForTimeout(3000);
});

test("Confirm Alert", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog", dialog => {
        console.log("Type of Dialog : ", dialog.type());
        expect(dialog.type()).toBe("confirm");
        console.log("Message : ",dialog.message());
        expect(dialog.message()).toContain("Press a button!");
        dialog.dismiss()
    });
    await page.locator("#confirmBtn").click(); //Action that Triggers Alert
    expect(await page.locator("#demo").textContent()).toContain("You pressed Cancel!")
    await page.waitForTimeout(3000);
});

test("Prompt Alert", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog", dialog => {
        console.log("Type of Dialog : ", dialog.type());
        expect(dialog.type()).toBe("prompt");
        console.log("Message : ",dialog.message());
        expect(dialog.message()).toContain("Please enter your name:");
        dialog.accept("John"); //If You want to accept the alert and send text to alert
    });
    await page.locator("#promptBtn").click(); //Action that Triggers Alert
    expect(await page.locator("#demo").textContent()).toContain("Hello John! How are you today?")
    await page.waitForTimeout(3000);
});