const {formattedSelector} = require('../helper/FormatSelectors.js')

const sendMoneyToPageSelectors = {
    pyyplTransfer: 'test:id/PYYPL_TO_PYYPL',
    internationalTransfer: 'test:id/INTERNATIONAL_TRANSFER',
   };
class SendMoneyToPage {
    
    async clickPyyplTransfer() {
        await $(formattedSelector(sendMoneyToPageSelectors.pyyplTransfer)).click();
    }
    async clickInternationalTransfer() {
        await $(formattedSelector(sendMoneyToPageSelectors.internationalTransfer)).click();
    }
   
}

module.exports = new SendMoneyToPage();