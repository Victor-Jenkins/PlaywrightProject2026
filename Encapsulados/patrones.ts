import { Page } from "@playwright/test";
//Creamos un metodo para hacer login en FB, asi si tenemos varias pruebas que hagan login en FB no repetimos codigo ,
//simplemente llamamos a esta funcion , haciendo el codigo escalable y sin duplicar
//(patterns) sirven para organizar tu código de tests de forma más limpia, reutilizable y mantenible.
//El más común (y útil) es el Page Object Model (POM).

export class LoginPage{
    private page: Page;
    constructor (page: Page){
        this.page = page;
    }
    

  async navigate() {
    await this.page.goto('https://demoqa.com/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#userName', username);
    await this.page.fill('#password', password);
    await this.page.click('#login');
  }
  async isErrorVisible(): Promise<boolean>{
    return await this.page.locator('#error_box').isVisible();
  }
}