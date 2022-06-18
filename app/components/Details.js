import React from 'react';
import WeatherIcons from './WeatherIcons';
import {convertHourMinutesTime} from '../utils/helpers';
import Tooltip from './Tooltip';
import {FiInfo} from 'react-icons/fi';

export default function Details({dayInfo, metric}) {
  const {sunrise, sunset, precip, humidity, windspeed, pressure, feelslike, visibility} = dayInfo;

  const detailsMap = {
    'sunrise': convertHourMinutesTime(sunrise),
    'sunset': convertHourMinutesTime(sunset),
    'precipitation': Math.round(precip) + '%',
    'humidity': Math.round(humidity) + '%',
    'wind': Math.round(windspeed) + ' mile/h',
    'pressure': Math.round(pressure) + ' hPa',
    'feels like': Math.round(feelslike) + '°',
    'visibility': Math.round(visibility) + ' mile'
  }

  return (
    <div className='detailsContainer'>
      <h3 className='lightBlue marginTop marginBtm'>Weather Details</h3>
      <div className='flex gap15 justifySpaceBetween flexWrap'>
        {Object.keys(detailsMap).map(card => {
          return (
            <div className='detailCard flex gap25 justifySpaceBetween' key={card}>
              <div>
                <Tooltip title={card}>
                  <small className='darkGreen uppercase border'>{card} <FiInfo /></small>
                </Tooltip>
                <h3>{card === 'feels like' && metric === 'C' ? `${Math.round(Number(detailsMap[card].slice(0, detailsMap[card].length - 1) - 32) *  5/9)}°`  : detailsMap[card]}</h3>
              </div>
              <WeatherIcons icon={card} size={50}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}