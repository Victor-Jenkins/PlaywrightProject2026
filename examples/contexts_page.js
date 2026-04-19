// 1 iniciar navegador
// 2 abrir dos contextos
//   para google
//   para wikipedia
// 3 abrir una pagina en cada contexto
// 4 realizar operaciones baicas en ambas paginas

const {chromium} = require ('playwright');
(async () => {
    const browser = await chromium.launch ({headless: false});
    //context 1 Google
    const googleContext = await browser.newContext();
    const googlePage = await googleContext.newPage();
    await googlePage.goto('https://www.google.com');
    await googlePage.waitForTimeout (5000);
    console.log ('context 1 with google opened')
   
//context 1 Wikipedia
    const wikiContext = await browser.newContext();
    const wikiPage = await wikiContext.newPage();
    await wikiPage.goto('https://www.wikipedia.com');
    await wikiPage.waitForTimeout (5000);
    console.log ('context 1 with wiki opened')
    await browser.close();

})();
