const CONTEXT_REF = {
    NATIVE: 'native',
    WEBVIEW: 'webview',
};
const DOCUMENT_READY_STATE = {
    COMPLETE: 'complete',
    INTERACTIVE: 'interactive',
    LOADING: 'loading',
};

class WebView {

 constructor() {

 }
    
    async waitForWebViewContextLoaded () {
        await browser.waitUntil(
            async () => {
                const currentContexts = await this.getCurrentContexts();

                return currentContexts.length > 1 &&
                    currentContexts.find(context => context.toLowerCase().includes(CONTEXT_REF.WEBVIEW)) !== 'undefined';
            }, {
                timeout: 45000,
                timeoutMsg: 'Webview context not loaded',
                interval: 100,
            },
        );
    }

    async switchToContext (context) {
        await browser.switchContext((await this.getCurrentContexts())[context === CONTEXT_REF.NATIVE ? 0 : 1]);
    }

    async getCurrentContexts (){
        return browser.getContexts();
    }

    async waitForDocumentFullyLoaded () {
        await browser.waitUntil(
            async() => (await browser.execute(() => document.readyState)) === DOCUMENT_READY_STATE.COMPLETE,
            {
                timeout: 15000,
                timeoutMsg: 'Website not loaded',
                interval: 100,
            },
        );
    }

    async waitForWebsiteLoaded () {
        await this.waitForWebViewContextLoaded();
        await this.switchToContext(CONTEXT_REF.WEBVIEW);
        await this.waitForDocumentFullyLoaded();
        await this.switchToContext(CONTEXT_REF.NATIVE);
    }
}


//export default WebView;
module.exports = new WebView();
//module.exports = CONTEXT_REF;