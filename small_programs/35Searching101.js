const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

let collectedNumbers = [];

prompt('Enter the 1st number:');
let number1 = Number(readline.question());
collectedNumbers.push(number1);

prompt('Enter the 2nd number:');
let number2 = Number(readline.question());
collectedNumbers.push(number2);

prompt('Enter the 3rd number:');
let number3 = Number(readline.question());
collectedNumbers.push(number3);

prompt('Enter the 4th number:');
let number4 = Number(readline.question());
collectedNumbers.push(number4);

prompt('Enter the 5th number:');
let number5 = Number(readline.question());
collectedNumbers.push(number5);

prompt('Enter the last number:');
let number6 = Number(readline.question());
if (collectedNumbers.includes(number6)) {
  prompt(`The number ${number6} appears in ${collectedNumbers}`);
} else {
  prompt(`The number ${number6} does not appear in ${collectedNumbers}.`);
}
