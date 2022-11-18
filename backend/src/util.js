// Convert mongodb date to string format eg. October 24, 2022
function dateToStr(date) {
    const monthDict = {
        "Jan": "January",
        "Feb": "February",
        "Mar": "March",
        "Apr": "April",
        "May": "May",
        "Jun": "June",
        "Jul": "July",
        "Aug": "August",
        "Sep": "September",
        "Oct": "October",
        "Nov": "November",
        "Dec": "December"
    }

    let dateStr = new Date(date).toDateString();
    let month = monthDict[dateStr.substring(4, 7)];
    return `${month} ${dateStr.substring(8).replace(' ', ', ')}`;
}

// Convert date string format yyyyMMdd to Date object
function strToDate(str) {
    const year = str.substring(0, 4);
    const month = str.substring(4, 6);
    const day = str.substring(6, 8);
    let date = new Date(`${year}/${month}/${day}`);
    return date;
}

export { dateToStr, strToDate };