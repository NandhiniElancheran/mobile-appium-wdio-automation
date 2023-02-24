const personalUserAccountsPageSelectors = {
    topUpBtn: "//android.widget.TextView[@text='Top up']",
    logoutBtn: "//android.widget.TextView[@text='Log Out']",
    profileImg: "(//android.view.ViewGroup)[17]"
};
class PersonalUserAccountsPage {
    
    async navigateToTopUpPage() {
        await $(personalUserAccountsPageSelectors.topUpBtn).click();
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