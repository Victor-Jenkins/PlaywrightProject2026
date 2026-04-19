import{test,expect} from '@playwright/test';
import {LoginPage} from '../Encapsulados/patrones';

test ('Login de demoQA', async ({page})=> {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('usuario@gmail.com','contraseña');
    

});