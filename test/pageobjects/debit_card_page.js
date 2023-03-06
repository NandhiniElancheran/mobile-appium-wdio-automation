const debitCardSelectors = {
    nextBtn: driver.isAndroid ? "//android.widget.TextView[@text='Send']" : '~test:id/NextBtn',
   };
class DebitCardPage {
    
    async clickNextButton() {
        await $(debitCardSelectors.nextBtn).click();
    }
   
}

module.exports = new DebitCardPage();