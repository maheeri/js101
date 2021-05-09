function deduplicate(array) {
  let deduped = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    if (!deduped.includes(array[idx])) {
      deduped.push(array[idx]);
    }
  }
  return deduped;
}

function union(array1, array2) {

  array1.push(...array2);
  return deduplicate(array1);
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]