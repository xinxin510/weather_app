import React from 'react';
import {BsSnow} from 'react-icons/bs';
import {WiDayCloudy, WiNightAltCloudy, WiCloudy, WiStrongWind, WiFog, WiRain, WiDaySunny, WiNightClear} from 'react-icons/wi';

export default function WeatherIcons({icon, size}) {
  const iconMap = {
    'snow': <BsSnow />,
    'partly-cloudy-day': <WiDayCloudy />,
    'partly-cloudy-night': <WiNightAltCloudy />,
    'cloudy': <WiCloudy />,
    'wind': <WiStrongWind />,
    'fog': <WiFog />,
    'rain': <WiRain />,
    'clear-day': <WiDaySunny />,
    'clear-night': <WiNightClear />,

  }

  return (
    <div className='weatherIcon lightBlue' style={{fontSize: size}}>
      {iconMap[icon]}
    </div>
  )
}