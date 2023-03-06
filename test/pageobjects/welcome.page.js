const {driver, $, $$, expect } = require ('@wdio/globals');
const {formattedSelector} = require('../helper/FormatSelectors.js')

const welcomePageSelectors = {
    // android : {
    //     loginBtn: ("//android.widget.TextView[@text='Log in']"),
    //   //  loginBtn: 'id:test:id/LoginButton',
    //     createAccountBtn: "//android.widget.TextView[@text='Create account']"
    // },
    // ios: {
        loginBtn: 'test:id/LoginBtn',
        createAccountBtn: 'test:id/CreateAccountBtn'
  //  }
    
    
};

class WelcomePage {

    async navigateToLoginPage() {
        await driver.pause(3000);
     //   const elem = await $(welcomePageSelectors.loginBtn); 
      //  await expect(elem).toHaveText('Log in');
      // await $('id:test:id/LoginButton').click();
     // await elem.scrollIntoView();
        await expect(await $(formattedSelector(welcomePageSelectors.loginBtn))).toBeDisplayed();
        await expect(await $(formattedSelector(welcomePageSelectors.createAccountBtn))).toBeDisplayed();
        await $(formattedSelector(welcomePageSelectors.loginBtn)).click();
    }
}

module.exports = new WelcomePage();