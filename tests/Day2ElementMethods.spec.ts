import {test, expect, Locator} from "@playwright/test";

test("Different Element Interaction Methods : ",async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");

    const productTitles: Locator = page.locator(".product-title>a");

    // for(let i = 0 ; i < await productTitles.count() ; i++) {
    //     // innerText()
    //     // const name: string = await productTitles.nth(i).innerText();
    //     // console.log(name);
    //     // textContent()
    //     const name: string | null = await productTitles.nth(i).textContent();
    //     console.log(name);
    // }

    // const titleNames: string[] = await productTitles.allTextContents();
    // const titleNames: string[] = await productTitles.allInnerTexts();

    const titles: Locator[] = await productTitles.all();
    for(let i = 0 ; i < titles.length ; i++) {
        console.log("Options : ", await titles[i].innerText());
    }
});