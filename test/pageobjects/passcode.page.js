const { formattedSelector } = require('../helper/FormatSelectors.js')

class PasscodePage {
    async enterPasscode(passcode) {
        for (var i = 0; i < passcode.length; i++) {
            await $(formattedSelector(`test:id/${passcode.charAt(i)}`)).click();
        }
    }
}

module.exports = new PasscodePage();

