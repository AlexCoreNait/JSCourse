const { describe, it } = require('mocha');
const Browser = require('../../framework/browser');
const HomePage = require('../../pages/homePage');

describe('Google Search', () => {
    let browser;
    
    before(async () => {
        browser = new Browser();
        await browser.start();
    })
    after(async () => {
        await browser.quit();
    })

    it('should search for "webdriver"', async () => {
        const homePage = new HomePage(browser);
        homePage.search('webdriver');
    });
});