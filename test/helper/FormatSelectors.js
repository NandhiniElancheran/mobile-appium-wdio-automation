const { welcomePageSelectors } = require("../pageobjects/welcome.page")

exports.formattedSelector = (selector) => {
    const id = welcomePageSelectors.selector
    console.log(id,"#####")
    if(driver.isAndroid){
        return `id:${selector}`
    }else{
        return `~${selector}`
    }
    
}