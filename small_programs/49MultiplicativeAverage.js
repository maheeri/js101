function multiplicativeAverage(array) {
  let sum = array.reduce((acc, elem) => elem * acc, 1);
  let average = sum / array.length;
  return average.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"