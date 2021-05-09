function leadingSubstrings(str) {
  return str.split('').map((_, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  return str.split('').reduce(function (acc, _, idx) {
    acc.push(...leadingSubstrings(str.slice(idx)));
    return acc;
  }, []);
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]