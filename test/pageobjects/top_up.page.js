// import WebView from "../helper/WebView";
// import { CONTEXT_REF } from "../helper/WebView";
//const WebView = require('../helper/WebView.js');
//const CONTEXT_REF = require('../helper/WebView.js');
const { setTimeout } = require('timers/promises');
//const { waitForEnabled } = require('webdriverio/build/commands/element');


const topUpPageSelectors = {
    debitCardTxt: driver.isAndroid ? "//android.widget.TextView[@text='Debit Card']" : '~test:id/DebitCardBtn',
    amountTxt: driver.isAndroid ? "(//android.widget.EditText)[1]" : '~test:id/AmountInput',
    cardNumberTxt: driver.isAndroid ? "//android.widget.EditText[@text='Card number']" : '~test:id/CardNumberInput',
    cardExpiryDate: driver.isAndroid ? "//android.widget.EditText[@text='MM/YY']" : '~test:id/CardExpiryInput',
    cardCvv: driver.isAndroid ? "//android.widget.EditText[@text='CVV']" : '~test:id/CardCVVInput',
    topUpBtn: driver.isAndroid ?  "//android.widget.TextView[@text='Top up']" : '~test:id/TopUpBtn',
    bottomSheet: driver.isAndroid ? '//android.widget.SeekBar[2]' : '~Bottom Sheet handle',
    transactionCompleteTitle: driver.isAndroid ? "//android.widget.TextView[@text='Transaction completed']" : '~Transaction completed',
    closeTransactioneCompleteBtn: driver.isAndroid ? "//android.widget.TextView[@text='Close']" : '~test:id/CloseBtn',
    statusTxt: driver.isAndroid ? "//android.widget.TextView[@text='Confirmed']" : '~Confirmed',
    //closeBtn: "addMoneyFinishedButton",
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
        await $(topUpPageSelectors.debitCardTxt).click();
    }
    async enterCheckoutDebitCardDetails(amount, cardNumber, expiryDate, cvv){
        await $(topUpPageSelectors.amountTxt).setValue(amount);
        await $(topUpPageSelectors.cardNumberTxt).setValue(cardNumber);
        await $(topUpPageSelectors.cardExpiryDate).setValue(expiryDate);
        await $(topUpPageSelectors.cardCvv).setValue(cvv);
      //  await $(topUpPageSelectors.cardCvv).send(cvv);
        //await $(topUpPageSelectors.topUpBtn).waitForDisplayed({ timeout: 3000 });
        if(!driver.isAndroid){
            await $('//XCUIElementTypeButton[@name="Done"]').click();
          //driver.hideKeyboard(tapOutside);
        }
        driver.pause(5000);
        await $(topUpPageSelectors.topUpBtn).click();
        
    }
    
    async enterStripeDebitCardDetails(amount, cardNumber, expiryDate, cvv){
        await $(topUpPageSelectors.amountTxt).setValue(amount);
        await $(topUpPageSelectors.stripeCardNumberTxt).setValue(cardNumber);
        await $(topUpPageSelectors.stripeDateExpiryTxt).setValue(expiryDate);
        await $(topUpPageSelectors.stripeCvv).setValue(cvv);
        let elem = $(topUpPageSelectors.topUpBtn)
        let isEnabled = elem.isEnabled();
        console.log(isEnabled);
      //  if(!isEnabled){
            await setTimeout (done,3000);
     //   }
        await $(topUpPageSelectors.topUpBtn).click();
        await setTimeout (done(),10000);
    }

    async verifyTopUpDetails() {
        //browser.pause(10000);
      //  await new Promise(r => setTimeout(r, 60000));
      //  await setTimeout (50000);
      //  const el = await $(topUpPageSelectors.bottomSheet);
       // await el.waitForDisplayed({ timeout: 50000 });
        //await setTimeout (3000);
        driver.back();
        // browser.action('pointer'. {
        //     parameters: { pointerType: 'mouse' } // "mouse" is default value, also possible: "pen" or "touch"
        // })
        // await browser.touchAction([
        //     { action: 'press', x: 500, y: 400 },
        //     { action: 'moveTo', x: 500, y: 1000 },
        //     'release'
        // ])
        // browser.swipeDown(await $(topUpPageSelectors.bottomSheet),400);
        //  this.switchToContext().waitForVisible()
        //    await this.switchToContext(CONTEXT_REF.WEBVIEW);
        //    await driver.waitUntil(async ()=>
        //         await (await $(topUpPageSelectors.webViewContent)).getText() === 'succeeded'
        //     );
        //     await this.switchToContext(CONTEXT_REF.NATIVE);
    }
    async verifyTransactionDetails() { 
       // driver.pause(10000);
       // await new Promise(r => setTimeout(r, 10000));
       // await setTimeout (10000);
        const elem = await $(topUpPageSelectors.transactionCompleteTitle);
       // await expect(elem).toBeDisplayed();
        await setTimeout (10000);
        await $(topUpPageSelectors.closeTransactioneCompleteBtn).click();
        //    await $(topUpPageSelectors.transactionCompleteTitle).toHaveText('Transaction completed');
        //    await $(topUpPageSelectors.statusTxt).toHaveText('Confirmed');
    }

    async navigateToTopUpOptionsPage(){
        await setTimeout (10000);
        browser.back();
    }

}

module.exports = new TopUpPage();