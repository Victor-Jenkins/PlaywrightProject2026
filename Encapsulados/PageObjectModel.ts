
//Creamos metodos , asi si tenemos varias pruebas que hagan login en FB no repetimos codigo ,
//simplemente llamamos a esta funcion , haciendo el codigo escalable y sin duplicar
//(patterns) sirven para organizar tu código de tests de forma más limpia, reutilizable y mantenible.
//El más común (y útil) es el Page Object Model (POM).

import { Page, expect } from "@playwright/test";

export class LinkPage {
  private page: Page;
  private searchBox = 'input[name="search"]';
  private searchButton = '.svg-search-icon';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.wikipedia.com/');
  }

  async search(text: string) {
    await this.page.fill(this.searchBox, text);
    await this.page.click(this.searchButton);
  }

  async verifyResultsContain(text: string) {
    const results = this.page.locator('body');
    await expect(results).toContainText(text);
  }
 
}