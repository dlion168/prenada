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

// Convert string format(eg. October 24, 2022) to mongodb date
function fullTextToDate(str) {
    console.log(str)
    const monthDict = {
        "January": '01',
        "February": "02",
        "March": "03",
        "April": "04",
        "May": "05",
        "June": "06",
        "July": "07",
        "August": "08",
        "September": "09",
        "October": "10",
        "November": "11",
        "December": "12"
    }
    let MM = monthDict[str.split(' ')[0]];
    const { dd, yyyy } = str.split(' ')[1].split(',');
    let dateObj = new Date(yyyy + MM + dd);
    console.log(yyyy, MM, dd)
    return dateObj;
}

// Convert date string format yyyyMMdd to Date object
function strToDate(str) {
    const year = str.substring(0, 4);
    const month = str.substring(4, 6);
    const day = str.substring(6, 8);
    let date = new Date(`${year}/${month}/${day}`);
    return date;
}

// Convert mongodb date to bbreviation string format eg. Oct 21
function dateToAbbreviationStr(date) {
    let dateStr = new Date(date).toDateString();
    return dateStr.substring(4, 10);
}


export { dateToStr, strToDate, dateToAbbreviationStr, fullTextToDate };