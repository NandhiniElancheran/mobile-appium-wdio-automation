const {driver, $, $$, expect } = require ('@wdio/globals');
const {formattedSelector} = require('../helper/FormatSelectors.js')

const welcomePageSelectors = {
        loginBtn: 'test:id/LoginBtn',
        createAccountBtn: 'test:id/CreateAccountBtn'    
};

class WelcomePage {

    async navigateToLoginPage() {
        await driver.pause(3000);
        await expect(await $(formattedSelector(welcomePageSelectors.loginBtn))).toBeDisplayed();
       // await expect(await $(formattedSelector(welcomePageSelectors.loginBtn))).toHaveText('Log in');

        await expect(await $(formattedSelector(welcomePageSelectors.createAccountBtn))).toBeDisplayed();
        await $(formattedSelector(welcomePageSelectors.loginBtn)).click();    
   
    }
}

module.exports = new WelcomePage();