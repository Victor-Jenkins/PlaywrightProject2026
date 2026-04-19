import { test, expect } from '@playwright/test';

test('API MOCK - visible 500 response', async ({ page }) => {

  let mockTriggered = false;

  // 🔥 Interceptamos API
  await page.route('**/api/meta/**', route => {
    mockTriggered = true;

    route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({
        error: 'Internal Server Error (mocked)',
      }),
    });
  });

  // 👀 Log visible en terminal cuando llega la response
  page.on('response', async (res) => {
    if (res.url().includes('/api/meta/')) {
      console.log(`🔥 MOCK RESPONSE: ${res.status()} -> ${res.url()}`);
    }
  });

  await page.goto('https://www.nintendo.com/');

  // ✅ prueba 1: el mock se ejecutó
  expect(mockTriggered).toBeTruthy();

  // ✅ prueba 2: la web sigue viva (fallback)
  await expect(page.locator('body')).toBeVisible();
});
