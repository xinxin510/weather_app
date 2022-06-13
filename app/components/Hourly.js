import React from 'react';
import WeatherIcons from './WeatherIcons';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';

export default function Hourly({timeZone, hourlyInfo, description, metric}) {
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

  var backArrBtnClick = (windowWd) => {
    return windowWd <= 480 ? setAbsLeft(absLeft => absLeft+ 90 * 4) : setAbsLeft(absLeft => absLeft+ 90 * 8);
  }

  var isVisibleForwardBtn = (windowWd) => {
    var moreCards = windowWd > 480 ? (hourlyArr.length - 8) * -90 : (hourlyArr.length - 4) * -90;
    return absLeft > moreCards;
  }

  var forwardBtnClick = (windowWd) => {
    return windowWd <= 480 ? setAbsLeft(absLeft => absLeft- 90 * 4) : setAbsLeft(absLeft => absLeft- 90 * 8);
  }

  return (
    <div>
      <div className='flex gap25 alignItemsCenter'>
        <MdArrowBackIosNew
          className='arrowBtn'
          style={{visibility: absLeft < 0 ? 'visible' : 'hidden'}}
          onClick={() => backArrBtnClick(window.innerWidth)}
        />
        <div className='caurosel'>
          <div className='flex gap25 hourlyCards' style={{left: absLeft}}>
            {hourlyArr.map((hourInfo, index) => <div key={index} className='center'>
              <h5 className='marginBtm'>{index === 0 ? 'Now' : convertTime(hourInfo.datetime)}</h5>
              <div className={index === 0 ? 'hourlySubCard center currHourlySubCard' : 'hourlySubCard center'}>
                <WeatherIcons icon={hourInfo.icon} size={50} color={index === 0 ? 'darkerGreen' : 'lightBlue'}/>
                <h5>{metric === 'F' ? Math.round(hourInfo.temp) + '°' : Math.round(hourInfo.temp - 32) + '°'}</h5>
              </div>
            </div>)}
          </div>
        </div>
        <MdArrowForwardIos
          className='arrowBtn'
          style={{visibility: isVisibleForwardBtn(window.innerWidth) ? 'visible' : 'hidden'}}
          onClick={() => forwardBtnClick(window.innerWidth)}
        />
      </div>
      <p className='description'>{description}</p>
    </div>
  )
}