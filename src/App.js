import React from 'react';
import './App.css';
import BackgroundCanvas from './BackgroundCanvas';
import CurrentTime from './CurrentTime';


import { parsingRemainTime , getIsNewYear } from './functions'

class App extends React.Component {
  constructor(props){
    super(props);

    // 硬编码新年时间,当前不清楚能干这事的api
    const newYearTime = new Date(2023,1,22,0,0,0).getTime();

    let isNewYear = getIsNewYear(Date.now(),newYearTime)

    // 设置state
    this.state = {
      time: new Date(),
      isNewYear: isNewYear,
    };

    parsingRemainTime(1674463592982)

    // 获取当前时间
    setInterval(() => {
      let dateNow = Date.now()
      this.setState({
        time: dateNow,
        isNewYear: getIsNewYear(dateNow,newYearTime),
      })
    }, 100);
  }

  // 获取当前时间是否为新年


  render(){
    return (
      <div className="App">
        <BackgroundCanvas ></BackgroundCanvas>
        <CurrentTime time={this.state.time.toString()} 
                     isNewYear={this.state.isNewYear}
                     remainTime={}
        ></CurrentTime>
      </div>
    );
  }

}

export default App;
