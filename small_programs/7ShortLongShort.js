function shortLongShort(s1, s2) {
  if (s1.length > s2.length) {
    return s2 + s1 + s2;
  } 

  return s1 + s2 + s1;
}


console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"