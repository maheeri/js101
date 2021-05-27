function staggeredCase(sentence, considerNonAlphabetic = false) {
  let shouldCapitalize = true;
  let result = [];
  sentence.split('').forEach(char => {
    if (char.toLowerCase() >= 'a' && char.toUpperCase() <= 'z') {
      if (shouldCapitalize) {
        result.push(char.toUpperCase());
      } else {
        result.push(char.toLowerCase());
      }
      shouldCapitalize = !shouldCapitalize;
    } else {
      result.push(char);
      if (considerNonAlphabetic) {
        shouldCapitalize = !shouldCapitalize;
      }
    }
  });
  return result.join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
console.log(staggeredCase('I Love Launch School!', true) === "I LoVe lAuNcH ScHoOl!");        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS', true) === "AlL_CaPs");                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers', true) === "IgNoRe 77 ThE 4444 nUmBeRs");   // "IgNoRe 77 ThE 4444 nUmBeRs"