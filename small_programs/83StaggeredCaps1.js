function staggeredCase(sentence) {
  let shouldCapitalize = true;
  let result = [];
  let split = sentence.split('');
  for (let index = 0; index < split.length; index++) {
    let currentChar = split[index];
    if (shouldCapitalize) {
      result.push(currentChar.toUpperCase());
    } else {
      result.push(currentChar.toLowerCase());
    }
    shouldCapitalize = !shouldCapitalize;
  }
  return result.join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"