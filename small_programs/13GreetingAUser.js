rlSync = require("readline-sync");

let name = rlSync.question("What is your name? ");
let lastChar = name.charAt(name.length - 1);
if (lastChar === "!") {
  let upperCaseName = name.substring(0, name.length - 1).toUpperCase();
  let greeting = `HELLO ${upperCaseName}. WHY ARE WE SCREAMING?`
  console.log(greeting);
} else {
  console.log(`Hello ${name}.`);
}