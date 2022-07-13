# weather_app
A simple weather mobile-friendly web app built with React.

##Table of Contents

##Description
Check daily weather (hourly forcast) and 10-day forcast in your city or in any place in the world. 
1. On the initial page load, the weather of Maple Grove, MN is shown. Users can check the weather of cities using the search bar.
2. View today's hourly forecasts till the end of the day.
3. Check weather details, include sunrise, sunset, precipitation, humidity, wind, pressure, feels like and visibility.
4. View daily forecasts for the next ten days, including the high and low temperatures.
5. Select a day to view hourly forcast and weather details.
6. Toggle between Celsius and Fahrenheit temperatures to get more adequate results.

##Installation
1. Install dependencies:
```bash
npm install
```
2. Get your API key from [visualcrossing](https://www.visualcrossing.com/)
3. Create a file named as `config.js`
```
module.exports = {
  apiKey: 'YOUR_KEY_HERE'
}
```
4. To run:
```bash
npm run start
npm run build
```
5. Open the project in your web browser http://localhost:8080/ 
##Usage
