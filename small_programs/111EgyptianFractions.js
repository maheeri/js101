var Fraction = require('fraction.js');

function egyptian(fraction) {
  let result = [];
  let remainingFraction = fraction;
  let currDenominator = 1;
  while (remainingFraction.n > 0) {
    let subtracted = remainingFraction.sub(Fraction(1).div(currDenominator));
    if (subtracted.valueOf() >= 0) {
      remainingFraction = subtracted;
      result.push(currDenominator);
    }
    currDenominator += 1;
  }
  return result;
}

function unegyptian(array) {
  let result = Fraction(0);
  array.forEach(denominator => {
    let unitFraction = Fraction(1).div(denominator);
    result = result.add(unitFraction);
  });
  return result.valueOf();
}

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3