function triangle(len) {
  for (let idx = len - 1; idx >= 0; idx -= 1) {
    console.log(" ".repeat(idx) + "*".repeat(len - idx));
  }
}

console.log(triangle(5));
console.log(triangle(9));