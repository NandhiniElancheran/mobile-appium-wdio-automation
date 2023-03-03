const personalUserAccountsPageSelectors = {
    topUpBtn: driver.isAndroid ? "//android.widget.TextView[@text='Top up']" : '~test:id/TopUpBtn',
    logoutBtn: driver.isAndroid ? "//android.widget.TextView[@text='Log Out']" : '(//XCUIElementTypeOther[@name="Log Out"])[3]',
    profileImg: driver.isAndroid ? "(//android.view.ViewGroup)[17]" : '(//XCUIElementTypeOther[@name="Personal"])[1]/XCUIElementTypeOther[1]'
};
class PersonalUserAccountsPage {
    
    async navigateToTopUpPage() {
        await $(personalUserAccountsPageSelectors.topUpBtn).click();
      // await $('id:').click();
    }
    async logout(){
        //await browser.scroll(0, 200);
        await $(personalUserAccountsPageSelectors.logoutBtn).click();
    }
    async clickProfileImg(){
        await $(personalUserAccountsPageSelectors.profileImg).click();
    }
}

module.exports = new PersonalUserAccountsPage();