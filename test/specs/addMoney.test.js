const LoginPage = require('../pageobjects/login.page.js')
const WelcomePage = require('../pageobjects/welcome.page.js')
const PasscodePage = require('../pageobjects/passcode.page.js')
const PersonalUserAccountsPage = require('../pageobjects/personal_user_accounts.page.js')
const TopUpPage = require('../pageobjects/top_up.page.js')
const data = require('../testdata/addMoney.json')

describe('Feature - Add money ', () => {
    it(`Verify user's Account Top Up using Checkout provider Debit Card`, async () => {
    await WelcomePage.navigateToLoginPage();
    await LoginPage.login(data?.mobileNumber);
    await PasscodePage.enterPasscode();
    await PersonalUserAccountsPage.navigateToTopUpPage();
    await TopUpPage.selectDebit(data?.amount,data?.checkoutDebitCard,data?.expiryDate,data?.cvv);
    await TopUpPage.verifyTopUpDetails();
    await TopUpPage.verifyTransactionDetails();
    await TopUpPage.navigateToTopUpOptionsPage();
    await PersonalUserAccountsPage.logout();
    })
    
})


