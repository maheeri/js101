const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

let age = Number(readline.question('What is your age? '));
let retirementAge = Number(readline.question('At what age would you like to retire? '));
let yearsToRetirement = retirementAge - age;

let currentYear = new Date().getFullYear();
prompt(`It's ${currentYear}. You will retire in ${currentYear + yearsToRetirement}`);
prompt(`You have only ${yearsToRetirement} years of work to go!`);