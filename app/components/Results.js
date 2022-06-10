import React from 'react';
import Summary from './Summary';
import Details from './Details';

export default function Results({weatherInfo}) {
  const [day, setDay] = React.useState(0);
  console.log('result day', Array.isArray(weatherInfo.days))
  console.log('result day', weatherInfo.days)
  console.log('3333', weatherInfo.days[0])
  return (
    <div>
      <Summary />
      <Details dayInfo={weatherInfo.days}/>
    </div>
  )
}