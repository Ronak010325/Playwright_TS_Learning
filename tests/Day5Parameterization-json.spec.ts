import {test, expect, Locator} from "@playwright/test";
import fs from "fs";

const jsonFilePath: string = "test-data/loginData.json";
// fs.readFileSync(jsonFilePath, 'utf-8') utf stands for unicode transformation formate
// This will read the file data and return in the string formate.
const users: any = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));  //Read Data From JSON file from test-data folder

test.describe("Login Data Driven Testing", async() => {
    users.forEach((user: any, index: number) => {
        test("Parameteriased Test "+(index + 1)+" : ", async({page})=>{
            await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
            await page.locator("#input-email").fill(user.username);
            await page.locator("#input-password").fill(user.password);
            await page.locator("//input[@value='Login']").click();
    
            const logout: Locator = page.locator("//a[@class='list-group-item'][normalize-space()='Logout']");
            
            if(await logout.isVisible()) {
                expect(await logout.isVisible()).toEqual(user.result == 'valid');
            } else {
                expect(!await logout.isVisible()).toEqual(user.result == 'invalid');
            }
        });
    });
});