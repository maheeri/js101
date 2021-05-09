// 1
let numbers1 = [1, 2, 3, 4];
while (numbers1.length !== 0) {
  numbers1.pop();
}
console.log(numbers1);

// 2
let numbers2 = [1, 2, 3, 4];
numbers2.splice(0);
console.log(numbers2);

// 3
let numbers3 = [1, 2, 3, 4];
while (numbers3.length !== 0) {
  numbers3.shift();
}
console.log(numbers3);