class BasePage {
    constructor(browser, by, name) {
        this.browser = browser;
        this.by = by;
        this.name = name;
    }

    async isOpened() {
        let readyState = await this.browser.driver.executeScript(() => {
                return document.readyState == 'complete';
            });
        return readyState && await this.browser.isElementPresent(this.by, this.name);
    }
}

module.exports = BasePage;