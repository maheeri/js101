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

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"