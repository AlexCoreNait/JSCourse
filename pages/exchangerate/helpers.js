const consts = require('./constants');

const getParsedDate = (date) => {
    let year = new Date(date).getFullYear().toString();
    let month = (new Date(date).getMonth() + 1).toString();
    let day = new Date(date).getDate().toString();
    month = month.length < 2 ? `0${month}` : month;
    day = day.length < 2 ? `0${day}` : day;
    return `${year}-${month}-${day}`;
};

class Helper {
    getPreparedEndpoint(date = null, baseCurrency = null) {
        let requestDate = date == null ? consts.LATEST : `/${getParsedDate(date)}`;
        return baseCurrency == null ? requestDate : requestDate.concat(consts.BASE).concat(baseCurrency);
    }

    getCurrencyFromResponse(response, currency) {
        let parsedArray = JSON.parse(response);
        return parsedArray.rates[currency];
    } 

    getComparedCurrencyArray(array) {
        let previousValue = array[0];
        let result = new Array();
        for (let i = 0; i < array.length; i++) {
            let currentValue = array[i];
            if (currentValue > previousValue) {
                result[i] = `+ ${currentValue}`;
            } else {
                result[i] = currentValue < previousValue ? `- ${currentValue}` : `  ${currentValue}`;
            }
            previousValue = currentValue;
        }
        return result;
    }
}

module.exports = new Helper();