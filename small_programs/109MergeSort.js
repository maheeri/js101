function mergeSort(array) {
  let halfLen = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, halfLen);
  let rightHalf = array.slice(halfLen);

  if (leftHalf.length <= 1 && rightHalf.length <= 1) {
    return merge(leftHalf, rightHalf);
  }

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

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

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]