let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

function sorted(array) {
  return array.slice().map(subarray => {
    if (typeof subarray[0] === 'number') {
      return subarray.slice().sort((a, b) => b - a);
    } else {
      return subarray.slice().sort().reverse();
    }
  });
}

console.log(sorted(arr));