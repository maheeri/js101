function padded(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}

function convertToPositive(num) {
  let positiveNum = num;
  while (positiveNum < 0) {
    positiveNum += 360;
  }
  return positiveNum;
}

function dms(num) {
  let positiveNum = convertToPositive(num);
  let degrees = Math.floor(positiveNum);

  let fractionalMins = positiveNum - degrees;
  let minsAndSeconds = fractionalMins * 60;
  let mins = Math.floor(minsAndSeconds);

  let fractionalSecs = minsAndSeconds - mins;
  let secs = (fractionalSecs * 60).toFixed(0);

  return `${degrees}°${padded(mins)}'${padded(secs)}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // -1°00'00"
console.log(dms(400));  // 400°00'00"
console.log(dms(-40));  // -40°00'00"
console.log(dms(-420)); // 420°00'00"