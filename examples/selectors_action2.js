const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.wikipedia.org');


  //Seleccionar campo de busqueda y enviar un texto
 await page.fill('#searchInput', 'Playwright');
    await page.press('#searchInput', 'Enter');
   

  await page.waitForTimeout(3000); // opcional, para ver la página

  await browser.close();
})();