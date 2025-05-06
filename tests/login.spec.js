// login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/loginpage');


test('Login scenario', async ({ browser }) => {
    // create a new browser context
    const context = await browser.newContext();
    // create a new page 
    const page = await context.newPage();
    const lp = new LoginPage(page);
    
    
    // Launch url 
    await lp.gotourl();
    await lp.enterusername(dataset.username);
    await lp.enterpassword(dataset.password);

    await lp.clickbutton();

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
});
