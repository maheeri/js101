function wordCap(sentence) {
  return sentence.split(' ').map(word => {
    let firstChar = word[0];
    let remainingWord = word.slice(1);
    if (remainingWord === '') {
      return firstChar.toUpperCase();
    }
    return firstChar.toUpperCase() + remainingWord.toLowerCase();
  }).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'