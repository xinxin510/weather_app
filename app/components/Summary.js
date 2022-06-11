import React from 'react';
import WeatherIcons from './WeatherIcons';
import {MdLocationPin} from 'react-icons/md';

export default function Summary({location, alerts, dayInfo, day}) {
  const {datetime, description, icon, temp} = dayInfo;

  const getDateString = (date) => {
    var dateArr = date.split('-');
    dateArr[1] = Number(dateArr[1]) - 1;
    var date = new Date(...dateArr);
    var formatedDate = date.toUTCString();
    var yearIndex = formatedDate.indexOf(dateArr[0]);
    return formatedDate.slice(0, yearIndex - 1);
  }

  const getCity = (location) => {
    var array = location.split(',');
    var city = array[0] + ', ' + array[1];
    return city;
  }

  return (
    <div className='flex flexCol alignItemsCenter summaryContainer'>
      <div className='flex alignItemsTop gap15'>
        <div className='lightBlue'>
          {day === 0 && <h3>Today</h3>}
          <small>{getDateString(datetime)}</small>
        </div>
        <WeatherIcons icon={icon} size={80}/>
      </div>
      <h1>{Math.round(temp)}</h1>
      <div className='flex'>
        <MdLocationPin className='locationIcon'/>
        <h5>{getCity(location)}</h5>
      </div>
    </div>
  )
}