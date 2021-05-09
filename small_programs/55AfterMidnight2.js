let MINS_PER_HOUR = 60;
let MINS_PER_DAY = MINS_PER_HOUR * 24;

function timeToHoursAndMins(time) {
  let timeComponents = time.split(':');
  let hours = Number(timeComponents[0]);
  let mins = Number(timeComponents[1]);
  return [hours, mins];
}

function afterMidnight(time) {
  let [hours, mins] = timeToHoursAndMins(time);
  return ((hours * MINS_PER_HOUR) + mins) % MINS_PER_DAY;
}


function beforeMidnight(time) {
  return (MINS_PER_DAY - afterMidnight(time)) % MINS_PER_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);