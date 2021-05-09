const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
  'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x',
  'y', 'z'];

function doubleConsonant(char) {
  if (CONSONANTS.includes(char.toLowerCase())) {
    return char + char;
  }
  return char;
}

function doubleConsonants(str) {
  return str.split('').map(char => doubleConsonant(char)).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""