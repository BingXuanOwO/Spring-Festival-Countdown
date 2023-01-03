import React from "react";
import './BackgroundCanvas.css'

import { Firework } from "./functions";

var Fireworks = []

const drawTicks = ()=>{
    // 清除画布
    const canvas = document.querySelector("canvas");
    if(canvas!=null){
        const ctx = canvas.getContext("2d")
        ctx.fillStyle = 'rgba(0,0,0,0.2)'
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // 绘制每个烟花
    if( Fireworks != 0 ){
        Fireworks.forEach((element,index)=>{
            element.drawFireworks()
            // console.log(element.alpha)
            if(element.alpha < 0){
                Fireworks.splice(index,1)
                console.log(Fireworks)
            }
        })
    }
    requestAnimationFrame(drawTicks)
}

drawTicks()

class BackgroundCanvas extends React.Component {
    constructor(props){
        super(props)
        window.onload = ()=>{
            const canvas = document.querySelector("canvas");

            // canvas自动更换高度
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            window.addEventListener("resize", ()=>{
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
            })

            // 点击放烟花
            window.addEventListener('click',(event)=>{
                console.log(event.clientX)
                console.log(event.clientY)
                this.addFirework(event.clientX,event.clientY)
                setTimeout(() => {
                    this.addFirework(event.clientX,event.clientY)
                }, 200);
            })
        }
    }
    addFirework(x,y){
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");
        Fireworks.push(new Firework(x,y,ctx))
    }
    render() { 
        return (<canvas></canvas>);
    }
}
 
export default BackgroundCanvas;