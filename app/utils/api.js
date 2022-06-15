const { apiKey } = require('../../config');

var fetchWeatherData = (location) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
  return fetch(url)
  .then(res => {
    if (res.status === 200) {
      return res.json()
    }
    if (res.status === 400 || res.status === 404) {
      throw 'City not found';
    }
    return res.json();
  })
  .then(data => {
    return data
  })
  .catch(err => {
    throw err
  })
}

module.exports = {fetchWeatherData};