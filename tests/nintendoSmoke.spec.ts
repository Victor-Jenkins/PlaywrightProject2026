import { test, expect } from '@playwright/test';

test('@smoke Nintendo homepage is working', async ({ page }) => {

  // 1. Go to homepage
  await page.goto('https://www.nintendo.com/', {
    waitUntil: 'domcontentloaded'
  });

  // 2. Check title (basic sanity)
  await expect(page).toHaveTitle(/Nintendo/i);

  // 3. Check main body renders
  await expect(page.locator('body')).toBeVisible();

  // 4. Check navigation exists
  const nav = page.locator('nav');
  await expect(nav).toBeVisible();

  // 5. Check account button exists (important UI entry point)
  await expect(
    page.locator('.plo-header__nav-item--account button')
  ).toBeVisible();

  // 6. Check at least one image loads (basic asset sanity)
  const img = page.locator('img').first();
  await expect(img).toBeVisible();

});