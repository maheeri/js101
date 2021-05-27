const FRIDAY = 5;

function fridayThe13ths(year) {
  let count = 0;
  let currDate = new Date(year, 0, 1);
  for (let index = 0; index < 12; index++) {
    currDate.setMonth(index);
    currDate.setDate(13);
    if (currDate.getDay() === FRIDAY) {
      count += 1;
    }
  }
  return count;
}

console.log(fridayThe13ths(1986) === 1);      // 1
console.log(fridayThe13ths(2015) === 3);      // 3
console.log(fridayThe13ths(2017) === 2);      // 2