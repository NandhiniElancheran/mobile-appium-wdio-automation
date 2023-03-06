const sendToPageSelectors = {
    clickOKbtn: '~test:id/OK',
    enterPhoneNumber: '~test:id/PhoneInput',
    clickContinueBtn: '~test:id/ContinueBtn',
    enterAmount: driver.isAndroid ? "//android.widget.TextView[@text='Top up']" : '~test:id/SendMoneyAmountInput',
    nextBtn: driver.isAndroid ? "//android.widget.TextView[@text='Send']" : '~test:id/Next',
   };
class SendToPage {
    async enterPhoneNumber(phoneNumber) {
        await $(sendToPageSelectors.enterPhoneNumber).clearValue();
        await $(sendToPageSelectors.enterPhoneNumber).click();
        await $(sendToPageSelectors.enterPhoneNumber).setValue(phoneNumber);
        await $(sendToPageSelectors.enterPhoneNumber).clearValue();
        await $(sendToPageSelectors.enterPhoneNumber).setValue(phoneNumber);

    }
    async enterAmount(amount) {
        await $(sendToPageSelectors.enterAmount).setValue(amount);
    }
    async clickContinueButton() {
        await $(sendToPageSelectors.clickContinueBtn).click();
    }
    async clickNextButton() {
        await $(sendToPageSelectors.nextBtn).click();
    }
   
}

module.exports = new SendToPage();