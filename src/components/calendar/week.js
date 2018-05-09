import React from 'react';
import Day from './day';

export default props => {
    const daysInWeek = 7;
    const dayElements = [];
    const { start, oneDay, month, events } = props;

    for(let d = 0; d < daysInWeek; d++){
        dayElements.push(<Day key={d} month={month} date={ new Date(start.getTime() + (d * oneDay) )} events={events} />);
    }

    return (
        <div className="week">
            { dayElements }
        </div>
    );
}
