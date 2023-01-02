export function getIsNewYear(timeNow,newYearTime){
    let isNewYear = timeNow - newYearTime < 0;

    // 如果过了新年5天后,为空
    if(timeNow - newYearTime > 432000000){
      isNewYear = false
    }
    return isNewYear
}

export function parsingTime(timeStamp){
    let parsedTime = ""
    let time = new Date(timeStamp)

    parsedTime += `${time.getFullYear()}年${time.getMonth() + 1}月${time.getDay()}日`;
    
    parsedTime += " "

    parsedTime += `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;


    return parsedTime
}

export function parsingRemainTime(remainTime){
    console.log(remainTime)
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
    let day = time;

    // console.log("seconds:" + seconds + "\r\n");
    // console.log("minutes:" + minutes + "\r\n");
    // console.log("hour:" + hour + "\r\n");
    // console.log("day:" + day + "\r\n");
    
    let parsedRemainTime = "";

    parsedRemainTime += day > 0 ? day + "天" : "";
    parsedRemainTime += hour > 0 ? hour + "小时" : "";
    parsedRemainTime += minutes > 0 ? minutes + "分" : "";
    parsedRemainTime += seconds > 0 ? seconds + "秒" : "";

    return parsedRemainTime
}