import { test, expect, Locator } from "@playwright/test";

const users = [
  {
    "username": "demo5231@gmail.com",
    "password": "demo5231",
    "result": "valid"
  },
  {
    "username": "laxmi@gmail.com",
    "password": "laxmi",
    "result": "invalid"
  },
  {
    "username": "barvo@gmail.com",
    "password": "bravo",
    "result": "invalid"
  },
  {
    "username": "abc123@gmail.com",
    "password": "test@123",
    "result": "valid"
  }
];


test.describe("Login Data Driven Testing", async() => {
users.forEach((user, index: number) => {
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