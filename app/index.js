import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import Results from './components/Results';
import fetchWeatherData from './utils/api';

function App () {
  const [city, setCity] = React.useState('London');
  const [weatherInfo, setWeatherInfo] = React.useState([]);
  const [metric, setMetric] = React.useState('F');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    console.log('fetch data');
    fetchWeatherData(city)
    .then(data => {
      console.log('data in index', data);
      setWeatherInfo(data)
    })
    .catch((err) => {
      console.log('err in index', err);
      setError(err)
    })
  }, [city])

  const toggleMetric = () => setMetric(metric => metric === 'F' ? 'C' : 'F');

  const search = (city) => setCity(city);

  return (
    <div className='container'>
      <Nav metric={metric} search={search} toggleMetric={toggleMetric}/>
      {error ? <NotFound errorMsg={error}/> : <Results />}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))
