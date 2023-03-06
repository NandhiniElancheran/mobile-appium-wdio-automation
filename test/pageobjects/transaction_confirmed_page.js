const transactionConfirmedSelectors = {
    statusConfirmed: driver.isAndroid ? "//android.widget.TextView[@text='Top up']" : '(//XCUIElementTypeStaticText[@name="Confirmed"])[2]',
    backHomeBtn: driver.isAndroid ? "//android.widget.TextView[@text='Send']" : '~test:id/backHome',
   };
class TransactionConfirmedPage {
    
    async verifyStatusConfirmed() {
        const myElem = await $(transactionConfirmedSelectors.backHomeBtn)
        await myElem.waitForDisplayed()
        
        // you can also overwrite the default timeout if needed
        //await myElem.waitForDisplayed({ timeout: 50000 })

        //await $(transactionConfirmedSelectors.statusConfirmed).toHaveText('Confirmed');
    }
    async clickBackHomeButton() {
        await $(transactionConfirmedSelectors.backHomeBtn).click();
    }
}

module.exports = new TransactionConfirmedPage();