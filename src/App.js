import React from 'react';
import './App.css';
import BackgroundCanvas from './BackgroundCanvas';
import CurrentTime from './CurrentTime';


import { getIsNewYear , Firework } from './functions'

class App extends React.Component {
  constructor(props){
    super(props);

    // 硬编码新年时间,当前不清楚能干这事的api
    const newYearTime = new Date(2023,0,22,0,0,0).getTime();

    // 设置state
    this.state = {
      time: new Date(),
      isNewYear: false,
      remainTime: 0,
      fireworks: []
    };

    // react老问题了,this要手动绑定
    this.randomFirework = this.randomFirework.bind(this);
    this.addFirework = this.addFirework.bind(this);
    this.canvasOnclickHandler = this.canvasOnclickHandler.bind(this);
    this.drawTicks = this.drawTicks.bind(this);
    
    // 循环设置state
    setInterval(() => {
      // 获取当前时间
      let timeNow = Date.now()

      this.setState({
        time: timeNow,
        isNewYear: getIsNewYear(timeNow,newYearTime),
        remainTime: newYearTime - timeNow,
      })
    },300);

    setInterval(() => {
      console.log(this.state.fireworks)
      
    }, 200);

    this.drawTicks()

    this.randomFirework()
    
  }

  render(){
    return (
      <div className="App">
        <BackgroundCanvas
                          canvasOnclickHandler={this.canvasOnclickHandler}
        ></BackgroundCanvas>
        <CurrentTime time={this.state.time} 
                     isNewYear={this.state.isNewYear}
                     remainTime={this.state.remainTime}
        ></CurrentTime>
      </div>
    );
  }

  // 随机烟花部分
  randomFirework (){
    setTimeout(async () => {
      // 随机 1 - 3 个
      let fireworkCount = Math.round(Math.random() * 2);

      for (let index = 0; index < fireworkCount; index++) {
        let x = Math.random() * Math.round(window.innerWidth * 0.8) + Math.round(window.innerWidth * 0.1)
        let y = Math.random() * Math.round(window.innerHeight * 0.8) + Math.round(window.innerHeight * 0.1)
        await this.addFirework(Math.round(x),Math.round(y))
      }
      this.randomFirework();
    },  Math.round(Math.random() * 500 + 100));
  }

  // 添加烟花
  addFirework(x,y){
    return new Promise(async (resolve)=>{
      const ctx = document.querySelector("canvas").getContext("2d");

      let fireworks = [...this.state.fireworks]

      fireworks.push(new Firework(x,y,ctx))
      this.setState({
        fireworks : fireworks
      },()=>resolve()) 
      
    });
  }

  drawTicks(){
    // 清除画布
    const canvas = document.querySelector("canvas");
    if(canvas!=null){
      const ctx = canvas.getContext("2d")
      ctx.fillStyle = 'rgba(0,0,0,0.07)'
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    

      // 绘制每个烟花
      if( this.state.fireworks !== 0 ){

        this.state.fireworks.forEach((element,index)=>{
          element.drawFireworks()

          // 当烟花透明度降到0时删掉
          if(element.alpha < 0){
            let fireworks = [...this.state.fireworks]
            fireworks.splice(index,1)
            this.setState({
              fireworks: fireworks
            })
          }
        })
      }
    }

    requestAnimationFrame(this.drawTicks)
  }
  
  canvasOnclickHandler(event){
    this.addFirework(event.clientX,event.clientY)
  }
}

export default App;
