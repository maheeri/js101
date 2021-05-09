function sum(num) {
  let sum = 0;
  String(num).split('').forEach(function(num) {
    sum += Number(num);
  });
  return sum;
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45