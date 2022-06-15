var getCurrHour = (timeZone) => {
    var date = new Date();
    var hour = date.toLocaleString('en-US', {hour: '2-digit', hour12: false, timeZone})
    return hour[0] === 0 ? Number(hour[1]) : Number(hour);
}

var convertTime = (str) => {
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

module.exports = {
    getCurrHour,
    convertTime,
}