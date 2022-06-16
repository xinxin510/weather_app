import React from 'react';
import WeatherIcons from './WeatherIcons';
import {MdLocationPin} from 'react-icons/md';
import {getCityState, getDateString} from '../utils/helpers';

export default function Summary({location, dayInfo, day, metric}) {
  const {datetime, icon, temp} = dayInfo;

  return (
    <div className='flex flexCol alignItemsCenter summaryContainer'>
      <div className='flex alignItemsCenter gap15'>
        <div className='lightBlue'>
          {day === 0 && <h3>Today</h3>}
          <small>{getDateString(datetime)}</small>
        </div>
        <WeatherIcons icon={icon} size={80} color='lightBlue' />
      </div>
      <h1 data-testid='temp'>{metric === 'F' ? Math.round(temp) + '°' : Math.round((temp - 32) * 5/9) + '°'}</h1>
      <div className='flex marginTop'>
        <MdLocationPin className='locationIcon'/>
        <h5>{getCityState(location)}</h5>
      </div>
    </div>
  )
}