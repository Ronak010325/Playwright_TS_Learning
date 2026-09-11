import {test, expect, Locator} from "@playwright/test";
import fs from 'fs';
import * as XLSX from 'xlsx';

const excelPath: string = "test-data/loginData.xlsx";
// Excel FileData :- Excel File -> Workbook -> Sheets -> Row & Columns
const fileContent = fs.readFileSync(excelPath);
const WorkBook: XLSX.WorkBook = XLSX.read(fileContent);
const sheetName = WorkBook.SheetNames[0];   //To Get All the sheet Names.
const workSheet = WorkBook.Sheets['Sheet1'];

// This will convert a worksheet into json object.
const users = XLSX.utils.sheet_to_json(workSheet);

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