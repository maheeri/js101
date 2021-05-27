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

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);