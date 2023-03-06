// import WebView from "../helper/WebView";
// import { CONTEXT_REF } from "../helper/WebView";
//const WebView = require('../helper/WebView.js');
//const CONTEXT_REF = require('../helper/WebView.js');
const { setTimeout } = require('timers/promises');
const { driver, $, $$, expect } = require ('@wdio/globals');

//const { waitForEnabled } = require('webdriverio/build/commands/element');


const topUpPageSelectors = {
    debitCardTxt: driver.isAndroid ? "//android.widget.TextView[@text='Debit Card']" : '~test:id/DebitCardBtn',
    amountTxt: driver.isAndroid ? "(//android.widget.EditText)[1]" : '~test:id/AmountInput',
    cardNumberTxt: driver.isAndroid ? "//android.widget.EditText[@text='Card number']" : '~test:id/CardNumberInput',
    cardExpiryDate: driver.isAndroid ? "//android.widget.EditText[@text='MM/YY']" : '~test:id/CardExpiryInput',
    cardCvv: driver.isAndroid ? "//android.widget.EditText[@text='CVV']" : '~test:id/CardCVVInput',
    topUpBtn: driver.isAndroid ?  "//android.widget.TextView[@text='Top up']" : '~test:id/TopUpBtn',
    bottomSheet: driver.isAndroid ? '//android.widget.SeekBar[2]' : '~Bottom Sheet handle',
    transactionCompleteTitle: driver.isAndroid ? "//android.widget.TextView[@text='Transaction completed']" : '//XCUIElementTypeStaticText[@name="Transaction completed"]',
    closeTransactioneCompleteBtn: driver.isAndroid ? "//android.widget.TextView[@text='Close']" : '~test:id/CloseBtn',
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
        await $(topUpPageSelectors.debitCardTxt).click();
    }
    async enterCheckoutDebitCardDetails(amount, cardNumber, expiryDate, cvv){
        await $(topUpPageSelectors.amountTxt).setValue(amount);
        await $(topUpPageSelectors.cardNumberTxt).clearValue();
        driver.pause(5000);
        await $(topUpPageSelectors.cardNumberTxt).setValue(cardNumber);
        await $(topUpPageSelectors.cardExpiryDate).setValue(expiryDate);
        await $(topUpPageSelectors.cardCvv).setValue(cvv);
        //await $(topUpPageSelectors.topUpBtn).waitForDisplayed({ timeout: 3000 });
        if(!driver.isAndroid){
            await $('//XCUIElementTypeButton[@name="Done"]').click();
        }
        await $(topUpPageSelectors.topUpBtn).click();  
    }
    
    async enterStripeDebitCardDetails(amount, cardNumber, expiryDate, cvv){
        await $(topUpPageSelectors.amountTxt).setValue(amount);
        await $(topUpPageSelectors.stripeCardNumberTxt).setValue(cardNumber);
        await $(topUpPageSelectors.stripeDateExpiryTxt).setValue(expiryDate);
        await $(topUpPageSelectors.stripeCvv).setValue(cvv);
        let elem = $(topUpPageSelectors.topUpBtn);
        await elem.waitForDisplayed({ timeout: 3000 });
        await $(topUpPageSelectors.topUpBtn).click();
        await new Promise(r => setTimeout(r, 10000));
    }

    async verifyTopUpDetails() {
        driver.pause(10000);
          await new Promise(r => setTimeout(r, 60000));
          await setTimeout (10000);
       //   const el = await $('//XCUIElementTypeOther[@name="Bottom Sheet handle"]');
       //  await el.waitForDisplayed({ timeout: 10000 });

         var result = browser.execute('mobile: scroll', {direction: 'down'});
         //driver.execute('mobile: doubleTap', {element: element.value.ELEMENT});

         await browser.execute("mobile: scroll", {  strategy: '~Bottom Sheet handle', selector : locator})

        // await setTimeout (3000);
        // await driver.touchPerform([
        //     { action: 'press', x: 193, y: 118 },
        //     { action: 'moveTo', x: 170, y: 800 },
        //     'release'
        // ])

       // const myElem = await $(topUpPageSelectors.yourLoadOf)
       // await myElem.waitForDisplayed()

//         driver.touchAction().longPress(PointOption.point(210, 124))
// .moveTo(PointOption.point(210, 867))
// .release().perform();

//driver.execute('mobile: scroll', {direction: 'down'});

// driver.touchPerform([
//     { action: 'longPress', options: { x: 210, y: 124 }},
//     { action: 'wait', ms: 5000},
//     { action: 'moveTo', options: { x: 210, y: 867 }},
//     { action: 'release' },
//     { action: 'perform' }
// ]);

// driver.touchPerform([
//     { action: 'press', options: { x: 100, y: 250 }},
//     { action: 'wait', options: { ms: 100 }},
//     { action: 'moveTo', options: { x: 300, y: 100 }},
//     { action: 'release' }
//   ]);


// await browser.touchAction([
//     { action: 'tap', x: 20, y: 90 },
//     { action: "wait",  ms: 1000 },
//     'release'
//   ]);
  
        // await driver.touchPerform({
        //     action: 'tap',
        //     x: 20,
        //     y: 90
        // })

    //    // driver.touchDoubleClick(myElem);

    //     driver.touchAction([
    //         { action: 'press', options: { x: 210, y: 124 }},
    //         { action: 'wait', ms: 5000},
    //         { action: 'moveTo', options: { x: 210, y: 867 }},
    //         { action: 'release' }
    //       ]);
 
    //     driver.multiTouchPerform([
    //         { action: 'press', options: { x: 210, y: 124 }},
    //         { action: 'wait', ms: 5000},
    //         { action: 'moveTo', options: { x: 210, y: 867 }},
    //         { action: 'release' }
    //       ]);

     // await driver.touchAction({
        //     action: 'tap',
        //     x: 100,
        //     y: 40
        // })

        // await driver.touchAction({
        //     action: 'tap',
        //     x: 150,
        //     y: 40
        // })

        // await driver.touchAction({
        //     action: 'tap',
        //     x: 200,
        //     y: 40
        // })

        // await driver.touchAction({
        //     action: 'tap',
        //     x: 250,
        //     y: 40
        // })

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
        await new Promise(r => setTimeout(r, 10000));
        const elem = await $(topUpPageSelectors.transactionCompleteTitle);
        await elem.waitForDisplayed({ timeout: 10000 });

       // await expect(elem).toBeDisplayed();
        await setTimeout (10000);
        await $(topUpPageSelectors.closeTransactioneCompleteBtn).click();
        //    await $(topUpPageSelectors.transactionCompleteTitle).toHaveText('Transaction completed');
        //    await $(topUpPageSelectors.statusTxt).toHaveText('Confirmed');
    }

    async navigateToTopUpOptionsPage(){
        await setTimeout (10000);
        driver.back();
        
    }

}

module.exports = new TopUpPage();