const { By } = require('selenium-webdriver');

const locators = {
    searchInput: By.name('q'),
    page: By.id('hplogo'),
}

module.exports = {locators};