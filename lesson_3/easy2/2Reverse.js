function reverse1(numbers) {
  let numbersCopy = numbers.slice();
  numbersCopy.reverse();
  return numbersCopy;
}

function reverse2(numbers) {
  let numbersCopy = numbers.slice();
  numbersCopy.sort((num1, num2) => num2 - num1);
  return numbersCopy;
}

function reverse3(numbers) {
  let numbersCopy = [];
  numbers.forEach(num => numbersCopy.unshift(num));
  return numbersCopy;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reverse1(numbers));
console.log(reverse2(numbers));
console.log(reverse3(numbers));