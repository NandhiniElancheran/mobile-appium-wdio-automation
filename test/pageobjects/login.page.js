const { driver, $, $$, expect } = require('@wdio/globals');
const { formattedSelector } = require('../helper/FormatSelectors.js')
const intercept = require('wdio-intercept-service');

const loginPageSelectors = {
  nextBtn: 'test:id/NextBtn',
  phoneNumberTxt: 'test:id/PhoneInput',
  countryCodeTxt: 'test:id/CountryCode',
  searchEditTxt: 'test:id/SearchInput',
  mobileNumberWithCode: driver.isAndroid ? "(//android.widget.TextView)[2]" : '//XCUIElementTypeStaticText[@name="Please enter the OTP we\'ve sent to +971505500114"]',
  otpTxt: driver.isAndroid ? "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup"
    : '//XCUIElementTypeOther[@name="Please enter the OTP we\'ve sent to +971505500114 Resend code in 56"]/XCUIElementTypeOther[3]',
};

class LoginPage {

  async login(mobileNumber, country) {
    await $(formattedSelector(loginPageSelectors.countryCodeTxt)).click();
    await new Promise(r => setTimeout(r, 5000));
    await $(formattedSelector(loginPageSelectors.searchEditTxt)).setValue(country);
    await this.selectCountry(country);
    if (!driver.isAndroid) {
      let element = await $(`//XCUIElementTypeOther[@name="test:id/${country}"]`);
      await element.click();
    }
    await this.enterMobileNumber(mobileNumber);
  }

  async selectCountry(country) {
    if (driver.isAndroid) {
      await $(`//android.widget.TextView[@text='${country}']`).click();
    } else {
      let element = await $(`//XCUIElementTypeOther[@name="test:id/${country}"]`);
      await element.click();
    }
  }

  async enterMobileNumber(mobileNumber) {
    await $(formattedSelector(loginPageSelectors.phoneNumberTxt)).clearValue();
    driver.pause(5000);
    await $(formattedSelector(loginPageSelectors.phoneNumberTxt)).setValue(mobileNumber);
    await $(formattedSelector(loginPageSelectors.phoneNumberTxt)).clearValue();
    await $(formattedSelector(loginPageSelectors.phoneNumberTxt)).setValue(mobileNumber);
    await $(formattedSelector(loginPageSelectors.nextBtn)).click();
  }

  async getOtp() {
    driver.setupInterceptor();
    await driver.pause(20000);
    let mobileNumberTxt = await $(formattedSelector(loginPageSelectors.mobileNumberWithCode)).getText();
    let mobileNumber = mobileNumberTxt.substring(35);

    driver.waitUntil(() => {
      return driver.expectRequest('GET', `https://api.dev.pyypl.io/users/otp/${mobileNumber}`, 200);
    }, 5000, 'Expected request to be made within 5s but was not found');

    let request = await driver.getRequest(0, `https://api.dev.pyypl.io/users/otp/${mobileNumber}`, { method: 'GET' });
    console.log(request[0].response.body);
    let otp = getOtpResponse.response.body.otp;
    await $(formattedSelector(loginPageSelectors.otpTxt)).setValue(otp);

  }

}

module.exports = new LoginPage();

