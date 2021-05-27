function maxRotation(number) {
  let len = String(number).length;
  let result = number;
  for (let numToRotate = len; numToRotate > 1; numToRotate--) {
    result = rotateRightmostDigits(result, numToRotate);
  }
  return result;
}

function rotateRightmostDigits(number, numToRotate) {
  let numberArray = String(number).split('');
  let len = numberArray.length;
  let nonRotatedArray = numberArray.slice(0, len - numToRotate);
  let rotatedArray = rotateArray(numberArray.slice(len - numToRotate));
  let result = Number(nonRotatedArray.join('') + rotatedArray.join(''));
  return result;
}

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  let result = array.slice();
  let firstElement = result.splice(0, 1)[0];
  result.push(firstElement);
  return result;
}

console.log(maxRotation(735291) === 321579);          // 321579
console.log(maxRotation(3) === 3);               // 3
console.log(maxRotation(35) === 53);              // 53
console.log(maxRotation(105) === 15);             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);      // 7321609845