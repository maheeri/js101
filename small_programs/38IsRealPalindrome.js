function isRealPalindrome(str) {
  let normalized = str.toLowerCase()
    .split('')
    .filter(entry => (isLetter(entry)) || (isNumber(entry)))
    .join('');
  return isPalindrome(normalized);
}

function isLetter(entry) {
  return entry >= 'a' && entry <= 'z';
}

function isNumber(entry) {
  return entry >= '0' && entry <= '9';
}

function isPalindrome(str) {
  let len = str.length;
  let halfLen = Math.floor(len / 2);
  let idx = 0;
  while (idx < halfLen) {
    if (str[idx].toLowerCase() !== str[len - 1 - idx].toLowerCase()) {
      return false;
    }
    idx += 1;
  }
  return true;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false