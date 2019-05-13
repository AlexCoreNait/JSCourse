const { By } = require('selenium-webdriver');
const { locators } = require('./constants');
const BasePage = require('../../framework/basePage');

class ResultPage extends BasePage {
    constructor(browser) {
        super(browser, locators.resultStats, 'Result Page');
    }

    async getNumberOfResults() {
        let element = await this.browser.findElement(locators.resultStats, "Number of Results");
        let scr = await element.getText();
        return scr.split(' ').join('').match('\\d{1,}')[0];
    }

    async isRequiredLinkOnThePage(link) {
        return await this.browser.isElementPresent(By.xpath(`//a[@href='${link}']`), "Link");
    }
}

module.exports = ResultPage;