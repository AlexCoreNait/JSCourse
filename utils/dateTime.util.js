class DateTimeUtil {
    today() {
        return new Date();
    }

    setYear(date, year) {
        let newDate = new Date(date);
        return new Date(newDate.setFullYear(year));
    }

    daysDifference(leftDate, rightDate) {
        let result = (new Date(leftDate) - new Date(rightDate)) / (24*60*60*1000);
        return result < 0 ? -result : result;
    }

    getDateMinusTenDays() {
        const days = 10;
        return new Date(this.today() - days*24*60*60*1000);
    }
}

module.exports = new DateTimeUtil();