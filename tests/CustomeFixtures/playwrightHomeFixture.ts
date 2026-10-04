import {test as base, expect, Page} from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.resolve(process.cwd(),'.env')});

type LoginFixture = {
    loggedInPage: Page;
    homePage: Page;
}


export const playwrightLoginTest = base.extend<LoginFixture>({
    loggedInPage: async({page}, use) => {
        const baseUrl = process.env.BASE_URL_WEB;
        if (baseUrl === undefined) {
            throw new Error("BASE_URL_WEB environment variable is required");
        }
        await page.goto(baseUrl);
        use(page);
    },
    
    homePage: async({page}, use) => {
        const baseUrl = process.env.BASE_URL_WEB;
        if (baseUrl === undefined) {
            throw new Error("BASE_URL_WEB environment variable is required");
        }
        await page.goto(baseUrl);
        use(page);
    }
});

export {expect} from "@playwright/test";