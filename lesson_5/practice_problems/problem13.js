let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function oddSum(arr) {
  return arr.reduce((acc, num) => (num % 2 === 1 ? acc + num : acc));
}

function oddSumCompare(a, b) {
  let oddSumA = oddSum(a);
  let oddSumB = oddSum(b);
  return oddSumA - oddSumB;
}

arr.sort(oddSumCompare);

console.log(arr);
