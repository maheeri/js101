function stringToInteger(str) {
  let currBase = 1;
  let result = 0;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str.charAt(i) * currBase;
    currBase *= 10;
  }
  return result;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true