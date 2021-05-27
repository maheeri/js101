function minilang(commands) {
  let stack = [];
  let register = 0;
  let tokens = commands.split(' ');
  for (let index = 0; index < tokens.length; index++) {
    let token = tokens[index];
    register = processToken(token, register, stack);
  }
}

function processToken(token, register, stack) {
  switch (token) {
    case "ADD":
    case "SUB":
    case "MULT":
    case "DIV":
    case "REMAINDER":
      register = processArithmetic(token, register, stack);
      break;
    case "PUSH":
    case "POP":
    case "PRINT":
      register = processNonArithmetic(token, register, stack);
      break;
    default:
      register = Number(token);
  }
  return register;
}

function processArithmetic(token, register, stack) {
  switch (token) {
    case "ADD":
      register += stack.pop();
      break;
    case "SUB":
      register -= stack.pop();
      break;
    case "MULT":
      register *= stack.pop();
      break;
    case "DIV":
      register = Math.floor(register / stack.pop(), 10);
      break;
    case "REMAINDER":
      register = Math.floor(register % stack.pop());
      break;
  }
  return register;
}

function processNonArithmetic(token, register, stack) {
  switch (token) {
    case "PUSH":
      stack.push(register);
      break;
    case "POP":
      register = stack.pop();
      break;
    case "PRINT":
      console.log(register);
      break;
  }
  return register;
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)