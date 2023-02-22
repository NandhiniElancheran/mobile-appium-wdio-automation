const passcodePageSelectors = {
    key1: "//android.widget.TextView[@text='1']",
    key2: "//android.widget.TextView[@text='2']",
    key3: "//android.widget.TextView[@text='3']",
    key4: "//android.widget.TextView[@text='4']",
    passcodeOneTxt : "//android.widget.TextView[@text='Personal passcode']//following-sibling::*[1]",
    passcodeTwoTxt : "//android.widget.TextView[@text='Personal passcode']//following-sibling::*[2]",
    passcodeThreeTxt : "//android.widget.TextView[@text='Personal passcode']//following-sibling::*[3]",
    passcodeFourTxt : "//android.widget.TextView[@text='Personal passcode']//following-sibling::*[4]"
   };

class PasscodePage  {
  
    async enterPasscode () {
     await $(passcodePageSelectors.key1).click();
     await $(passcodePageSelectors.key2).click();
     const el = await $(passcodePageSelectors.key3);
     await el.waitForDisplayed({ timeout: 10000 });
     await $(passcodePageSelectors.key3).click();
     await $(passcodePageSelectors.key4).click();
    }

}

module.exports = new PasscodePage();

