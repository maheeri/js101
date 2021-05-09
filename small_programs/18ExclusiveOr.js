function xor(operand1, operand2) {
  return !!((operand1 && !operand2) || (!operand1 && operand2));
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);