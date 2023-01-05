import React from "react";
import './BackgroundCanvas.css'

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
        }
    }

    render() { 
        return (<canvas onClick={(event)=>this.props.canvasOnclickHandler(event)}></canvas>);
    }
}
 
export default BackgroundCanvas;