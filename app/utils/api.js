import { apiKey } from '../../config';

export default function fetchWeatherData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
  return fetch(url)
  .then(res => {
    console.log('res', res);
    if (res.status === 200) {
      return res.json()
    }
    if (res.status === 400 || res.status === 404) {
      throw 'City not found';
    }
    return res.json();
  })
  .then(data => {
    console.log('fetch and get data', data);
    return data
  })
  .catch(err => {
    console.log('fetch and get err', err);
    throw err
  })
}