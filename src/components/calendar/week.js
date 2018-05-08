import React from 'react';
import Day from './day';

export default props => {
    const daysInWeek = 7;
    const dayElements = [];

    for(let d = 0; d < daysInWeek; d++){
        dayElements.push(<Day day={props.start + d}/>);
    }
    
    return (
        <div className="week">
            { dayElements }
        </div>
    );
}
