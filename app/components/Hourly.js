import React from 'react';

export default function Hourly(timeZone, hourlyInfo) {

  var getCurrHour = (timeZone) => {
    console.log('getCurrHour')
    var date = new Date(0);
    var hour = date.toLocaleString('en-US', {hour: '2-digit', hour12: false, timeZone})
    console.log('hour', hour);
    return hour
  }

  return (
    <div>
      hi
      {getCurrHour(timeZone)}
    </div>
  )
}