function isBalanced(str) {
  let counter = 0;
  let arr = str.split('');
  for (let idx = 0; idx < arr.length; idx++) {
    let char = arr[idx];
    if (counter < 0) {
      return false;
    }
    if (char === '(') {
      counter += 1;
    } else if (char === ')') {
      counter -= 1;
    }
  }
  return counter === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);