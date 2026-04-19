import { test, expect } from '@playwright/test';
//Playwright te permite organizar los tests por suites haciendolo mas escalable y permitiendo lanzar baterias de pruebas conjuntas a la vez

test.describe('Suite avanzada', () => {

  test.beforeAll(async () => {
    console.log('🚀 Iniciando suite');
  });

  test.afterAll(async () => {
    console.log('🧹 Finalizando suite');
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Test 1', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
  });

  test('Test 2', async ({ page }) => {
    await expect(page.locator('p')).toContainText('illustrative examples');
  });

});