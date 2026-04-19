import { test, expect } from '@playwright/test';

test('Test 1 - navegación lenta', async ({ page }) => {
  await page.goto('https://example.com');
  await page.waitForTimeout(3000);
  await expect(page).toHaveTitle(/Example/);
});

test('Test 2 - espera simulada', async ({ page }) => {
  await page.goto('https://example.com');
  await page.waitForTimeout(3000);
  await expect(page.locator('h1')).toBeVisible();
});

test('Test 3 - otro flujo', async ({ page }) => {
  await page.goto('https://example.com');
  await page.waitForTimeout(3000);
  await expect(page).toHaveURL(/example/);
});

test('Test 4 - validación básica', async ({ page }) => {
  await page.goto('https://example.com');
  await page.waitForTimeout(3000);
  await expect(page.locator('body')).toContainText('Example');
});