const { describe, it } = require('mocha');
const Browser = require('../../framework/browser');
const HomePage = require('../../pages/homePage');
const ResultPage = require('../../pages/resultPage');
const { assert } = require('chai');

describe('Google Search', () => {
    let browser;
    let homePage;
    let resultPage;
    
    before(async () => {
        browser = new Browser();
        await browser.start();
        homePage = new HomePage(browser);
        resultPage = new ResultPage(browser);
    })
    after(async () => {
        await browser.quit();
    })

    it('should search for "webdriver"', async () => {
        assert.isTrue(await homePage.isOpened(), 'Home page is not opened');
        homePage.search('webdriver');
        assert.isTrue(await resultPage.isOpened(), 'Result page is not opened');
    });

    it('should find more than 100000 results', async () => {
        const requiredResults = 100000;
        assert.isTrue(await resultPage.getNumberOfResults() > requiredResults, 'Not enough results are shown');
    });

    it('should show "https://www.seleniumhq.org/projects/webdriver/" link on the first page', async () => {
        const link = 'https://www.seleniumhq.org/projects/webdriver/';
        assert.isTrue(await resultPage.isRequiredLinkOnThePage(link), 'Required link is not displayed');
    });
});