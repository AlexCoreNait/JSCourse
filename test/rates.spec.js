const exchange = require('../pages/exchangerate');
const { describe, it } = require('mocha');
const { assert } = require('chai');
const logger = require('../utils/log.util');

describe('Rate Test', () => {
    it('should show rate', () => {
        logger.info(exchange.getRate());
    });
});
