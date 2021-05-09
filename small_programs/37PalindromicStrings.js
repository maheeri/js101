function isPalindrome(str) {
  let len = str.length;
  let halfLen = Math.floor(len / 2);
  let idx = 0;
  while (idx < halfLen) {
    if (str[idx] !== str[len - 1 - idx]) {
      return false;
    }
    idx += 1;
  }
  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true