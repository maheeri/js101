function sumSquareDifference(num) {
  return squareOfTheSum(num) - sumOfTheSquares(num);
}

function squareOfTheSum(num) {
  let sum = 0;
  for (let curr = 1; curr <= num; curr++) {
    sum += curr;
  }
  return sum ** 2;
}

function sumOfTheSquares(num) {
  let squaresSum = 0;
  for (let curr = 1; curr <= num; curr++) {
    squaresSum += curr ** 2;
  }
  return squaresSum;
}

console.log(sumSquareDifference(3) === 22);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10) === 2640);     // 2640
console.log(sumSquareDifference(1) === 0);      // 0
console.log(sumSquareDifference(100) === 25164150);    // 25164150