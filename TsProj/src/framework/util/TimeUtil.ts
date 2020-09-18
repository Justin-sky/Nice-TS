

export class TimeUtil{


    private static prefixInteger(num, length):string{

        return  (Array(length).join('0') + num).slice(-length);
    }

    //将一个时间数转换成"00:00:00"格式
    public static getTimeString1(timeInt : number):string {

        if(timeInt <= 0){
            return "00:00:00";
        }else{

            let hour:number = Math.floor(timeInt / (60 * 60));
            let hourstr = this.prefixInteger(hour, 2);

            let minnute:number = Math.floor(timeInt/ 60) % 60;
            let minutestr:string = this.prefixInteger(minnute, 2);

            let second:number = timeInt % 60;
            let secondstr:string = this.prefixInteger(second,2);

            return `${hourstr}:${minutestr}:${secondstr}`;
        }
        
    }

    //将一个时间数转换成"00:00"格式
    public static getTimeString(timeInt:number):string{

        if(timeInt <= 0){
            return "00:00:00";
        }else{
            let hour:number = Math.floor(timeInt / (60 * 60));
            let hourstr = this.prefixInteger(hour, 2);

            let minnute:number = Math.floor(timeInt/ 60) % 60;
            let minutestr:string = this.prefixInteger(minnute, 2);

            return `${hourstr}:${minutestr}`;
        }
    }

    //将一个时间数转换成"00"分格式
    public static getTimeMinuteString(timeInt:number):string{

        if(timeInt <= 0){
            return "00:00:00";
        }else{
        
            let minnute:number = Math.floor(timeInt/ 60) % 60;
            let minutestr:string = this.prefixInteger(minnute, 2);

            return `${minutestr}`;
        }
    }

    //将一个时间数转换成"00“秒格式
    public static getTimeSecondString(timeInt:number):string{

        if(timeInt <= 0){
            return "00:00:00";
        }else{
            let second:number = timeInt % 60;
            let secondstr:string = this.prefixInteger(second,2);

            return `${secondstr}`;
        }
    }

    //获取本月1号是星期几
    public static getWeekOfMonthFirstDay(time:number):number{

        let date = new Date(time);
        date.setDate(1);

        return date.getDay();
    }

    //判断是否为闰年
    public static isLeapYear(year:number)
    {
        if ( (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ){
            return true;
        }
        return false;
    }

    //每个月对应的天数
    static  months:Array<number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    private static getMonthDays_(year:number, month:number):number{
        if(month == 2){
            if(this.isLeapYear(year))
                return 29;
            else{
                return 28;
            }
        }else{
            return this.months[month];
        }
    }

    public static getMonthDays(time:number):number {

        let t = new Date(time);

        return this.getMonthDays_(t.getFullYear(), t.getMonth());
    }


    public static async sleep(ms:number){
        return new Promise((resolve) =>{
            setTimeout(()=>{
                resolve('');
            }, ms);
        });
    }


    public static test():void{

        let t1:string = this.getTimeString1(5000);
        console.log(t1);
        

        let t2:string = this.getTimeString(5000);
        console.log(t2);

        let t3:string = this.getTimeMinuteString(5000);
        console.log(t3);

        let t4:string = this.getTimeSecondString(5000);
        console.log(t4);

        let time:number = new Date().getTime();

        let t5:number = this.getWeekOfMonthFirstDay(time);
        console.log("getWeekOfMonthFirstDay: "+t5 + " ,time:"+time);

        let t6:number = this.getMonthDays(time);
        console.log("getMonthDays: "+t6);

    }


}