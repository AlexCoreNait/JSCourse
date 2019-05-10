const exchange = require('../../pages/exchangerate');
const { describe, it } = require('mocha');
const logger = require('../../utils/log.util');

describe('Rate Test', () => {
    it('should show rate', async () => {
        const baseCurrency = 'USD';
        const currency = 'RUB';
        const lastDaysNumber = 10;

        logger.info(`Getting responses for the last ${lastDaysNumber} days before today with base currency "${baseCurrency}".`);
        let responseArray = await exchange.getArrayResponseLastDays(lastDaysNumber, baseCurrency);

        logger.info(`Getting "${currency}" currency from each response.`)
        let rateArray = exchange.getRateArray(responseArray, currency);

        logger.info("Comparing and printing rates.")
        exchange.compareAndPrintCurrencyArray(rateArray);
        logger.info(`${currency}s per 1 ${baseCurrency}.`);
    });
});
