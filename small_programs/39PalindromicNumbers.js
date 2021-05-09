function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

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

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true