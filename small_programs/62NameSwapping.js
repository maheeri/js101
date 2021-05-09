function swapName(name) {
  let lastSpaceIdx = name.lastIndexOf(' ');
  let last = name.slice(lastSpaceIdx + 1);
  let middles = name.slice(0, lastSpaceIdx);
  return `${last}, ${middles}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"