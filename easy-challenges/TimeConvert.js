const assert = require('assert');
// Have function TimeConvert(num) take the num
// parameter being passed and return the number of hours
// and minutes the parameter converts to
// (ie. if num = 63 then the output should be 1:3).
const timeConvert = num => {
  let hours = 0;
  let minutes = 0;

  for (let i = 0; i <= num; i += 60) {
    // loop through number every 60
    if (num >= 60) {
      // for every 60 add 1 hour
      hours += 1;
    } else if (num < 60) {
      minutes = num;
    }
  }

  let newMinutes = 0;
  if (minutes < 10) {
    newMinutes = `0${minutes}`;
  } else if (minutes > 10) {
    newMinutes = minutes;
  }

  return `${hours}:${newMinutes}`;
};

console.log(timeConvert(141));

// const a1 = "hours";
const r1 = 'minutes';

assert(r1);