const WORD_TO_DIGIT = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

function wordToDigit(sentence) {
  return sentence.split(' ').map(token => {
    let normal = token.replace(/[^a-z]/i, '');
    if (WORD_TO_DIGIT[normal]) {
      let replaced = token.replace(normal, String(WORD_TO_DIGIT[normal]));
      return replaced;
    } else {
      return token;
    }
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.'));      // "The w8 is d1."