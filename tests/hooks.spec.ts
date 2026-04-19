import { test, expect } from '@playwright/test';

test.describe('Ejemplo de hooks en playwright', () => {

  test.beforeEach(async ({ page }) => {
    console.log('Configurando entorno antes de cada prueba');
    await page.goto('https://example.com');
  });

  test('Validar titulo de la pagina', async ({ page }) => {
    await expect(page).toHaveTitle('Example Domain');
  });

  test('Validar link de la pagina', async ({ page }) => {
    const link = page.locator('a');
    await expect(link).toHaveText('Learn more');
  });

  test.afterEach(async () => {
    console.log('Limpiando entorno después de cada prueba');
  });

});