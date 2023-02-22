// import WebView from "../helper/WebView";
// import { CONTEXT_REF } from "../helper/WebView";
//const WebView = require('../helper/WebView.js');
//const CONTEXT_REF = require('../helper/WebView.js');

const topUpPageSelectors = {
    debitCardTxt: "//android.widget.TextView[@text='Debit Card']",
    amountTxt: "//android.widget.EditText[@text='20']",
    cardNumberTxt: "//android.widget.EditText[@text='Card number']",
    cardExpiryDate: "//android.widget.EditText[@text='MM/YY']",
    cardCvv: "//android.widget.EditText[@text='CVV']",
    topUpBtn: "//android.widget.TextView[@text='Top up']",
    bottomSheet: '//android.widget.SeekBar[2]',//'//android.widget.SeekBar[@content-desc="Bottom Sheet handle, Drag up or down to extend or minimize the Bottom Sheet"]/android.view.ViewGroup',
    transactionCompleteTitle: "//android.widget.TextView[@text='Transaction completed']",
    closeTransactioneCompleteBtn: "//android.widget.TextView[@text='Close']",
    statusTxt: "//android.widget.TextView[@text='Confirmed']",
    //closeBtn: "addMoneyFinishedButton",
    webViewContent: "//android.webkit.WebView//android.view.View[3]"
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

    async selectDebit(amount, cardNumber, expiryDate, cvv) {
        await $(topUpPageSelectors.debitCardTxt).click();
        await $(topUpPageSelectors.amountTxt).setValue(amount);
        await $(topUpPageSelectors.cardNumberTxt).setValue(cardNumber);
        await $(topUpPageSelectors.cardExpiryDate).setValue(expiryDate);
        await $(topUpPageSelectors.cardCvv).setValue(cvv);
        await $(topUpPageSelectors.topUpBtn).click();
    }
    async verifyTopUpDetails() {
        const el = await $(topUpPageSelectors.bottomSheet);
        await el.waitForDisplayed({ timeout: 10000 });
        browser.back();
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
        driver.pause(3000);
        const elem = await $(topUpPageSelectors.transactionCompleteTitle);
        await expect(elem).toBeDisplayed();
        await $(topUpPageSelectors.closeTransactioneCompleteBtn).click();
        //    await $(topUpPageSelectors.transactionCompleteTitle).toHaveText('Transaction completed');
        //    await $(topUpPageSelectors.statusTxt).toHaveText('Confirmed');
    }

    async navigateToTopUpOptionsPage(){
        browser.back();
    }

}

module.exports = new TopUpPage();