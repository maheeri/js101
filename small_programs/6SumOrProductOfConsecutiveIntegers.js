let rlSync = require('readline-sync');

let num = parseInt(rlSync.question("Please enter an integer greater than 0: "));
let option = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

let userNum = num;
switch (option) {
  case "s":
    let sum = 0;
    while (num > 0) {
      sum += num;
      num -= 1;
    }
    console.log(`The sum of the integers between 1 and ${userNum} is ${sum}`);
    break;
  case "p":
    let product = 1;
    while (num > 0) {
      product *= num;
      num -= 1;
    }
    console.log(`The product of the integers between 1 and ${userNum} is ${product}`);
    break;
}