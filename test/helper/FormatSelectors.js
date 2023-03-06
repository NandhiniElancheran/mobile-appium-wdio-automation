exports.formattedSelector = (selector) => {
    return driver.isAndroid ? `id:${selector}` : `~${selector}`;
}