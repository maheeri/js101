const BLOCKS = {
  B: 'O',
  X: 'K',
  D: 'Q',
  C: 'P',
  N: 'A',
  G: 'T',
  R: 'E',
  F: 'S',
  J: 'W',
  H: 'U',
  V: 'I',
  L: 'Y',
  Z: 'M',
  O: 'B',
  K: 'X',
  Q: 'D',
  P: 'C',
  A: 'N',
  T: 'G',
  E: 'R',
  S: 'F',
  W: 'J',
  U: 'H',
  I: 'V',
  Y: 'L',
  M: 'Z'
};

function isBlockWord(word) {
  let normalized = word.toUpperCase();
  let seen = [];
  let letters = normalized.split('');
  for (let index = 0; index < letters.length; index++) {
    let letter = letters[index];
    if (seen.includes(letter) || seen.includes(BLOCKS[letter])) {
      return false;
    }
    seen.push(letter);
  }
  return true;
}

console.log(isBlockWord('BATCH') === true);      // true
console.log(isBlockWord('BUTCH') === false);      // false
console.log(isBlockWord('jest') === true);       // true
console.log(isBlockWord('floW') === true);       // true
console.log(isBlockWord('APPLE') === false);      // false
console.log(isBlockWord('apple') === false);      // false
console.log(isBlockWord('apPLE') === false);      // false
console.log(isBlockWord('Box') === false);        // false