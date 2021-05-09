const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Please enter the loan amount');
let loanAmount = Number(readline.question());

prompt('Please enter the Annual Percentage Rate (APR)');
let annualPercentageRate = Number(readline.question()) / 100;
let monthlyInterestRate = annualPercentageRate / 12;

prompt('Please enter the loan duration in months');
let loanDurationInMonths = Number(readline.question());

let monthlyPayment = loanAmount *
    (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));

console.log(monthlyPayment.toFixed(2));