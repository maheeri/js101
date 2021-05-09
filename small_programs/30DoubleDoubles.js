function twice(num) {
  let numString = String(num);
  if (numString.length % 2 !== 0) {
    return num * 2;
  }

  let halfLen = numString.length / 2;
  if (numString.substring(0, halfLen) === numString.substring(halfLen)) {
    return num;
  }

  return num * 2;
}

console.log(twice(37) === 74);
console.log(twice(44) === 44);
console.log(twice(334433) === 668866);
console.log(twice(444) === 888);
console.log(twice(107) === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333) === 3333);
console.log(twice(7676) === 7676);