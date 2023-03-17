const {formattedSelector} = require('../helper/FormatSelectors.js')

const transactionConfirmedSelectors = {
    statusConfirmed: driver.isAndroid ? "(//android.widget.TextView[@text='Confirmed'])[2]" : '(//XCUIElementTypeStaticText[@name="Confirmed"])[2]',
    statusPending: driver.isAndroid ? "(//android.widget.TextView[@text='Pending'])[2]" :'(//XCUIElementTypeStaticText[@name="Pending"])[2]',
    backHomeBtn: 'test:id/BackHomeBtn',
   };
class TransactionConfirmedPage {
    
    async verifyTransactionStatus(senderCountry,receiverCountry) {
        const myElem = await $(formattedSelector(transactionConfirmedSelectors.backHomeBtn))
        await myElem.waitForDisplayed();       
        if(senderCountry === receiverCountry){
            const elem = await $(transactionConfirmedSelectors.statusConfirmed);
            await elem.waitForDisplayed({timeout: 5000});
            await expect(elem).toHaveText('Confirmed');
        }else if(senderCountry !== receiverCountry){
            const elem = await $(transactionConfirmedSelectors.statusPending);
            await elem.waitForDisplayed({timeout: 5000});
            await expect(elem).toHaveText('Pending');
        }
    }
    async clickBackHomeButton() {
        await $(formattedSelector(transactionConfirmedSelectors.backHomeBtn)).click();
    }
}

module.exports = new TransactionConfirmedPage();