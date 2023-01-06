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
        return (<canvas onClick={(event)=>this.props.canvasOnclickHandler(event)}>您的浏览器可能不支持canvas或canvas被拦截。如需完整体验，请更换支持canvas的浏览器或针对此站点取消禁用canvas。</canvas>);
    }
}
 
export default BackgroundCanvas;