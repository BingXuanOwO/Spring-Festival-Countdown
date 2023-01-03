export function getIsNewYear(timeNow,newYearTime){
    let isNewYear = newYearTime - timeNow < 0;

    // 如果过了新年5天后,为空
    // if(timeNow - newYearTime > 432000000){
    //   isNewYear = false
    // }

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
    let time = Math.floor(remainTime / 1000);

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

    
    let parsedRemainTime = "";

    parsedRemainTime += day > 0 ? day + "天" : "";
    parsedRemainTime += hour > 0 ? hour + "小时" : "";
    parsedRemainTime += minutes > 0 ? minutes + "分" : "";
    parsedRemainTime += seconds > 0 ? seconds + "秒" : "";

    return parsedRemainTime
}


export class Firework {
    // 构造器
    constructor(x,y,ctx){
        this.x = x
        this.y = y
        this.ctx = ctx
        this.count = Math.round(Math.random() * 15 + 10)
        this.radius = Math.round(Math.random() * 2 + 10)
        this.speed = 20
        this.gravaty = 1

        this.alpha = 1
        
        this.points = []

        for (let i = 0; i < this.count; i++) {
            // let angle = 360 / this.count * i;
            // 生成角度半径和hsl色相
            let point = new Point;
            point.angle = Math.random() * 360;
            point.radius = Math.round(Math.random() * 5 + 1)
            point.hue = Math.random() * 360;

            let radians = point.angle * Math.PI / 180;

            // 求出点的xy
            let arcx = Math.cos(radians) * point.radius
            let arcy = Math.sin(radians) * point.radius + (this.gravaty * 0.1)

            // 开始绘制
            this.ctx.beginPath();
            this.ctx.arc(arcx + this.x, arcy + this.y , 2, Math.PI * 2, false);

            // 填色
            this.ctx.closePath();
            let color = `HSL(${point.hue},80%,60%)`
            this.ctx.fillStyle = color
            this.ctx.fill();

            this.points.push(point)
        }
    }

    // 画每帧的烟花
    drawFireworks(){
        for (let index = 0; index < this.points.length; index++) {
            const element = this.points[index];

            let radians = element.angle * Math.PI / 180;

            // 求出点的xy
            let arcx = Math.cos(radians) * element.radius
            let arcy = Math.sin(radians) * element.radius + (this.gravaty * 0.1)
            
            // 开始绘制
            this.ctx.beginPath();
            this.ctx.arc(arcx + this.x, arcy + this.y , 2, Math.PI * 2, false);

            // 填色
            this.ctx.closePath();
            let color = `HSL(${element.hue},80%,60%)`
            this.ctx.fillStyle = color
            this.ctx.fill();

            // 通过增大半径逐渐将点外移
            element.radius *= 1 + this.speed / 120
            this.speed = this.speed * 0.9980
            this.alpha -= 0.0005;

            // 计算y下坠值
            this.gravaty += 0.3
            
        }
    }
}


class Point{
    constructor(radius,hue,speed,angle){
        this.radius = radius;
        this.hue = hue;
        this.speed = speed;
        this.angle = angle;
    }
}