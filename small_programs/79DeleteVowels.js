const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function isVowel(char) {
  let normalizedChar = char.toLowerCase();
  return VOWELS.includes(normalizedChar);
}

function removeVowelsFromString(str) {
  return str.split('').filter(char => !isVowel(char)).join('');
}

function removeVowels(arr) {
  return arr.map(removeVowelsFromString);
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]