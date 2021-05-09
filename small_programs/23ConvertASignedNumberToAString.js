const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(int) {
  if (int === 0) {
    return '0';
  }

  let converted = '';
  let dividend = int;
  while (dividend > 0) {
    let remainder = dividend % 10;
    converted = DIGITS[remainder] + converted;
    dividend = Math.floor(dividend / 10);
  }
  return converted;
}

function signedIntegerToString(int) {
  if (int < 0) {
    return `-${integerToString(-int)}`;
  } else if (int > 0) {
    return `+${integerToString(int)}`;
  }
  return integerToString(int);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");