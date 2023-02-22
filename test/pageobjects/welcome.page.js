const welcomePageSelectors = {
    loginBtn: ("//android.widget.TextView[@text='Log in']"),
    createAccountBtn: "//android.widget.TextView[@text='Create account']"
};

class WelcomePage {

    async navigateToLoginPage() {
        await expect(await $(welcomePageSelectors.loginBtn)).toBeDisplayed();
        await expect(await $(welcomePageSelectors.createAccountBtn)).toBeDisplayed();
        await $(welcomePageSelectors.loginBtn).click();
    }
}

module.exports = new WelcomePage();