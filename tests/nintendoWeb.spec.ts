import { test, expect } from '@playwright/test';

test('Flujo completo', async ({ page }) => {

  await page.goto('https://www.nintendo.com/');

  const acceptCookies = page.locator('.accept-btn-container button');
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }

  await expect(page.locator('body')).toContainText('Nintendo');

  const [loginPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator('.pla-btn--plain plo-header__nav-button').click(),
  ]);

  await loginPage.waitForLoadState();

  await loginPage.getByRole('link', { name: /create a Nintendo account/i }).click();






});