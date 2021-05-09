function century(year) {
  let centuryNumber = String(Math.ceil(year / 100));
  if (centuryNumber.length >= 2) {
    let len = centuryNumber.length;
    let lastTwo = Number(centuryNumber.substring(len - 2));
    if (lastTwo > 10 && lastTwo < 20) {
      return centuryNumber + 'th';
    }
  }

  if (centuryNumber % 10 === 1) {
    return centuryNumber + 'st';
  } else if (centuryNumber % 10 === 2) {
    return centuryNumber + 'nd';
  } else if (centuryNumber % 10 === 3) {
    return centuryNumber + 'rd';
  }
  return centuryNumber + 'th';
}

console.log(century(2000) === '20th');
console.log(century(2001) === '21st');
console.log(century(1965) === '20th');
console.log(century(256) === '3rd');
console.log(century(5) === '1st');
console.log(century(10103) === '102nd');
console.log(century(1052) === '11th');
console.log(century(1127) === '12th');
console.log(century(11201) === '113th');