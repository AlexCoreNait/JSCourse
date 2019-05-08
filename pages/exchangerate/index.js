const { request } = require('chai').use(require('chai-http'));
const logger = require('../../utils/log.util');

class ExchangeRate {
    getRate() {
        request('https://api.exchangeratesapi.io').get('/latest')
    };
};

module.exports = new ExchangeRate();