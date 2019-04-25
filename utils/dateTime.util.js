class DateTimeUtil {
    today(){
        return new Date();
    }

    setYear(date, year){
        var newDate = new Date(date);
        return new Date(newDate.setFullYear(year));
    }

    daysDifference(leftDate, rightDate){
        var result = new Date(leftDate).getDate() - new Date(rightDate).getDate();
        return result < 0 ? -result : result;
    }
}

module.exports = new DateTimeUtil();