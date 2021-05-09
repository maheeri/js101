function wordSizes(sentence) {
  let words = sentence.split(" ");
  let counts = {};
  for (let idx = 0; idx < words.length; idx += 1) {
    let wordLength = words[idx].length;
    if (wordLength === 0) {
      continue;
    }

    if (counts.hasOwnProperty(wordLength)) {
      counts[wordLength] += 1;
    } else {
      counts[wordLength] = 1;
    }
  }
  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}