import React, { Component } from 'react';
import Week from './week';
import Day from './day';
import './calendar.css';

const daysOfWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class Calendar extends Component {
    constructor(props){
        super(props);

        this.state = {
            weeks: [],
            events: {
                '5/8/2018': [
                    { 
                        time: '1:00 pm',
                        title: 'Go To Work Meeting'
                    },
                    {
                        time: '3:30 pm',
                        title: 'Lunch Meeting'
                    }
                ],
                '5/12/2018': [
                    {
                        time: '12:00 pm',
                        title: 'Take do for walk'
                    }
                ]
            }
        }

        const now = new Date()

        this.start = new Date(`${now.getMonth() + 1}/1/${now.getFullYear()}`);
        this.oneDay = 24 * 60 * 60 * 1000;
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.weekCount = 5;
    }

    componentDidMount(){
        this.buildWeekArray();
    }
    
    buildWeekArray(){
        const { start } = this;
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
        const { start } = this;
        const prevMonth = start.getMonth() - 1;
        start.setMonth(prevMonth);
        
        this.start = new Date(start.getTime());
        
        this.buildWeekArray()
    }

    nextMonth(){
        const { start } = this;
        const prevMonth = start.getMonth() + 1;
        start.setMonth(prevMonth);

        this.start = new Date(start.getTime());

        this.buildWeekArray()
    }

    render() {

        const { weeks, events } = this.state;
        const { start } = this;

        const weekElements = weeks.map((start, index) => {
            return <Week key={index} start={start} month={this.start.getMonth()} oneDay={this.oneDay} onClick={this.addEvent} events={events}/>
        });

        const dayNameElements = daysOfWeekNames.map((name, index) => {
            return <Day key={index} name={name}/>
        });

        return (
            <div className="calendar-container">
        <div className="yearmonth">
                <h1>
                    <i onClick={this.previousMonth.bind(this)} className="material-icons">keyboard_arrow_left</i>
                    <h2>
                    {this.monthNames[start.getMonth()]} {start.getFullYear()}
                    </h2>
                    <i onClick={this.nextMonth.bind(this)} className="material-icons">keyboard_arrow_right</i>
                </h1>
            </div>
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
