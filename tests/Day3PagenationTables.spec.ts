import {test, expect, Locator} from "@playwright/test";

test("Pagenation Table", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const pageNationBtns: Locator[] = await page.locator("#pagination li").all();
    const tBody: Locator = page.locator("#productTable tbody");
    let next: number = 0;
    let output: string[][]= [];
    while(next != pageNationBtns.length) {
        // Click on Next page Button
        pageNationBtns[next].click();

        // Traverse Rows in the Table.
        const tRow: Locator = tBody.locator("tr");
        const count: number = await tRow.count();
        let done: boolean = false;
        for(let i = 0 ; i < count ; i++) {
            // const tData: string[] = await tRow.nth(i).locator("td").allTextContents();
            const tData: Locator[] = await tRow.nth(i).locator("td").all();
            if(await tData[1].innerText() == "Portable Charger") {
                await tData[3].locator("input").check();
                done = true;
                break;
            }
            // output.push(tData);
        }

        // Go to Next Page
        if(!done) {
            next++;
        } else {
            break;
        }
    }
    console.log(output);
    await page.waitForTimeout(4000);
});