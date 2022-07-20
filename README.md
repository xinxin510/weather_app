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
![weather search](https://user-images.githubusercontent.com/84343573/179142020-5717b105-75d8-45c4-8455-2247fe2f6617.gif)
2. View today's hourly forecasts till the end of the day.
3. Check weather details, include sunrise, sunset, precipitation, humidity, wind, pressure, feels like and visibility.
![hourly weather](https://user-images.githubusercontent.com/84343573/179142875-c297b5aa-ebcd-4734-99b6-0ecf84d2113a.gif)
4. View daily forecasts for the next ten days, including the high and low temperatures.
5. Select a day to view hourly forcast and weather details.
![forcast](https://user-images.githubusercontent.com/84343573/179143362-692d44bf-e9d0-449c-b1d7-4291971cff9d.gif)
6. Toggle between Celsius and Fahrenheit temperatures to get more adequate results.
![toggle](https://user-images.githubusercontent.com/84343573/179143767-4a316350-0d90-4a88-87a1-d0c83f6f89b8.gif)
7. Implemented custom tooltips to help users understand the metrics presented on the weather cards.
![tooltip](https://user-images.githubusercontent.com/84343573/179144070-9a1090f0-1655-4b16-8e6b-c0f0464968d7.gif)

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
