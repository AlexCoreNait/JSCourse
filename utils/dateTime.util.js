class DateTimeUtil {
    today() {
        return new Date();
    }

    setYear(date, year) {
        var newDate = new Date(date);
        return new Date(newDate.setFullYear(year));
    }

    daysDifference(leftDate, rightDate) {
        var result = (new Date(leftDate) - new Date(rightDate)) / (24*60*60*1000);
        return result < 0 ? -result : result;
    }
}

module.exports = new DateTimeUtil();