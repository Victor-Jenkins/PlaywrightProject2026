const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.google.com');
    console.log ('estas en Google');
   const page2 = await context.newPage();
    await page.waitForTimeout(3000); // opcional, para ver la página

await page2.goto('https://www.facebook.com');
console.log ('estas en Facebook');
   await page.waitForTimeout(3000); // opcional, para ver la página
   
console.log ('cambiamos de pestaña a google');
await page.bringToFront();
await page.fill('#APjFqb', 'Linux');
await page.keyboard.press('Enter');
console.log ('cambiamos de pestaña a Facebook');
await page2.bringToFront();



  await page.waitForTimeout(3000); // opcional, para ver la página

  await browser.close();
})();