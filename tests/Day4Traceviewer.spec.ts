import { test, expect } from '@playwright/test';

test('Screenshot and Recording', async ({ context, page }) => {
  //For this if you have already started the tracing through config file this line
  //will throw error So for that you have to put the trace: 'off' in playwright.config.ts file
  context.tracing.start({screenshots:true, snapshots:true});
  
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('demo');
  await page.locator('#loginpassword').fill('demo');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator("#logout2")).toBeVisible();

  context.tracing.stop({path: 'tracing.zip'});
});