import React from "react";
import { parsingTime , parsingRemainTime , getIsNewYear } from './functions'

class CurrentTime extends React.Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div>
                <h1>{parsingTime(this.props.time)}</h1>
                <span>距离新年还剩 {parsingRemainTime(this.props.remainTime)}</span>
            </div>
        );
    }
}
 
export default CurrentTime;