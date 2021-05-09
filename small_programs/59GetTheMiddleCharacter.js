function centerOf(str) {
  let len = str.length;
  let mid = Math.floor(len / 2);
  if (len % 2 === 0) {
    return str.slice(mid - 1, mid + 1);
  }
  return str[mid];
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
console.log(centerOf('xy'));                 // "x"