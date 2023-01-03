import React from 'react';
import './App.css';
import BackgroundCanvas from './BackgroundCanvas';
import CurrentTime from './CurrentTime';


import { getIsNewYear } from './functions'

class App extends React.Component {
  constructor(props){
    super(props);

    // 硬编码新年时间,当前不清楚能干这事的api
    const newYearTime = new Date(2023,0,22,0,0,0).getTime();

    // 设置state
    this.state = {
      time: new Date(),
      isNewYear: false,
      remainTime: 0
    };

    // 循环设置state
    setInterval(() => {
      // 获取当前时间
      let timeNow = Date.now()

      this.setState({
        time: timeNow,
        isNewYear: getIsNewYear(timeNow,newYearTime),
        remainTime: newYearTime - timeNow
      })
      
    }, 100);
  }

  render(){
    return (
      <div className="App">
        <BackgroundCanvas ></BackgroundCanvas>
        <CurrentTime time={this.state.time} 
                     isNewYear={this.state.isNewYear}
                     remainTime={this.state.remainTime}
        ></CurrentTime>
      </div>
    );
  }

}

export default App;
