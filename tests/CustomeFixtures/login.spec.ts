import { test as base, Page } from "@playwright/test";

type LoginFixture = {
  loggedInPage: Page;
};

export const test = base.extend<LoginFixture>({
  loggedInPage: async ({ page }, use) => {
    await page.goto("https://demoblaze.com/index.html");
    await page.getByRole("link", { name: "Log in" }).click();
    await page.locator("#loginusername").fill("demo");
    await page.locator("#loginpassword").fill("demo");
    await page.getByRole("button", { name: "Log in" }).click();
    await use(page);

    await page.click("#logout2");
  }
});

export {expect} from '@playwright/test';