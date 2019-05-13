let chai = require('chai');
const chaiHttp = require('chai-http');
const consts = require('./constants');
const helper = require('./helpers');
const dateTime = require('../../utils/dateTime.util');
const logger = require('../../utils/log.util');
chai.use(chaiHttp);

class ExchangeRate {
    async get(date = null, baseCurrency = null) {
        let result;
        await chai.request(consts.URL).get(helper.getPreparedEndpoint(date, baseCurrency)).then(res => {
            result = res.text;
        });
        return result;
    }

    /**
     * Was created according to item #5 from Homework #3.
     * Returns an array of responses for the last 'n' days before today.
     */
    async getArrayResponseLastDays(numberOfDays, baseCurrency) {
        let array = new Array();
        let todayDate = dateTime.today();
        for (let i = 0; i < numberOfDays; i++) {
            array[i] = await this.get(todayDate - (numberOfDays - i)*24*60*60*1000, baseCurrency);
        }
        return array;
    }

    getRateArray(responseArray, currency) {
        let result = new Array();
        for (let i = 0; i < responseArray.length; i++) {
            result[i] = helper.getCurrencyFromResponse(responseArray[i], currency);
        }
        return result;
    }

    compareAndPrintCurrencyArray(array) {
        let comparedArray = helper.getComparedCurrencyArray(array);
        comparedArray.forEach((row) => {
            logger.info(`[${row}]`);
        });
    }
}

module.exports = new ExchangeRate();