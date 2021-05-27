function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }

  let prev = 1;
  let prevMinusOne = 1;
  let sum = 0;
  for (let index = 3; index <= num; index++) {
    sum = prev + prevMinusOne;
    prevMinusOne = prev;
    prev = sum;
  }
  return sum;
}

console.log(fibonacci(20) === 6765);       // 6765
console.log(fibonacci(50) === 12586269025);       // 12586269025
console.log(fibonacci(75) === 2111485077978050);       // 2111485077978050