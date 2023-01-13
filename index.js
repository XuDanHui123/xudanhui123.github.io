function getTime() {
    var fullDate = new Date();
    var date = fullDate.getDate(); // %D
    var day = fullDate.getDay(); // %d
    var year = fullDate.getFullYear(); // %y
    var hour = fullDate.getHours(); // %h
    var month = fullDate.getMonth(); // %M
    var minute = fullDate.getMinutes(); // %m
    var second = fullDate.getSeconds(); // %s
    return [year, month, date, day, hour, minute, second];
}
function prefixZero() {
    var datebase = getTime();
    var hour = datebase[4];
    var month = datebase[1];
    var minute = datebase[5];
    var second = datebase[6];
    hout < 10 ? hour = "0" + hour : hour;
    month < 10 ? month = "0" + month : month;
    minute < 10 ? minute = "0" + minute : minute;
    second < 10 ? second = "0" + second : second;
    datebase[4] = hour;
    datebase[1] = month;
    datebase[5] = minute;
    datebase[6] = second;
    return datebase;
}
function about() { 
    
}