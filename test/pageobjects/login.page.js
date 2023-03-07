//import {setupInterceptor} from 'wdio-intercept-service'
//const setupInterceptor = require('wdio-intercept-service');
const { driver, $, $$, expect } = require ('@wdio/globals');

const loginPageSelectors = {
  nextBtn: driver.isAndroid ? ("//android.widget.TextView[@text='Next']") : '~test:id/NextBtn',
  phoneNumberTxt: driver.isAndroid ? "//android.widget.EditText" : '~test:id/PhoneInput',
  countryCodeTxt: driver.isAndroid ? "//android.widget.TextView[@text='Country code']" : '~test:id/CountryCode',
  searchEditTxt: driver.isAndroid ? "//android.widget.EditText[@text='Search']" : '~test:id/SearchInput',
  mobileNumberWithCode: driver.isAndroid ? "(//android.widget.TextView)[2]" : '//XCUIElementTypeStaticText[@name="Please enter the OTP we\'ve sent to +971505500114"]',
  otpTxt: driver.isAndroid ? "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup"
  : '//XCUIElementTypeOther[@name="Please enter the OTP we\'ve sent to +971505500114 Resend code in 56"]/XCUIElementTypeOther[3]',
};

class LoginPage {

  async login(mobileNumber, country) {
    await $(loginPageSelectors.countryCodeTxt).click();
    await new Promise(r => setTimeout(r, 5000));

     let size = driver.getWindowRect();
     console.log('size', size);

     let curr_width = size.width();
     let curr_height = size.height();
   
     // Set the new dimensions
     size.height(curr_height * 0.2);
     size.width(curr_width * 0.7);

   
    //  let x1 =  (width * 0.2);
    //  let x2 =  (width * 0.2);
    //  let y1 =  (height * 0.2);
    //  let y2 =  (height * 0.7);

    //const screen = await $('//XCUIElementTypeOther[@name="Bottom Sheet handle"]');

   // await screen.dragAndDrop({ x: 209, y: 850 });
   
    // await driver.touchPerform([
    //   { action: 'press', options: { x: 209, y: 125 }},
    //   { action: 'wait', options: { ms: 100 }},
    //   { action: 'moveTo', options: { x: 200, y: 830 }},
    //   { action: 'release' }
    // ]);

   /*  await $(loginPageSelectors.searchEditTxt).setValue(country);
    await this.selectCountry(country);
    if(!driver.isAndroid){
    let element = await $(`//XCUIElementTypeOther[@name="test:id/${country}"]`);
    await element.click();
    }
     await $(loginPageSelectors.phoneNumberTxt).clearValue();
     driver.pause(5000);
     await $(loginPageSelectors.phoneNumberTxt).setValue(mobileNumber);

   // await new Promise(r => setTimeout(r, 5000));
   // let elem = $(loginPageSelectors.nextBtn)
   // let isEnabled = elem.isDisplayed();
  // if(!isEnabled){
     await $(loginPageSelectors.phoneNumberTxt).clearValue();
     await $(loginPageSelectors.phoneNumberTxt).setValue(mobileNumber);
 //  }
      await $(loginPageSelectors.nextBtn).click(); */
  }

  async selectCountry(country){
    if(driver.isAndroid){
      await $(`//android.widget.TextView[@text='${country}']`).click();
    }else{
      //await $(`~test:id/${country}]`).click();
      let element = await $(`//XCUIElementTypeOther[@name="test:id/${country}"]`);
      await element.click();
    }
  }
  async getOtp(){
    await driver.pause(20000);
    console.log('enterysgdh')
    driver.setupInterceptor(); 
    let mobileNumberTxt = await $(loginPageSelectors.mobileNumberWithCode).getText();
    let mobileNumber = mobileNumberTxt.substring(35);
    // await browser.expectRequest('GET', `https://api.dev.pyypl.io/users/otp/${mobileNumber}`, 200); 
    // await browser.pause(3000);
    // let getOtpResponse = await browser.getRequest('GET',`https://api.dev.pyypl.io/users/otp/${mobileNumber}`);
    // console.log(getOtpResponse.response.body.otp);
    // let otp = getOtpResponse.response.body.otp;
    // await $(loginPageSelectors.otpTxt).setValue(otp);
  }

}

module.exports = new LoginPage();

