import React from 'react';
import WeatherIcons from './WeatherIcons';

export default function Forcast({forcast, day, metric, updateDay}) {
    const getDateString = (date) => {
        var dateArr = date.split('-');
        dateArr[1] = Number(dateArr[1]) - 1;
        var date = new Date(...dateArr);
        var formatedDate = date.toUTCString();
        var formatedDateArr = formatedDate.split(',');
        return formatedDateArr[0];
    }

    const getMinMaxTemp = (hours, indicator, metric) => {
        var result = hours[0].temp;
        hours.slice(1).forEach(hour => {
            indicator === 'min' ? 
            result = Math.min(result, hour.temp) : 
            result = Math.max(result, hour.temp)
        })
        result = Math.round(result);
        return metric === 'F' ? result + '°' : (result - 32) + '°';
    }

    return (
        <div>
            <h3 className='lightBlue marginTop marginBtm'>10-day Forcast</h3>
            <div className=' flex flexCol gap25'>
                {forcast.map((dayInfo, index) => {
                    return(
                        <div 
                            key={index} 
                            className={index === day ? 'flex justifySpaceBetween alignItemsCenter forcastCard currForcastCard' : 'flex justifySpaceBetween alignItemsCenter forcastCard'}
                            onClick={() => updateDay(index)}
                        >
                            <h4>{index === 0 ? 'Today' : getDateString(dayInfo.datetime)}</h4>
                            <WeatherIcons icon={dayInfo.icon} size={50}/> 
                            <div className='flex gap25'>
                                <h4>{getMinMaxTemp(dayInfo.hours, 'min', metric)}</h4>
                                <h4>{getMinMaxTemp(dayInfo.hours, 'max', metric)}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}