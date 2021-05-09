function stringy(len) {
  let result = '';
  for (let idx = 0; idx < len; idx += 1) {
    if (idx % 2 !== 1) {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"