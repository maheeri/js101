function sumOfSums(nums) {
  let result = 0;
  let prev = 0;
  for (let idx = 0; idx < nums.length; idx++) {
    prev += nums[idx];
    result += prev;
  }
  return result;
}

console.log(sumOfSums([3, 5, 2]) === 21);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]) === 36);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]) === 4);              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]) === 35);  // 35