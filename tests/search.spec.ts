import { test } from '@playwright/test';
import { LinkPage } from '../Encapsulados/PageObjectModel'; // ajusta ruta si hace falta

test('Buscar en Wiki y verificar resultados', async ({ page }) => {
  const linkPage = new LinkPage(page);

  await linkPage.navigate();
  await linkPage.search('Playwright');
  await linkPage.verifyResultsContain('Playwright');
});