const personalUserAccountsPageSelectors = {
    topUpBtn: driver.isAndroid ? "//android.widget.TextView[@text='Top up']" : '~test:id/TopUpBtn',
    sendBtn: driver.isAndroid ? "//android.widget.TextView[@text='Send']" : '~test:id/SendMoneyBtn',
    logoutBtn: driver.isAndroid ? "//android.widget.TextView[@text='Log Out']" : '(//XCUIElementTypeOther[@name="Log Out"])[3]',
    yesBtn: driver.isAndroid ? "//android.widget.TextView[@text='Log Out']" : '~Yes',
    profileImg: driver.isAndroid ? "(//android.view.ViewGroup)[17]" : '(//XCUIElementTypeOther[@name="Personal"])[1]/XCUIElementTypeOther[1]'
};
class PersonalUserAccountsPage {
    
    async navigateToTopUpPage() {
        await $(personalUserAccountsPageSelectors.topUpBtn).click();
      // await $('id:').click();
    }
    async navigateToSendPage() {
        await $(personalUserAccountsPageSelectors.sendBtn).click();
    }
    async logout(){
        //await browser.scroll(0, 200);
        await $(personalUserAccountsPageSelectors.logoutBtn).click();
        await $(personalUserAccountsPageSelectors.yesBtn).click();
        }
    async clickProfileImg(){
        await $(personalUserAccountsPageSelectors.profileImg).click();
    }
}

module.exports = new PersonalUserAccountsPage();