import {test, expect, Locator} from "@playwright/test";
import fs from 'fs';
import {parse} from 'csv-parse/sync';


const csvPath: string = "test-data/loginData.csv";
const fileContent = fs.readFileSync(csvPath, 'utf-8');
// Using parse function from the csv-parse/sync package you installed.
const users = parse(fileContent, {columns: true, skip_empty_lines: true});

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