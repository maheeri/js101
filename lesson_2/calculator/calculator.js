const messages = require('./calculator_messages.json');
const readline = require('readline-sync');

const LANGUAGE = 'en';

function calculate() {
  prompt(messages[LANGUAGE].welcome);

  let [number1, number2] = getNumbers();

  // Ask the user for an operation to perform.
  prompt(messages[LANGUAGE].chooseOpertionPrompt);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages[LANGUAGE].invalidOperationMessage);
    operation = readline.question();
  }

  let output = performOperation(number1, number2, operation);

  // Print the result to the terminal.
  console.log(`The result is: ${output}`);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function getNumbers() {
  // Ask the user for the first number.
  prompt(messages[LANGUAGE].firstNumberPrompt);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages[LANGUAGE].invalidNumberMessage);
    number1 = readline.question();
  }

  // Ask the user for the second number.
  prompt(messages[LANGUAGE].secondNumberPrompt);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages[LANGUAGE].invalidNumberMessage);
    number2 = readline.question();
  }

  return [number1, number2];
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function performOperation(number1, number2, operation) {
  // Perform the operation on the two numbers.
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  return output;
}

while (true) {
  calculate();
  prompt(messages[LANGUAGE].restartPrompt);
  let reply = readline.question();
  if (reply.toLowerCase() === 'yes') continue;
  break;
}