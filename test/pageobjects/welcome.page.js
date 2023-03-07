const {driver, $, $$, expect } = require ('@wdio/globals');
const {formattedSelector} = require('../helper/FormatSelectors.js')

const welcomePageSelectors = {
        loginBtn: driver.isAndroid ? "//android.widget.TextView[@text='Log in']" :'~test:id/LoginBtn',
        createAccountBtn: 'test:id/CreateAccountBtn'    
};

class WelcomePage {

    async navigateToLoginPage() {
        await driver.pause(3000);
     //   const elem = await $(welcomePageSelectors.loginBtn); 
      //  await expect(elem).toHaveText('Log in');
      // await $('id:test:id/LoginButton').click();
     // await elem.scrollIntoView();
      
     await $((welcomePageSelectors.loginBtn)).click();

     
    /*  await expect(await $(formattedSelector(welcomePageSelectors.loginBtn))).toBeDisplayed();
        await expect(await $(formattedSelector(welcomePageSelectors.createAccountBtn))).toBeDisplayed();
        await $(formattedSelector(welcomePageSelectors.loginBtn)).click();    
    */
    }
}

module.exports = new WelcomePage();