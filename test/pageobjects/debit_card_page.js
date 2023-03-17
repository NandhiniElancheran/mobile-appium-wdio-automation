const {formattedSelector} = require('../helper/FormatSelectors.js')
const debitCardSelectors = {
    nextBtn: 'test:id/NextBtn',
   };
class DebitCardPage {
    
    async clickNextButton() {
        await $ (formattedSelector(debitCardSelectors.nextBtn)).click();
    }
   
}

module.exports = new DebitCardPage();