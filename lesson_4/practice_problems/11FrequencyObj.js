let statement = "The Flintstones Rock";
let freqs = {};

statement.split('').filter(char => char !== ' ').forEach(char => {
  freqs[char] = freqs[char] ? freqs[char] + 1 : 1;
});

console.log(freqs);