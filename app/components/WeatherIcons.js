import React from 'react';
import {BsSnow} from 'react-icons/bs';
import {WiDayCloudy, WiNightAltCloudy, WiCloudy, WiStrongWind, WiFog, WiRain, WiDaySunny, WiNightClear, WiHumidity} from 'react-icons/wi';
import {FiSunrise, FiSunset} from 'react-icons/fi';
import {SiRainmeter} from 'react-icons/si';
import {TbWind, TbArrowsDown} from 'react-icons/tb';
import {RiTempColdLine} from 'react-icons/ri';
import {MdVisibility} from 'react-icons/md';


export default function WeatherIcons({icon, size, color}) {
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
    'sunrise': <FiSunrise />,
    'sunset': <FiSunset />,
    'precipitation': <SiRainmeter />,
    'humidity': <WiHumidity />,
    'wind': <TbWind />,
    'pressure': <TbArrowsDown />,
    'feels like': <RiTempColdLine />,
    'visibility': <MdVisibility />
  }

  return (
    <div className={color} style={{fontSize: size, height: size}}>
      {iconMap[icon]}
    </div>
  )
}