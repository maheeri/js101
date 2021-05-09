const MINUTES_PER_DAY = 24 * 60;
const MINUTES_PER_HOUR = 60;

function pad(num) {
  if (num < 10) {
    return '0' + num;
  }
  return `${num}`;
}

function timeOfDay(time) {
  let positiveTime = 0;
  if (time < 0) {
    positiveTime = (time % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    positiveTime = time % MINUTES_PER_DAY;
  }

  let fractionalHours = positiveTime / MINUTES_PER_HOUR;
  let hours = Math.floor(fractionalHours);
  let minutes = Math.round((fractionalHours - hours) * MINUTES_PER_HOUR);
  return `${pad(hours)}:${pad(minutes)}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");