function multiplyList(array1, array2) {
  let result = [];
  for (let idx = 0; idx < array1.length; idx++) {
    result.push(array1[idx] * array2[idx]);
  }
  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]