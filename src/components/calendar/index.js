import React, { Component } from 'react';
import Week from './week';
import Day from './day';
import './calendar.css';

const daysOfWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class Calendar extends Component {
    constructor(props){
        super(props);

        this.state = {
            start: new Date('2018/5/1'),
            weeks: []
        }

        this.oneDay = 24 * 60 * 60 * 1000;
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.weekCount = 5;
    }

    componentDidMount(){
        this.buildWeekArray();
    }
    
    buildWeekArray(){
        const { start } = this.state;
        const today = start.getDay();

        const startDates = [];

        startDates.push(new Date(start.getTime() - (this.oneDay * today ) ));

        for(let d = 1; d < this.weekCount; d++){
            startDates.push(new Date(startDates[0].getTime() + (this.oneDay * 7 * d)));
        }

        this.setState({
            weeks: startDates
        });
    }

    previousMonth(){
        const { start } = this.state;
        const prevMonth = start.getMonth() - 1;
        start.setMonth(prevMonth);
        const newDate = new Date(start.getTime());

        this.setState({
            start: new Date(newDate)
        }, this.buildWeekArray);
    }

    nextMonth(){
        const { start } = this.state;
        const prevMonth = start.getMonth() + 1;
        start.setMonth(prevMonth);
        const newDate = new Date(start.getTime());

        this.setState({
            start: new Date(newDate)
        }, this.buildWeekArray);
    }

    render() {

        const { weeks, start } = this.state;

        const weekElements = weeks.map((start, index) => {
            return <Week key={index} start={start} month={this.state.start.getMonth()} oneDay={this.oneDay}/>
        });

        const dayNameElements = daysOfWeekNames.map((name, index) => {
            return <Day key={index} name={name}/>
        });

        return (
            <div className="calendar-container">
                <button onClick={this.previousMonth.bind(this)}>Previous Month</button>
                <button onClick={this.nextMonth.bind(this)}>Next Month</button>
                <h1>{this.monthNames[start.getMonth()]} {start.getFullYear()}</h1>
                <div className="calendar-body">
                    <div className="day-names">
                        {dayNameElements}
                    </div>
                    {weekElements}
                </div>
            </div>
        )
    }
}

export default Calendar;
