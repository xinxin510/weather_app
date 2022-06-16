import React from 'react';
import WeatherIcons from './WeatherIcons';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
import {getCurrHour, convertHourTime} from '../utils/helpers';

export default function Hourly({timeZone, hourlyInfo, description, metric, isToday, absLeft, setAbsLeft}) {

  var hourlyArr = isToday ? hourlyInfo.filter((hour, index) => index >= getCurrHour(timeZone)) : hourlyInfo;

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
          data-testid="backArrow"
        />
        <div className='caurosel'>
          <div className='flex gap25 hourlyCards' style={{left: absLeft}}>
            {hourlyArr.map((hourInfo, index) => <div key={index} className='center'>
              <h5 className='marginBtm'>{isToday && index === 0 ? 'Now' : convertHourTime(hourInfo.datetime)}</h5>
              <div className={index === 0 ? 'hourlySubCard center currHourlySubCard' : 'hourlySubCard center'}>
                <WeatherIcons icon={hourInfo.icon} size={50} color={index === 0 ? 'darkerGreen' : 'lightBlue'}/>
                <h5>{metric === 'F' ? Math.round(hourInfo.temp) + '°' : Math.round((hourInfo.temp - 32) *  5/9) + '°'}</h5>
              </div>
            </div>)}
          </div>
        </div>
        <MdArrowForwardIos
          className='arrowBtn'
          style={{visibility: isVisibleForwardBtn(window.innerWidth) ? 'visible' : 'hidden'}}
          onClick={() => forwardBtnClick(window.innerWidth)}
          data-testid="forwardArrow"
        />
      </div>
      <p className='description'>{description}</p>
    </div>
  )
}