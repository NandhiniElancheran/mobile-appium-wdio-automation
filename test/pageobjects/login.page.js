
const loginPageSelectors = {
  nextBtn: ("//android.widget.TextView[@text='Next']"),
  phoneNumberTxt: "//android.widget.EditText",
  countryCodeTxt: "//android.widget.TextView[@text='Country code']",
  searchEditTxt: "//android.widget.EditText[@text='Search']",
  
};

class LoginPage {

  async login(mobileNumber, country) {
    await $(loginPageSelectors.countryCodeTxt).click();
    await new Promise(r => setTimeout(r, 5000));
    await $(loginPageSelectors.searchEditTxt).setValue(country);
    await $(`//android.widget.TextView[@text='${country}']`).click();
    await $(loginPageSelectors.phoneNumberTxt).setValue(mobileNumber);
   // await new Promise(r => setTimeout(r, 5000));
    let elem = $(loginPageSelectors.nextBtn)
    let isEnabled = elem.isDisplayed();
   // if(!isEnabled){
      await $(loginPageSelectors.phoneNumberTxt).clearValue();
      await $(loginPageSelectors.phoneNumberTxt).setValue(mobileNumber);
 //   }
      await $(loginPageSelectors.nextBtn).click();
  }

}

module.exports = new LoginPage();

