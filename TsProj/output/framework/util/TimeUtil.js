"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../logger/Logger");
class TimeUtil {
    static prefixInteger(num, length) {
        return (Array(length).join('0') + num).slice(-length);
    }
    //将一个时间数转换成"00:00:00"格式
    static getTimeString1(timeInt) {
        if (timeInt <= 0) {
            return "00:00:00";
        }
        else {
            let hour = Math.floor(timeInt / (60 * 60));
            let hourstr = this.prefixInteger(hour, 2);
            let minnute = Math.floor(timeInt / 60) % 60;
            let minutestr = this.prefixInteger(minnute, 2);
            let second = timeInt % 60;
            let secondstr = this.prefixInteger(second, 2);
            return `${hourstr}:${minutestr}:${secondstr}`;
        }
    }
    //将一个时间数转换成"00:00"格式
    static getTimeString(timeInt) {
        if (timeInt <= 0) {
            return "00:00:00";
        }
        else {
            let hour = Math.floor(timeInt / (60 * 60));
            let hourstr = this.prefixInteger(hour, 2);
            let minnute = Math.floor(timeInt / 60) % 60;
            let minutestr = this.prefixInteger(minnute, 2);
            return `${hourstr}:${minutestr}`;
        }
    }
    //将一个时间数转换成"00"分格式
    static getTimeMinuteString(timeInt) {
        if (timeInt <= 0) {
            return "00:00:00";
        }
        else {
            let minnute = Math.floor(timeInt / 60) % 60;
            let minutestr = this.prefixInteger(minnute, 2);
            return `${minutestr}`;
        }
    }
    //将一个时间数转换成"00“秒格式
    static getTimeSecondString(timeInt) {
        if (timeInt <= 0) {
            return "00:00:00";
        }
        else {
            let second = timeInt % 60;
            let secondstr = this.prefixInteger(second, 2);
            return `${secondstr}`;
        }
    }
    //获取本月1号是星期几
    static getWeekOfMonthFirstDay(time) {
        let date = new Date(time);
        date.setDate(1);
        return date.getDay();
    }
    //判断是否为闰年
    static isLeapYear(year) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            return true;
        }
        return false;
    }
    static getMonthDays_(year, month) {
        if (month == 2) {
            if (this.isLeapYear(year))
                return 29;
            else {
                return 28;
            }
        }
        else {
            return this.months[month];
        }
    }
    static getMonthDays(time) {
        let t = new Date(time);
        return this.getMonthDays_(t.getFullYear(), t.getMonth());
    }
    static test() {
        let t1 = this.getTimeString1(5000);
        Logger_1.Logger.log(t1);
        let t2 = this.getTimeString(5000);
        Logger_1.Logger.log(t2);
        let t3 = this.getTimeMinuteString(5000);
        Logger_1.Logger.log(t3);
        let t4 = this.getTimeSecondString(5000);
        Logger_1.Logger.log(t4);
        let time = new Date().getTime();
        let t5 = this.getWeekOfMonthFirstDay(time);
        Logger_1.Logger.log("getWeekOfMonthFirstDay: " + t5 + " ,time:" + time);
        let t6 = this.getMonthDays(time);
        Logger_1.Logger.log("getMonthDays: " + t6);
    }
}
//每个月对应的天数
TimeUtil.months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
exports.TimeUtil = TimeUtil;
//# sourceMappingURL=TimeUtil.js.map