
var dayTemplate = {
        0:[],
        28:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
        29:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],
        30:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        31:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    };

function getBaseTime(){
    var items = [
        {
            values:[],
        },
        {
            values:[],
        },
        {
            values:[],
        }
    ];
    var currentYear = new Date().getFullYear();
    for(var i = 1950; i< currentYear - 2 ; i++) {
        items[0].values.push(i);
    }
    for(var i = 1; i <= 12; i++) {
        items[1].values.push(i);
    }
    var days = getBaseDay(1950,1);
    for(var i = 1; i <= days; i++) {
        items[2].values.push(i);
    }

    return items;
};

function getBaseDay(year,month) {
    // if(month < 10) {
    //     month = '0' + month;
    // }else {
    //     month = '' + month;
    // }
    var timeStr = year + '-' + month +'-01';  //'2012-02-01'
    var curDate = new Date(timeStr);
     /* 获取当前月份 */
     var curMonth = curDate.getMonth();
    /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
    curDate.setMonth(curMonth + 1);
    /* 将日期设置为0, 这里为什么要这样设置*/
    curDate.setDate(0);
    /* 返回当月的天数 */
    var length = curDate.getDate();
    return [length,dayTemplate[length || 0]];
}

export default {
    getBaseTime:getBaseTime,
    getBaseDay:getBaseDay
};