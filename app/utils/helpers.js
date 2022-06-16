var getCurrHour = (timeZone) => {
    var date = new Date();
    var hour = date.toLocaleString('en-US', {hour: '2-digit', hour12: false, timeZone})
    return hour[0] === 0 ? Number(hour[1]) : Number(hour);
}

var convertHourTime = (str) => {
    var time = Number(str.slice(0, 2));
    if (time === 0) {
      return '12 am';
    } else if (time > 0 && time < 12) {
      return time + ' am';
    } else if (time === 12) {
      return '12 pm';
    } else {
      return (time - 12) + ' pm';
    }
}

const convertHourMinutesTime = (str) => {
  var hour = Number(str.slice(0,2));
  var min = str.slice(3, 5);
  if (hour === 0) {
    return '12:' + min + ' am';
  } else if (hour > 0 && hour < 12) {
    return hour + ':' + min + ' am';
  } else if (hour === 12) {
    return '12:' + min + 'pm'
  } else {
    return (hour - 12) + ':' + min + ' pm';
  }
}

const getCityState = (location) => {
  var array = location.split(',');
  var city = array[0] + ', ' + array[1];
  return city;
}

const getDateString = (date) => {
  var dateArr = date.split('-');
  dateArr[1] = Number(dateArr[1]) - 1;
  var date = new Date(...dateArr);
  var formatedDate = date.toUTCString();
  var yearIndex = formatedDate.indexOf(dateArr[0]);
  return formatedDate.slice(0, yearIndex - 1);
}

module.exports = {
    getCurrHour,
    convertHourTime,
    convertHourMinutesTime,
    getCityState,
    getDateString
}