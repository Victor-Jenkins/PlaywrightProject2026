const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.google.com');

  // Espera a que aparezca el botón de aceptar cookies y haz click
  const acceptButton = await page.$('button:has-text("Aceptar todo")'); // selector en español
  if (acceptButton) {
    await acceptButton.click();
    console.log('Botón de cookies aceptado');
  } else {
    console.log('No apareció botón de cookies');
  }


  //Seleccionar campo de busqueda y enviar un texto
    await page.fill('[jsname="yZiJbe"]', 'Documentacion de Playwright');
    await page.press('[jsname="yZiJbe"]', 'Enter');
  
  

  await page.waitForTimeout(3000); // opcional, para ver la página

  await browser.close();
})();