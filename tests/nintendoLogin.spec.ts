import { test, expect } from '@playwright/test';

test('COMPLETE REGISTTRATION ON NINTENDO', async ({ page }) => {


await page.goto('https://accounts.nintendo.com/authorize_age_gate', {
  waitUntil: 'domcontentloaded'
});


const option = page.locator('#authorize-age-gate_pc_a_1');

await expect(option).toBeVisible();
await expect(option).toBeEnabled();

await option.click();

// 4. Nickname

  const nickname = page.getByRole('textbox', { name: /nickname/i });
  await expect(nickname).toBeVisible();
  await nickname.fill('testuser123');

  // 5. Email
  
  await page.locator('#email').fill('testuser@example.com');

  // 6. Password
 await page.locator('#register-form_pc_input_1').fill('StrongPassword123');
 
const password = page.locator('#register-form_pc_input_2');

await expect(password).toBeVisible();
await password.scrollIntoViewIfNeeded();
await password.fill('StrongPassword123');
 //------------------------------
   //  Date of birth (if present)

await page.selectOption('#birth-year-field', '2024');
await page.selectOption('#birth-month-field', '2');
await page.selectOption('#birth-day-field', '24');

await page.selectOption('#register-form_pc_select_0', 'male');

const check = page.locator('.c-formGroup.c-formGroup-checkbox');

 await page.locator('.icon.icon-check > path').first().click();
  await page.locator('div:nth-child(2) > .c-formGroup_label > .c-checkbox').click();
  
await page.waitForTimeout(5000);





});