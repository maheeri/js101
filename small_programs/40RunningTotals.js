function runningTotal(nums) {
  let runningTotals = [0];
  for (let idx = 0; idx < nums.length; idx += 1) {
    runningTotals.push(runningTotals[idx] + nums[idx]);
  }
  return runningTotals.slice(1);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []