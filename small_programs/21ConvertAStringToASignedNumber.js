function stringToInteger(str) {
  let currBase = 1;
  let result = 0;
  for (let idx = str.length - 1; idx >= 0; idx -= 1) {
    result += str.charAt(idx) * currBase;
    currBase *= 10;
  }
  return result;
}

function stringToSignedInteger(str) {
  if (str[0] === '-') {
    return -stringToInteger(str.slice(1));
  } else if (str[0] === '+') {
    return stringToInteger(str.slice(1));
  }
  return stringToInteger(str);
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true