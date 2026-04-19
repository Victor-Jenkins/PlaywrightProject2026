const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page2 = await context.newPage();

await page2.goto('https://www.facebook.com');
page2.setDefaultTimeout (5000);

await Promise.all([
    page2.waitForURL('https://www.facebook.com'),
    await page2.click('text = Rechazar cookies opcionales'),
]);
console.log ('estas en Facebook');
await page2.fill('text= Correo electrónico', 'Play'),
await page2.fill('text= Contraseña', 'Right'),
 await page2.keyboard.press('Enter');
await page2.waitForTimeout(9000); // opcional, para ver la página

  await browser.close();
})();