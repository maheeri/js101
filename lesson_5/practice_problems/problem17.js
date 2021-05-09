let HEX_CHARS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function randomHexCharString(length) {
  let result = '';
  for (let index = 0; index < length; index++) {
    let randomIdx = Math.floor(Math.random() * HEX_CHARS.length);
    let randomHexChar = HEX_CHARS[randomIdx];
    result += randomHexChar;
  }
  return result;
}

function generateUUID() {
  return randomHexCharString(8) + '-' +
    randomHexCharString(4) + '-' +
    randomHexCharString(4) + '-' +
    randomHexCharString(4) + '-' +
    randomHexCharString(12);
}

console.log(generateUUID());

