let readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function madlib() {
  prompt('Enter a noun:');
  let noun = readline.question();

  prompt('Enter a verb:');
  let verb = readline.question();

  prompt('Enter an adjective:');
  let adjective = readline.question();

  prompt('Enter an adverb:');
  let adverb = readline.question();

  let output = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
  The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.
  The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

  prompt(output);
}

madlib();
