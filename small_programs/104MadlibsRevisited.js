const TYPE_TO_WORDS = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  animal: ['fox', 'dog', 'cat'],
  part: ['head', 'leg', 'tail'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly']
};

function madlibs(template) {
  let tokens = template.split(' ');
  let result = [];
  for (let index = 0; index < tokens.length; index++) {
    let token = tokens[index];
    addReplacementToResult(token, result);
  }
  return result.join(' ');
}

function addReplacementToResult(token, result) {
  let replaced = token;
  let re = /%{([a-z]*)}/;
  let match = token.match(re);
  if (match) {
    let type = match[1]; // get matched group
    let wordsToChooseFrom = TYPE_TO_WORDS[type];
    let randomIdx = Math.floor(Math.random() * wordsToChooseFrom.length);
    let replacement = wordsToChooseFrom[randomIdx];
    replaced = token.replace(match[0], replacement);
  }
  result.push(replaced);
}

let template1 = 'The %{adjective} brown %{animal} %{adverb} '
  + '%{verb} the %{adjective} yellow '
  + '%{animal}, who %{adverb} %{verb} his '
  + '%{part} and looks around.';

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.


let template2 = "The %{animal} %{verb} the %{animal}'s %{part}.";
console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".