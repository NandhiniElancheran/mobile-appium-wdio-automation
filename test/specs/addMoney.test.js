const LoginPage = require('../pageobjects/login.page.js')
const WelcomePage = require('../pageobjects/welcome.page.js')
const PasscodePage = require('../pageobjects/passcode.page.js')
const PersonalUserAccountsPage = require('../pageobjects/personal_user_accounts.page.js')
const TopUpPage = require('../pageobjects/top_up.page.js')
const data = require('../testdata/addMoney.json')

// describe('Feature - Add money - Debit card Checkout Provider', () => {
//     it(`Verify user's Account Top Up using Checkout provider Debit Card`, async () => {
//     await WelcomePage.navigateToLoginPage();
//     await LoginPage.login(data?.mobileNumber, data?.entityUserCountry);
//     await PasscodePage.enterPasscode();
//     // await PersonalUserAccountsPage.navigateToTopUpPage();
//     // await TopUpPage.selectDebit();
 //    await TopUpPage.enterCheckoutDebitCardDetails(data?.amount,data?.checkoutDebitCard,data?.expiryDate,data?.cvv);
//     // await TopUpPage.verifyTopUpDetails();
//     // await TopUpPage.verifyTransactionDetails();
//     // await TopUpPage.navigateToTopUpOptionsPage();
//     await PersonalUserAccountsPage.clickProfileImg();
//     await PersonalUserAccountsPage.logout();
//     })
    
// })

describe('Feature - Add money Debit card Stripe Provider', () => {
    it(`Verify user's Account Top Up using Stripe provider Debit Card`, async () => {
    await WelcomePage.navigateToLoginPage();
    await LoginPage.login(data?.intlUserMobileNumber, data?.intlUserCountry);
    await PasscodePage.enterPasscode();
    await PersonalUserAccountsPage.navigateToTopUpPage();
    await TopUpPage.selectDebit();
    await TopUpPage.enterStripeDebitCardDetails(data?.amount,data?.stripeDebitCard,data?.expiryDate,data?.cvv);
   // await TopUpPage.verifyTopUpDetails(); 
   // await TopUpPage.verifyTransactionDetails();
  //  await TopUpPage.navigateToTopUpOptionsPage();
  //  await PersonalUserAccountsPage.clickProfileImg();
 //   await PersonalUserAccountsPage.logout();
    })
    
})


