# Weather App in React
**A single-page mobile-friendly app built with React using 3rd-party weather API service.**
Wrote config files for Webpack and Babel from scratch, and set up the React app with proper testing and tooling without the use of Create-React-App.

## Technologies used
#### Set-up and Workflow
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

####Frontend Development
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

####Testing
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

## Description
Check daily weather (hourly forcast) and 10-day forcast in your city or in any place in the world. 
1. On the initial page load, the weather of Maple Grove, MN is shown. Users can check the weather of cities using the search bar.
2. View today's hourly forecasts till the end of the day.
3. Check weather details, include sunrise, sunset, precipitation, humidity, wind, pressure, feels like and visibility.
4. View daily forecasts for the next ten days, including the high and low temperatures.
5. Select a day to view hourly forcast and weather details.
6. Toggle between Celsius and Fahrenheit temperatures to get more adequate results.
7. Implemented custom tooltips to help users understand the metrics presented on the weather cards.
## Installation
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
## Usage
