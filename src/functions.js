export function getIsNewYear(timeNow,newYearTime){
    let isNewYear = timeNow - newYearTime < 0;

    // 如果过了新年5天后,直接
    if(timeNow - newYearTime > 432000000){
      isNewYear = false
    }
    return isNewYear
}

export function parsingTime(timeStamp){
    let parsedTime = ""
    let time = new Date(timeStamp)
    parsedTime += time.getFullYear() + "年";
    parsedTime += time.getMinutes() + "月";
    parsedTime += time.getDay() + "日";

    parsedTime += " "

    parsedTime += time.get;


    return 
}

export function parsingRemainTime(remainTime){
    let time = Math.round(remainTime / 1000);

    // 秒
    let seconds = time % 60;
    time = Math.floor(time / 60);

    // 分
    let minutes = time % 60;
    time = Math.floor(time / 60);

    // 小时
    let hour = time % 24;
    time = Math.floor(time / 24);

    // 天
    let day = time % 24;
    time = Math.floor(time / 24);

    console.log("seconds:" + seconds + "\r\n");
    console.log("minutes:" + minutes + "\r\n");
    console.log("hour:" + hour + "\r\n");
    console.log("day:" + day + "\r\n");
    
    let parsedRemainTime = "";

    parsedRemainTime += time.getFullYear() + "年";
    parsedRemainTime += time.getMinutes() + "月";
    parsedRemainTime += time.getDay() + "日";
}