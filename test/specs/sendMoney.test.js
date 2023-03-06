const LoginPage = require('../pageobjects/login.page.js')
const WelcomePage = require('../pageobjects/welcome.page.js')
const PasscodePage = require('../pageobjects/passcode.page.js')
const PersonalUserAccountsPage = require('../pageobjects/personal_user_accounts.page.js')
const SendMoneyToPage = require('../pageobjects/send_money_to.page.js')
const SendToPage = require('../pageobjects/send_to_page.js')
const DebitCardPage = require('../pageobjects/debit_card_page.js')
const TransactionConfirmedPage = require ('../pageobjects/transaction_confirmed_page.js')



const data = require('../testdata/addMoney.json')

describe('Feature - Add money - Debit card Checkout Provider', () => {
    it(`Verify user's Account Top Up using Checkout provider Debit Card`, async () => {
    await WelcomePage.navigateToLoginPage();
    await LoginPage.login(data?.mobileNumber, data?.entityUserCountry);
   // await LoginPage.getOtp();
    await PasscodePage.enterPasscode();
    
      await PersonalUserAccountsPage.navigateToSendPage();
      await SendMoneyToPage.clickPyyplTransfer();
      await SendToPage.enterPhoneNumber('555500113');
      await SendToPage.clickContinueButton();
      await SendToPage.enterAmount('20');
      await SendToPage.clickNextButton();
      await DebitCardPage.clickNextButton();
      await TransactionConfirmedPage.verifyStatusConfirmed();
      await TransactionConfirmedPage.clickBackHomeButton();
      await PersonalUserAccountsPage.clickProfileImg();
      await PersonalUserAccountsPage.logout();
    })
})