import {test, expect, Locator} from "@playwright/test";

/*
    page.getByRole(); to locate by accessibility attributes
    page.getByText(); to locate by Text content
    page.getByAltText(); to locate image by its alternate text
    page.getByPlaceholder(); to locate input box by placeholder
    page.getByLabel(); to locate form controls by associated label text
    page.getByTestId(); to locate element based on data-testid attribute
    page.getByTitle(); to locate by it's title attribute
*/

test("Locator Test", async({page}) => {
    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.goto("https://testautomationpractice.blogspot.com/");

    // 1. page.getByAltText(); to locate image by its alternate text (Used for Img / area)
    // const productImageAlt : Locator = page.getByAltText("orangehrm-logo"); //Returns Locator
    // const productImage : Locator = page.locator("//div[@class='orangehrm-login-logo']/img"); //Returns Locator
    // await page.waitForTimeout(3000);
    // await expect(productImage).toBeVisible();

    // 2. page.getByText(); to locate by Text content (Used to Locate Text on webpage)
    // Used to find non interactive elements
    // const loginTitle : Locator = page.getByText("Login");
    // await expect(loginTitle).toBeVisible();

    // 3. page.getByRole(); to locate by Implicite or Explicit accessible attribute
    // Used to Find intractable elements
    // Implicit role means the Html Element itself defines the Role. like <button> "button" <img> "img"
    // Explicit role means we have to define the Role. like <input type="checkbox"> "checkbox"
    // const usernameInput = page.getByRole("textbox", {name: "username"});
    // const passwordInput = page.getByRole("textbox", {name: "password"});
    // await usernameInput.fill("Admin");
    // await passwordInput.fill("admin123");
    // await page.getByRole("button", {name: /login/i}).click();
    // await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    // 4. page.getByLabel(); to locate form controls by associated label text
    // console.log(await page.getByLabel("First name:").count());
    // await page.getByLabel("First name:").fill("Name Entred");

    // Capcahe should not be automated as it is present there for security and privacy perpuse. 
    // If we are automating it then we are voileting the security so we should not automate it
    // QA environment:
    // CAPTCHA → disabled / test token / mock verification
    // Production:
    // CAPTCHA → real verification
    // In testing environment you won't see capche's

    // 5. page.getByPlaceholder(); to locate input box by placeholder
    // await page.getByPlaceholder("Enter Name").fill("Admin");
    // await page.getByPlaceholder("Enter EMail").fill("example@gmail.com");
    // await page.waitForTimeout(3000);

    // 6. page.getByTitle(); to locate by it's title attribute
    // await page.getByTitle("");

    // 7. page.getByTestId(); to locate element based on data-testid attribute
    // await page.getByTestId("");

    // If developer changes the data-testId -> data-pw
    // Then you have to make changes in the playwright.config.ts file in the 
    // use{testIdAttribute: 'data-pw'}
});