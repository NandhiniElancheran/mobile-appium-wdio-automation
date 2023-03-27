const {formattedSelector} = require('../helper/FormatSelectors.js')
const checkoutPageSelectors = {
    nextBtn: 'test:id/NextBtn',
    countryLblTxt: '',
    countryValueTxt:'',
    servicelblTxt: '',
    serviceValueTxt: '',
    youSendlblTxt: '',
    youSendValueTxt:'',
    theyReceiveValueTxt: '',
    feeLblTxt: '',
    feeValueTxt: '',
    totalLblTxt: '',
    totalValueTxt: ''

   };
class CheckoutPage {
    
    async clickNextButton() {
        await $ (formattedSelector(checkoutPageSelectors.nextBtn)).click();
    }
}

module.exports = new CheckoutPage();