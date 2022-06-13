import React from 'react';
import Summary from './Summary';
import Details from './Details';
import Hourly from './Hourly';
import Forcast from './Forcast';

export default function Results({weatherInfo, metric}) {
  const [day, setDay] = React.useState(0);

  const updateDay = (index) => setDay(index);

  return (
    <div className='margin40'>
      <div className='overview flex justifySpaceBetween alignItemsCenter'>
        <Summary
          location={weatherInfo.resolvedAddress}
          dayInfo={weatherInfo.days[day]}
          day={day}
          metric={metric}
        />
        <Hourly
          timeZone={weatherInfo.timezone}
          hourlyInfo={weatherInfo.days[day].hours}
          description={weatherInfo.days[day].description}
          metric={metric}
        />
      </div>
      <Details 
        dayInfo={weatherInfo.days[day]}
        metric={metric}
      />
      <Forcast 
        forcast={weatherInfo.days.slice(0, 10)}
        day={day}
        metric={metric}
        updateDay={updateDay}
      />
    </div>
  )
}