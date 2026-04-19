const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');
  const iframe = await page.frame({name :'#belowtopnav'});
  if ('iframe'){
    await iframe.click('#ga-nav subtopnav_firstitem');
    
    console.log ('Se hizo click en HTML');

  };

  

  

  await page.waitForTimeout(3000); // opcional, para ver la página

  await browser.close();
})();