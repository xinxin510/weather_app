# Weather App in React
**A single-page mobile-friendly app built with React using 3rd-party weather API service.**
Wrote config files for Webpack and Babel from scratch, and set up the React app with proper testing and tooling without the use of Create-React-App.

## Technologies used
#### Set-up and Workflow
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

#### Frontend Development
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

#### Testing
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

## Description
Check daily weather (hourly forcast) and 10-day forcast in your city or in any place in the world. 
1. On the initial page load, the weather of Maple Grove, MN is shown. Users can check the weather of cities using the search bar.
![Weather search](https://user-images.githubusercontent.com/84343573/179140852-4ac454a8-fbdb-413b-927e-8ab21ce8795b.gif)
2. View today's hourly forecasts till the end of the day.
3. Check weather details, include sunrise, sunset, precipitation, humidity, wind, pressure, feels like and visibility.
4. View daily forecasts for the next ten days, including the high and low temperatures.
5. Select a day to view hourly forcast and weather details.
6. Toggle between Celsius and Fahrenheit temperatures to get more adequate results.
7. Implemented custom tooltips to help users understand the metrics presented on the weather cards.

![]([https://www.dropbox.com/s/dxdzqqz3btkvql8/weather_app_record.gif?raw=1](https://uc3df7267ab1a2521d7c31026515.dl.dropboxusercontent.com/cd/0/inline/BpFlI8AcL95NgiDJrEQwjLVnvOc6Dso4DhAVua2P59Vpl4GTJlOqHZiz_HSDD3dXqYZEM3lkV5wn8OicRmXMfwSNP9JOSJpmLjHMU4xm8th3skzaeV-GokfoDtDr6k8a8voMpyZ59N5iLI7YHgTZDzKpJAC0FgthyxzdtMG0q9WT-A/file#))

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
4. Run webpack in development with:
```bash
npm run start
```
5. Open the project in your web browser http://localhost:8080/ 
## Usage
