const {driver, $, $$, expect } = require ('@wdio/globals');
const {formattedSelector} = require('../helper/FormatSelectors.js')

const welcomePageSelectors = {
    android : {
        loginBtn: ("//android.widget.TextView[@text='Log in']"),
      //  loginBtn: 'id:test:id/LoginButton',
        createAccountBtn: "//android.widget.TextView[@text='Create account']"
    },
    ios: {
        loginBtn: '~test:id/LoginBtn',
        createAccountBtn: '~test:id/CreateAccountBtn'
    }
    
    
};

class WelcomePage {

    async navigateToLoginPage() {
        await driver.pause(3000);
     //   const elem = await $(welcomePageSelectors.loginBtn); 
      //  await expect(elem).toHaveText('Log in');
      // await $('id:test:id/LoginButton').click();
     // await elem.scrollIntoView();
        await expect(await $(driver.isAndroid?welcomePageSelectors.android.loginBtn:welcomePageSelectors.ios.loginBtn)).toBeDisplayed();
        await expect(await $(driver.isAndroid?welcomePageSelectors.android.createAccountBtn:welcomePageSelectors.ios.createAccountBtn)).toBeDisplayed();
        await (await $(driver.isAndroid?welcomePageSelectors.android.loginBtn:welcomePageSelectors.ios.loginBtn)).click();
    }
}

module.exports = new WelcomePage();