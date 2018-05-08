import React from 'react';

export default ({date, month, name}) => {
    let notStartMonthClass = '';
    if(date && month && date.getMonth() !== month){
        notStartMonthClass = 'grey';
    }
    return (
        <div className={`day ${notStartMonthClass}`}>{name || date.getDate()}</div>
    )
}
