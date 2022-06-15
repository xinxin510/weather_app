import React from 'react';
import '../index.css';
import Nav from './Nav';
import NotFound from './NotFound';
import Loading from './Loading';
import Results from './Results';
import {fetchWeatherData} from '../utils/api';

export default function App () {
  const [city, setCity] = React.useState('Maple Grove');
  const [weatherInfo, setWeatherInfo] = React.useState(null);
  const [metric, setMetric] = React.useState('F');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchWeatherData(city)
    .then(data => {
      setWeatherInfo(data);
      setError(null);
    })
    .catch((err) => {
      setError(err);
      setWeatherInfo(null)
    })
  }, [city])

  const toggleMetric = () => setMetric(metric => metric === 'F' ? 'C' : 'F');


  return (
    <div className='container'>
      <Nav metric={metric} setCity={setCity} toggleMetric={toggleMetric}/>
      {error && <NotFound errorMsg={error}/>}
      {!error && !weatherInfo && <Loading />} 
      {!error && weatherInfo && <Results weatherInfo={weatherInfo} metric={metric}/>}
    </div>
  );
}
