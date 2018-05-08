import React, { Component } from 'react';
import Week from './week';
import Day from './day';
import './calendar.css';

const daysOfWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class Calendar extends Component {

    render() {
         
        // Start date for each week
        const weeks = [1, 8, 15, 22];

        const weekElements = weeks.map((start, index) => {
            return <Week key={index} start={start}/>
        });

        const dayNameElements = daysOfWeekNames.map((name, index) => {
            return <Day key={index} day={name}/>
        });

        return (
            <div className="calendar-container">
                <h1>Calendar Here</h1>

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
