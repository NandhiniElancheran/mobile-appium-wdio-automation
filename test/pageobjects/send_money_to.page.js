const sendMoneyToPageSelectors = {
    pyyplTransfer: driver.isAndroid ? "//android.widget.TextView[@text='Top up']" : '~test:id/PYYPL_TO_PYYPL',
    internationalTransfer: driver.isAndroid ? "//android.widget.TextView[@text='Send']" : '~test:id/INTERNATIONAL_TRANSFER',
   };
class SendMoneyToPage {
    
    async clickPyyplTransfer() {
        await $(sendMoneyToPageSelectors.pyyplTransfer).click();
    }
    async clickInternationalTransfer() {
        await $(sendMoneyToPageSelectors.internationalTransfer).click();
    }
   
}

module.exports = new SendMoneyToPage();