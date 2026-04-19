 
 
 import { test, expect } from '@playwright/test';
 
 test('Flujo completo: login + búsqueda + formulario', async ({ page }) => {
 
 
 
 // 🔹 1. LOGIN (web de pruebas)
  
 
 
 
 await page.goto('https://practicetestautomation.com/practice-test-login/');
  
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');

  await expect(page.locator('h1')).toHaveText('Logged In Successfully');

  // 🔹 2. NAVEGAR A OTRA WEB (búsqueda tipo Mario)
  


await page.goto('https://www.google.com');

// aceptar cookies si aparecen
const accept = page.getByRole('button', { name: /accept|aceptar/i });

if (await accept.isVisible()) {
  await accept.click();
}


  await page.fill('textarea[name="q"]', 'Super Mario Nintendo');
  await page.keyboard.press('Enter');

  await expect(page.locator('body')).toContainText('Mario');


  // 🔹 3. FORMULARIO (otra web de pruebas)
  await page.goto('https://demoqa.com/text-box');

  await page.fill('#userName', 'Mario Bros');
  await page.fill('#userEmail', 'mario@nintendo.com');
  await page.fill('#currentAddress', 'Mushroom Kingdom');
  await page.fill('#permanentAddress', 'Castle Peach');

  await page.click('#submit');

  await expect(page.locator('#output')).toContainText('Mario Bros');
  
 });