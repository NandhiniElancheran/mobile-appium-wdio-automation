const { welcomePageSelectors } = require("../pageobjects/welcome.page")

export const formattedSelector = (selector) => {
    const id = welcomePageSelectors.selector
    console.log(id,"#####")
    if(driver.isAndroid){
        return `id:${selector}`
    }else{
        return `~${selector}`
    }
    
}