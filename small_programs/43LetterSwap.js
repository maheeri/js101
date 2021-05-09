function swapLetters(word) {
  let len = word.length;

  if (len === 1) {
    return word;
  }

  return word[len - 1] + word.slice(1, -1) + word[0];
}

function swap(sentence) {
  return sentence.split(' ').map(word => {
    return swapLetters(word);
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                             // "a"
console.log(swap('ab'));                              // "ba"