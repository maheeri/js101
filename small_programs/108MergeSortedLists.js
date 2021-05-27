function merge(list1, list2) {
  let copy1 = list1.slice();
  let copy2 = list2.slice();
  let merged = [];
  while (copy1.length > 0 && copy2.length > 0) {
    if (copy1[0] < copy2[0]) {
      merged.push(copy1.shift());
    } else {
      merged.push(copy2.shift());
    }
  }

  if (copy1.length > 0) {
    return merged.concat(copy1);
  } else {
    return merged.concat(copy2);
  }
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
