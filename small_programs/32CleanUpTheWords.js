let ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'];

function cleanUp(str) {
  let result = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if (ALPHABET.includes(str[idx].toLowerCase())) {
      result += str[idx];
    } else if (result[result.length - 1] !== ' ') {
      result += ' ';
    }
  }
  return result;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "