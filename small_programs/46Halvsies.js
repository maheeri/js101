function halvsies(array) {
  let mid = Math.ceil(array.length / 2);
  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid);
  return [leftArray, rightArray];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]