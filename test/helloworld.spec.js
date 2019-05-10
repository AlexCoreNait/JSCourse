const { describe, it } = require('mocha');
const logger = require('../utils/log.util');
const { assert } = require('chai');
const dateTime = require('../utils/dateTime.util');

describe('Hello World TestSuite', () => {
    it('should write "Hello World"', () => {
        logger.info('Hello World');
    });
});

describe('Date Time Utils', () => {
    it('Check "today"', () => {
        assert.strictEqual(dateTime.today().toDateString(), new Date().toDateString(), 'Generated Date is incorrect.');
    });

    it('Check "set year"', () => {
        const year = 2017;
        let date = new Date();
        let expectedDate = new Date(date.setFullYear(year));
        assert.strictEqual(dateTime.setYear(date, year).toDateString(), expectedDate.toDateString(), 'Incorrect year is set.');
    });

    it('Check "days difference"', () => {
        const date = new Date();
        let leftDate = date;
        let rightDate = date;
        leftDate.setMonth('3');
        let expectedDiff = (leftDate - rightDate) / (24*60*60*1000);
        let actualDayDiff = dateTime.daysDifference(leftDate, rightDate);
        assert.strictEqual(actualDayDiff, expectedDiff < 0 ? -expectedDiff : expectedDiff, 'Day difference is incorrect.');
    });
});