function isUpperCase(char) {
  return char === char.toUpperCase();
}

function isNonLetter(char) {
  return char.match(/[^a-zA-Z]/) !== null;
}

function letterCaseCount(str) {
  let counts = { lowercase: 0, uppercase: 0, neither: 0 };
  let strArray = str.split('');
  for (let index = 0; index < strArray.length; index++) {
    let char = strArray[index];
    if (isNonLetter(char)) {
      counts.neither += 1;
    } else if (isUpperCase(char)) {
      counts.uppercase += 1;
    } else {
      counts.lowercase += 1;
    }
  }
  return counts;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }