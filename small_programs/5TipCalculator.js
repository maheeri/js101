let rlSync = require('readline-sync');

let bill = parseFloat(rlSync.question("What is the bill? "));
let tipPercentage = parseFloat(rlSync.question("What is the tip percentage? "));

let tip = tipPercentage / 100 * bill;
let total = tip + bill;
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);