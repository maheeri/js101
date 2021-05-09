function crunch(str) {
  let result = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] !== result[result.length - 1]) {
      result += str[idx];
    }
  }
  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee') === 'daily double');
console.log(crunch('4444abcabccba') === '4abcabcba');
console.log(crunch('ggggggggggggggg') === 'g');
console.log(crunch('a') === 'a');
console.log(crunch('') === '');