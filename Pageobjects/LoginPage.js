class LoginPage {
    constructor(page) {
        // locators of the page 
        this.page = page;
        this.password = page.locator('#password');
        this.username = page.locator('#user-name');
        this.signinbutton = page.locator('#login-button');
    }
    async gotourl() {
        await this.page.goto("https://www.saucedemo.com/");
    }
    async enterusername(usrname) {
        await this.username.fill(usrname);
    }


    async enterpassword(passwd) {
        await this.password.fill(passwd);
    }
    async clickbutton() {
        await this.signinbutton.click();
    }
}
module.exports = { LoginPage }
