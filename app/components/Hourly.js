import React from 'react';
import WeatherIcons from './WeatherIcons';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';

export default function Hourly({timeZone, hourlyInfo}) {
  const [absLeft, setAbsLeft] = React.useState(0);

  var getCurrHour = (timeZone) => {
    var date = new Date();
    var hour = date.toLocaleString('en-US', {hour: '2-digit', hour12: false, timeZone})
    return hour[0] === 0 ? Number(hour[1]) : Number(hour);
  }

  var hourlyArr = hourlyInfo.filter((hour, index) => index >= getCurrHour(timeZone))

  var convertTime = (str) => {
    var time = Number(str.slice(0, 2));
    if (time === 0) {
      return '12 am';
    } else if (time > 0 && time < 12) {
      return time + ' am';
    } else if (time === 12) {
      return '12 pm';
    } else {
      return (time - 12) + ' pm';
    }
  }

  return (
    <div className='flex gap25 alignItemsCenter'>
      <MdArrowBackIosNew
        style={{visibility: absLeft < 0 ? 'visible' : 'hidden'}}
        onClick={() => setAbsLeft(absLeft => absLeft+90)}
      />
      <div className='caurosel'>
        <div className='flex gap25 hourlyCards' style={{left: absLeft}}>
          {hourlyArr.map((hourInfo, index) => <div key={index} className='center'>
            <h5 className='marginBtm'>{index === 0 ? 'Now' : convertTime(hourInfo.datetime)}</h5>
            <div className={index === 0 ? 'hourlySubCard center currHourlySubCard' : 'hourlySubCard center'}>
              <div><WeatherIcons icon={hourInfo.icon} size={50}/></div>
              <h5>{Math.round(hourInfo.temp)}</h5>
            </div>
          </div>)}
        </div>
      </div>
      <MdArrowForwardIos
        style={{visibility: absLeft > (hourlyArr.length - 8) * -90 ? 'visible' : 'hidden'}}
        onClick={() => setAbsLeft(absLeft => absLeft-90)}
      />
    </div>
  )
}