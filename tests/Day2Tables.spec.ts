import {test, expect, Locator} from "@playwright/test";

test("Static Table Test",async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const tableBody: Locator = page.locator("table[name='BookTable'] tbody");
    
    // Sub Locator => (Locator => Locator)
    // Rows
    const tableRow: Locator = tableBody.locator("tr");
    await expect(tableRow).toHaveCount(7);

    // Header
    const tableHeaded: Locator = tableRow.locator("th");
    await expect(tableHeaded).toHaveCount(4);

    // Read data from 2 row
    // const tableRow2: Locator = tableRow.nth(3).locator("td");
    // console.log(await tableRow2.count());
    // for(let i = 0 ; i < await tableRow2.count() ; i++) {
    //     const td: Locator = tableRow2.nth(i);
    //     console.log(await td.innerText());
    // }

    // Read All Data
    let input: string[][] = [];
    for(let i = 1 ; i < await tableRow.count() ; i++) {
        const Coloumn: Locator = tableRow.nth(i).locator("td");
        let rowArr: string[] = [];
        for(let j = 0 ; j < await Coloumn.count() ; j++) {
            rowArr.push(await Coloumn.nth(j).innerText());
        }
        input.push(rowArr);
    }
    console.log(input);
});

test("Dynamic Table Test", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const tBody: Locator = page.locator("#taskTable tbody");

    const tRow: Locator = tBody.locator("tr");
    await expect(tRow).toHaveCount(4);

    let outputArr: string[][] = [];
    for(let i = 0 ; i < await tRow.count() ; i++) {
        const tColoumns: Locator = tRow.nth(i).locator("td");
        let coloumn: string[] = [];
        for(let j = 0 ; j < await tColoumns.count() ; j++) {
            // console.log(tColoumns.nth(j).innerText());
            coloumn.push(await tColoumns.nth(j).innerText());
        }
        outputArr.push(coloumn);
    }
    console.log(outputArr);
});