import React from 'react';
import Summary from './Summary';
import Details from './Details';
import Hourly from './hourly';

export default function Results({weatherInfo}) {
  const [day, setDay] = React.useState(0);
  return (
    <div className='margin40'>
      <div className='overview'>
        <Summary
          location={weatherInfo.resolvedAddress}
          alerts={weatherInfo.alerts}
          dayInfo={weatherInfo.days[day]}
          day={day}
        />
        <Hourly
          timeZone={weatherInfo.timezone}
          hourlyInfo={weatherInfo.days[day].hours}
        />
      </div>
      <Details dayInfo={weatherInfo.days[day]}/>
    </div>
  )
}