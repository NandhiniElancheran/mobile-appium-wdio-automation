const allureLog = require('@wdio/allure-reporter').default;
const LoginPage = require('../pageobjects/login.page.js')
const WelcomePage = require('../pageobjects/welcome.page.js')
const PasscodePage = require('../pageobjects/passcode.page.js')
const PersonalUserAccountsPage = require('../pageobjects/personal_user_accounts.page.js')
const SendMoneyToPage = require('../pageobjects/send_money_to.page.js')
const SendToPage = require('../pageobjects/send_to.page.js')
const CheckoutPage = require('../pageobjects/checkout.page.js')
const TransactionConfirmedPage = require('../pageobjects/transaction_confirmed.page.js')
const data = require('../testdata/addMoney.json')

/* 1 - AED to AED
2 - USD to USD (India)
3 - USD to AED (India - UAE)
4 - Kenya to Kenya  -- yet to do 
5 - Kenya to UAE 
6 - UAE to Kenya

UAE - UAE
UAE - KENYA
KENYA - KENYA
KENYA - UAE
USD ( INDIA ) - UAE
INDIA - INDIA */

const uaeData = data["UAE"]
const intlData = data["INTL"]
const kenData = data["KENYA"]
const dataSet = [
  { countryCode: data.UAE, country: uaeData.country, mobileNumber: uaeData.mobileNumber, passcode: uaeData.passcode, receiverPhoneNumber: uaeData.receiverPhoneNumber, receiverCountry: uaeData.receiverCountry, amount: uaeData.sendAmount},
  { countryCode: data.KENYA, country: kenData.country, mobileNumber: kenData.mobileNumber, passcode: kenData.passcode, receiverPhoneNumber: kenData.receiverPhoneNumber, receiverCountry: kenData.receiverCountry, amount: kenData.sendAmount},
  { countryCode: data.INTL, country: intlData.country, mobileNumber: intlData.mobileNumber, passcode: intlData.passcode, receiverPhoneNumber: intlData.receiverPhoneNumber, receiverCountry: intlData.receiverCountry, amount: intlData.sendAmount },
  { countryCode: data.INTL, country: uaeData.country, mobileNumber: uaeData.mobileNumber, passcode: uaeData.passcode, receiverPhoneNumber: uaeData.forexPhoneNumber, receiverCountry: uaeData.forexCountry, amount: uaeData.sendAmount},
  { countryCode: data.UAE, country: uaeData.country, mobileNumber: uaeData.mobileNumber, passcode: uaeData.passcode, receiverPhoneNumber: kenData.receiverPhoneNumber, receiverCountry: kenData.receiverCountry, amount: uaeData.sendAmount},
];

  dataSet.forEach((dataSet) => {
    describe(`Feature - Send money - Pyypl to Pyypl Transfer from "${dataSet?.country}" to "${dataSet?.receiverCountry}"`, () => {
      allureLog.addFeature('Feature - Send money - Pyypl to Pyypl Transfer')
      before (async () =>{
        allureLog.addStep(`Launch the app`);
        driver.launchApp();
      });
      
      it(`Login to app`, async () => {
        allureLog.addStep(`Navigate to Login page`);
        await WelcomePage.navigateToLoginPage();
        allureLog.addStep(`Select the ${dataSet?.country} and enter the phone number ${dataSet?.mobileNumber}`);
        await LoginPage.login(dataSet?.mobileNumber, dataSet?.country);
        allureLog.addStep(`Enter the user passcode of ${dataSet?.passcode}`);
        await PasscodePage.enterPasscode(dataSet?.passcode);
      });
      it(`Verify Pyypl to Pyypl Transfer`, async () => {
        allureLog.addStep(`Select Send Money button in Home page and Navigate to Send page`);
        await PersonalUserAccountsPage.navigateToSendPage();
        allureLog.addStep(`Select Pyypl Transfer Options in Send To page `);
        await SendMoneyToPage.clickPyyplTransfer();
        allureLog.addStep(`Select the receiver country "${dataSet?.receiverCountry}" and enter the phone number of "${dataSet?.receiverPhoneNumber}"`);
        await SendToPage.enterPhoneNumber(dataSet?.receiverPhoneNumber, dataSet?.receiverCountry);
        allureLog.addStep(`Click on Continue button`);
        await SendToPage.clickContinueButton();
        allureLog.addStep(`Enter the transfer amount of ${dataSet?.amount} and navigate to next page`);
        await SendToPage.enterAmount(dataSet?.amount,dataSet?.countryCode);
        allureLog.addStep(`Click on Next button `);
        await SendToPage.clickNextButton();
        allureLog.addStep(`Completes the Transaction by clicking on Next button`);
        await CheckoutPage.clickNextButton();
        allureLog.addStep(`Verify the Confirmed status in Transaction confirmation page`);
        await TransactionConfirmedPage.verifyTransactionStatus(dataSet?.country,dataSet?.receiverCountry);
        await TransactionConfirmedPage.clickBackHomeButton();
      });

      it(`Logout from app`, async () => {
        allureLog.addStep(`Logout from app`);
        await PersonalUserAccountsPage.clickProfileImg();
        await PersonalUserAccountsPage.logout();
      });

      after (async () =>{
        driver.closeApp();
      });

    });
  });
