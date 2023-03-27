const { driver, $, $$, expect } = require('@wdio/globals');

const LoginPage = require('../pageobjects/login.page.js')
const WelcomePage = require('../pageobjects/welcome.page.js')
const PasscodePage = require('../pageobjects/passcode.page.js')
const PersonalUserAccountsPage = require('../pageobjects/personal_user_accounts.page.js')
const TopUpPage = require('../pageobjects/top_up.page.js')
const data = require('../testdata/addMoney.json')
const myCustomOption= require('/Users/nandhinielancheran/pyypl-mobile-appiumautomation/wdio.android.config.js')
const allureLog = require('@wdio/allure-reporter').default;


describe('Feature - Add money - Debit card Checkout Provider', () => {
 /*  before(async function () {
   // const myCustomOptionValue = driver.config.myCustomOption;
  //  if (myCustomOptionValue) {
      allureLog.addStep(`Navigate to Login from Welcome screen`);
      await WelcomePage.navigateToLoginPage();
      allureLog.addStep(`Select Country: ${data?.entityUserCountry} from bottom sheet and enter Mobile number: ${data?.mobileNumber}`);
      await LoginPage.login(data?.mobileNumber, data?.entityUserCountry);
 //   }
   // await LoginPage.getOtp();
    allureLog.addStep(`Enter Passcode`);
    await PasscodePage.enterPasscode();
  }); 
 
  after(async function () {
    allureLog.addStep(`Click on Profile image icon in home screen`);
    await PersonalUserAccountsPage.clickProfileImg();
    allureLog.addStep(`Logout from the app`);
    await PersonalUserAccountsPage.logout();
  });
 */

  it(`Verify user's Account Top Up using Checkout provider Debit Card`, async () => {
    allureLog.addStep(`Navigate to Login from Welcome screen`);
    await WelcomePage.navigateToLoginPage();
    /* allureLog.addStep(`Select Country: ${data?.entityUserCountry} from bottom sheet and enter Mobile number: ${data?.mobileNumber}`);
    await LoginPage.login(data?.mobileNumber, data?.entityUserCountry);
    allureLog.addStep(`Enter Passcode`);
    await PasscodePage.enterPasscode(data?.passcode);
    allureLog.addStep(`Select Top Up option in the carousel from Home screen`);
    await PersonalUserAccountsPage.navigateToTopUpPage();
    allureLog.addStep(`Select Debit card option in the Top Up menu options screen `);
    await TopUpPage.selectDebit();
    allureLog.addStep(`Enter Debit card details and click Top Up button`);
    await TopUpPage.enterCheckoutDebitCardDetails(data?.amount, data?.checkoutDebitCard, data?.expiryDate, data?.cvv);
    allureLog.addStep(`Validate the Bottom Sheet details and close the sheet`);
    await TopUpPage.verifyTopUpDetails();
    allureLog.addStep(`Validate the Transaction completed`);
    await TopUpPage.verifyTransactionDetails();
    if (driver.isAndroid) {
      allureLog.addStep(`Navigate back to home screen`);
      await TopUpPage.navigateToTopUpOptionsPage();
    }
    allureLog.addStep(`Click on Profile image icon in home screen`);
    await PersonalUserAccountsPage.clickProfileImg();
    allureLog.addStep(`Logout from the app`);
    await PersonalUserAccountsPage.logout(); */
    
  })
})



