const { setTimeout } = require('timers/promises');
const { driver, $, $$, expect } = require ('@wdio/globals');
const {formattedSelector} = require('../helper/FormatSelectors.js')

//const { waitForEnabled } = require('webdriverio/build/commands/element');

const topUpPageSelectors = {
    debitCardTxt: 'test:id/DebitCardBtn',
    amountTxt: 'test:id/AmountInput',
    cardNumberTxt: 'test:id/CardNumberInput',
    cardExpiryDate: 'test:id/CardExpiryInput',
    cardCvv: 'test:id/CardCVVInput',
    topUpBtn: 'test:id/TopUpBtn',
    bottomSheetCloseBtn: 'test:id/CloseBottomSheetBtn',
    transactionCompleteTitle: driver.isAndroid ? "//android.widget.TextView[@text='Transaction completed']" : '//XCUIElementTypeStaticText[@name="Transaction completed"]',
    closeTransactioneCompleteBtn: 'test:id/CloseBtn',
    statusTxt: driver.isAndroid ? "//android.widget.TextView[@text='Confirmed']" : '~Confirmed',
    yourLoadOf: driver.isAndroid ? "//android.widget.TextView[@text='Confirmed']" : '//XCUIElementTypeStaticText[@name="Your load of"]',
    webViewContent: "//android.webkit.WebView//android.view.View[3]",
    stripeCardNumberTxt: '//android.widget.LinearLayout[@content-desc="Card number"]/android.widget.FrameLayout/android.widget.EditText',
    stripeDateExpiryTxt: '//android.widget.LinearLayout[@content-desc="Expiration date"]/android.widget.FrameLayout/android.widget.EditText',
    stripeCvv: '//android.widget.LinearLayout[@content-desc="CVC"]/android.widget.FrameLayout/android.widget.EditText',
};
const CONTEXT_REF = {
    NATIVE: 'native_app',
    WEBVIEW: 'webview_app',
};
const DOCUMENT_READY_STATE = {
    COMPLETE: 'complete',
    INTERACTIVE: 'interactive',
    LOADING: 'loading',
};
class TopUpPage {

    async selectDebit() {
        await driver.pause(5000);
        await $(formattedSelector(topUpPageSelectors.debitCardTxt)).click();
    }
    async enterCheckoutDebitCardDetails(amount, cardNumber, expiryDate, cvv){
        await $(formattedSelector(topUpPageSelectors.amountTxt)).setValue(amount);
        await $(formattedSelector(topUpPageSelectors.cardNumberTxt)).clearValue();
        driver.pause(5000);
        await $(formattedSelector(topUpPageSelectors.cardNumberTxt)).setValue(cardNumber);
        await $(formattedSelector(topUpPageSelectors.cardExpiryDate)).setValue(expiryDate);
        await $(formattedSelector(topUpPageSelectors.cardCvv)).setValue(cvv);
        //await $(topUpPageSelectors.topUpBtn).waitForDisplayed({ timeout: 3000 });
        if(!driver.isAndroid){
            await $('//XCUIElementTypeButton[@name="Done"]').click();
        }
        await $(formattedSelector(topUpPageSelectors.topUpBtn)).click();  
        await driver.pause(50000);
        new Promise(resolve => {
            setTimeout(resolve, 90000);
          });
    }
    
    async enterStripeDebitCardDetails(amount, cardNumber, expiryDate, cvv){
        await $(formattedSelector(topUpPageSelectors.amountTxt)).setValue(amount);
        await $(topUpPageSelectors.stripeCardNumberTxt).setValue(cardNumber);
        await $(topUpPageSelectors.stripeDateExpiryTxt).setValue(expiryDate);
        await $(topUpPageSelectors.stripeCvv).setValue(cvv);
        let elem = $(formattedSelector(topUpPageSelectors.topUpBtn));
        await elem.waitForDisplayed({ timeout: 3000 });
        await $(formattedSelector(topUpPageSelectors.topUpBtn)).click();
        await new Promise(r => setTimeout(r, 10000));

    }

    async verifyTopUpDetails() {
         /*  await driver.pause(5000);
        //   await new Promise(r => setTimeout(r, 60000));
         const el = await $(topUpPageSelectors.yourLoadOf);
         driver.waitUntil(() => {
            return $(topUpPageSelectors.yourLoadOf).getText() === 'Your load of';
          }, {
            timeout: 5000,
            timeoutMsg: 'Expected text to be different after 5s'
          });
          
         // await el.waitForDisplayed({ timeout: 50000 }); 
          await expect(await $(topUpPageSelectors.yourLoadOf)).toHaveText('Your load of');
 */
          const elm = await $(formattedSelector( topUpPageSelectors.bottomSheetCloseBtn));
          await elm.waitForExist({ timeout: 50000 });
          await $(formattedSelector(topUpPageSelectors.bottomSheetCloseBtn)).click();

    }
    async verifyTransactionDetails() { 
        const elem = await $(topUpPageSelectors.transactionCompleteTitle);
        await elem.waitForDisplayed({ timeout: 10000 });
        await $(formattedSelector(topUpPageSelectors.closeTransactioneCompleteBtn)).click();
        //    await $(topUpPageSelectors.transactionCompleteTitle).toHaveText('Transaction completed');
        //    await $(topUpPageSelectors.statusTxt).toHaveText('Confirmed');
    }

    async navigateToTopUpOptionsPage(){
        await new Promise(r => setTimeout(r, 5000));
        driver.back();
        
    }

}

module.exports = new TopUpPage();