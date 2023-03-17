const { formattedSelector } = require('../helper/FormatSelectors.js')
const { driver, $, $$, expect } = require('@wdio/globals');


const personalUserAccountsPageSelectors = {
    topUpBtn: 'test:id/TopUpBtn',
    sendBtn: 'test:id/SendMoneyBtn',
    logoutBtn: 'test:id/menu-item-logOut',
    yesBtn: 'test:id/modal-button-Yes',
    profileImg: 'test:id/ProfileBtn',
    aboutUsBtn: 'test:id/menu-item-aboutUs',
    privacyPolicy: 'test:id/menu-item-privacyPolicy'
};
class PersonalUserAccountsPage {

    async navigateToTopUpPage() {
        await $(formattedSelector(personalUserAccountsPageSelectors.topUpBtn)).click();
    }
    async navigateToSendPage() {
        await $(formattedSelector(personalUserAccountsPageSelectors.sendBtn)).click();
    }
    async logout() {
        if (driver.isAndroid)
            driver.longPressKeyCode(20);
        const element = $(formattedSelector(personalUserAccountsPageSelectors.privacyPolicy));
        await element.waitForDisplayed({ timeout: 10000 });
        const el = $(formattedSelector(personalUserAccountsPageSelectors.logoutBtn));
        if (driver.isAndroid)
            do {
                driver.longPressKeyCode(20);
                await el.waitForDisplayed({ timeout: 5000 });
            } while (!el.isDisplayed())
        await $(formattedSelector(personalUserAccountsPageSelectors.logoutBtn)).click();
        await $(formattedSelector(personalUserAccountsPageSelectors.yesBtn)).click();
    }
    async clickProfileImg() {
        await $(formattedSelector(personalUserAccountsPageSelectors.profileImg)).click();
        driver.pause(5000);
    }
}

module.exports = new PersonalUserAccountsPage();