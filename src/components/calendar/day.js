import React from 'react';

export default ({date, month, name, events}) => {
    let notStartMonthClass = '';
    let eventElements = []
    if(date && month && date.getMonth() !== month){
        notStartMonthClass = 'grey';
    }

    if(events){
        const daysEvents = events[date.toLocaleDateString()];

        if(daysEvents){
            eventElements = daysEvents.map(({time, title}, index) => {
                return (
                    <div key={index} className="event">
                        <div className="time">{time}</div>
                        <span className="title">{title}</span>
                    </div>
                )
            });
        }
    }


    return (
        <div className={`day ${notStartMonthClass}`}>
            <div className="day-number">{name || date.getDate()}</div>
            {eventElements}
        </div>
    )
}
