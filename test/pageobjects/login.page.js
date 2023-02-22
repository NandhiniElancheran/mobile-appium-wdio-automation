
const loginPageSelectors = {
    nextBtn : ("//android.widget.TextView[@text='Next']"),
    phoneNumberTxt: "//android.widget.EditText",
   };

class LoginPage  {
    
    async login (mobileNumber) {
     await $(loginPageSelectors.phoneNumberTxt).setValue(mobileNumber);
     await $(loginPageSelectors.nextBtn).click();
    }

}

module.exports = new LoginPage();

