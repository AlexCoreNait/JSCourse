const logger = require('../utils/log.util');

const doWait = (action, interval, expectedValue) => {
    return new Promise((resolve, reject) => {
        let actualValue = action();
        if(actualValue === expectedValue) {
            setTimeout(() => resolve(), interval);
        }
        setTimeout(() => reject(actualValue), interval);
    });
}

const retrier = (action, maxCount, interval, expectedValue, count = 0) => {
    count++;
    logger.info(`[${count}] Wait for ${expectedValue}`);
    return doWait(action, interval, expectedValue).then(() => {
        logger.warning('Was able to reach expected conditions.');
        return true;
    }, (actualValue) => {
        if (maxCount <= count) {
            logger.warning('Was not able to reach expected conditions.');
            logger.warning(`The last actual value: "${actualValue}"`);  
            return false;
        } else {
            return retrier(action, maxCount, interval, expectedValue, count);
        }
    });
}

class Wait {
    forTrue(action, maxCount, interval){
        return retrier(action, maxCount, interval, true);    
    }

    forFalse(action, maxCount, interval){
        return retrier(action, maxCount, interval, false);   
    }
}

module.exports = Wait;