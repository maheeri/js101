const LIMIT = 9876543201;

function featured(num) {
  let nextOddMultiple = nextOddMultipleOfSeven(num);
  while (!hasDistinctDigits(nextOddMultiple)) {
    if (nextOddMultiple > LIMIT) {
      return "There is no possible number that fulfills those requirements.";
    }
    nextOddMultiple += 14;
  }
  return nextOddMultiple;
}

function hasDistinctDigits(num) {
  let digits = String(num).split('');
  while (digits.length > 0) {
    let curr = digits.pop();
    if (digits.includes(curr)) {
      return false;
    }
  }
  return true;
}

function nextOddMultipleOfSeven(num) {
  let incrementToNextMultiple = 7 - (num % 7);
  let multiple = num + incrementToNextMultiple;
  if (multiple % 2 === 0) {
    return multiple + 7;
  }
  return multiple;
}

console.log(featured(12) === 21);           // 21
console.log(featured(20) === 21);           // 21
console.log(featured(21) === 35);           // 35
console.log(featured(997) === 1029);          // 1029
console.log(featured(1029) === 1043);         // 1043
console.log(featured(999999) === 1023547);       // 1023547
console.log(featured(999999987) === 1023456987);    // 1023456987
console.log(featured(9876543186) === 9876543201);   // 9876543201
console.log(featured(9876543200) === 9876543201);   // 9876543201
console.log(featured(9876543201) === "There is no possible number that fulfills those requirements.");   // "There is no possible number that fulfills those requirements."