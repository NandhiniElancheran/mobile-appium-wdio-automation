//const { $ } = require('webdriverio/build/commands/browser.js');
const {formattedSelector} = require('../helper/FormatSelectors.js');
const { driver,$, $$, expect } = require('@wdio/globals');


const sendToPageSelectors = {
    clickOKbtn: 'test:id/OK',
    countryCodeTxt: 'test:id/CountryCode',
    enterPhoneNumber: 'test:id/PhoneInput',
    clickContinueBtn: 'test:id/ContinueBtn',
    enterAmount: 'test:id/SendMoneyAmountInput',
    nextBtn: 'test:id/Next',
    searchField: 'test:id/SearchInput'    
   };
class SendToPage {
    async enterPhoneNumber(phoneNumber,country) {
       
        if(!driver.isAndroid){
            const ele = await $('//XCUIElementTypeStaticText[@name="Send to"]');
            ele.waitForExist({timeout:5000});
        }
        await $(formattedSelector(sendToPageSelectors.countryCodeTxt)).click();
        const el = await $ (formattedSelector(sendToPageSelectors.searchField));
        el.waitForDisplayed({timeout: 5000});
        await $ (formattedSelector(sendToPageSelectors.searchField)).setValue(country);
        this.selectCountry(country);
        if(!driver.isAndroid){
            const el = await $(`//XCUIElementTypeOther[@name="test:id/${country}"]`).click();
        }
        await $(formattedSelector(sendToPageSelectors.enterPhoneNumber)).clearValue();
      //  await $(formattedSelector(sendToPageSelectors.enterPhoneNumber)).click();
        await $(formattedSelector(sendToPageSelectors.enterPhoneNumber)).setValue(phoneNumber);
        await $(formattedSelector(sendToPageSelectors.enterPhoneNumber)).clearValue();
        await $(formattedSelector(sendToPageSelectors.enterPhoneNumber)).setValue(phoneNumber);
    }

    async selectCountry(country) {
        if (driver.isAndroid) {
          await $(`//android.widget.TextView[@text='${country}']`).click();
        } else {
          let element = await $(`//XCUIElementTypeOther[@name="test:id/${country}"]`);
          await element.click();
        }
      }
    async enterAmount(amount) {
        await $(formattedSelector(sendToPageSelectors.enterAmount)).setValue(amount);
    }
    async clickContinueButton() {
        await $(formattedSelector(sendToPageSelectors.clickContinueBtn)).click();
    }
    async clickNextButton() {
        await $(formattedSelector(sendToPageSelectors.nextBtn)).click();
    }
   
}

module.exports = new SendToPage();