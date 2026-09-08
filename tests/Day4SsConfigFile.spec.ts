import { test, expect } from '@playwright/test';

test('Screenshot and Recording', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('demo');
  await page.locator('#loginpassword').fill('demo');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator("#logout2")).toBeVisible();
});