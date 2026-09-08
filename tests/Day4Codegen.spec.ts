import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/');
  await page.getByRole('link', { name: ' My Account' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('demo@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('demo123');
  await page.getByRole('button', { name: 'Login' }).click();
  
  await expect(page.getByRole('link', { name: 'Qafox.com' })).toBeVisible();
});