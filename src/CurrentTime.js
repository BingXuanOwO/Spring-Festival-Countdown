import React from "react";
import { parsingTime , parsingRemainTime } from './functions'
import './CurrentTime.css'

class CurrentTime extends React.Component {
    getRemainTime(){
        if(this.props.isNewYear){
            return <h1 id="remainTime">新春快乐！</h1>
        }
        return <h1 id="remainTime">距离新春还剩 {parsingRemainTime(this.props.remainTime)}</h1>
    }
    render() { 
        return (
            <div id="timeis">
                {this.getRemainTime()}
                <span id="timeNow">当前时间 {parsingTime(this.props.time)}</span>
            </div>
        );
    }
}
 
export default CurrentTime;