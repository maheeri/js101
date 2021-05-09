const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'sc', 'sp', 'l'];
const YOU = 'you';
const COMPUTER = 'computer';
const TIE = 'tie';

function prompt(message) {
  console.log(`=> ${message}`);
}

function makeChoices() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  return [choice, computerChoice];
}

function determineWinner(choice, computerChoice) {
  if ((choice === 'sc' && (computerChoice === 'p' || computerChoice === 'l')) ||
    (choice === 'p' && (computerChoice === 'r' || computerChoice === 'sp')) ||
    (choice === 'r' && (computerChoice === 'l' || computerChoice === 'sc')) ||
    (choice === 'l' && (computerChoice === 'sp' || computerChoice === 'p')) ||
    (choice === 'sp' && (computerChoice === 'sc' || computerChoice === 'r'))) {
    return YOU;
  } else if (choice === computerChoice) {
    return TIE;
  } else {
    return COMPUTER;
  }
}

function displayGrandWinner(ownWins) {
  if (ownWins === 3) {
    prompt('You are the grand winner!');
  } else {
    prompt('Computer is the grand winner!');
  }
}

function displayWinner(winner) {
  switch (winner) {
    case YOU:
      prompt('You win!');
      break;
    case COMPUTER:
      prompt('Computer wins!');
      break;
    default:
      prompt("It's a tie.");
  }
}

function playBestOfFive() {
  let ownWins = 0;
  let computerWins = 0;
  while (ownWins !== 3 && computerWins !== 3) {
    let [choice, computerChoice] = makeChoices();
    let winner = determineWinner(choice, computerChoice);
    if (winner === YOU) {
      ownWins += 1;
    } else if (winner === COMPUTER) {
      computerWins += 1;
    }
    displayWinner(winner);
  }
  displayGrandWinner(ownWins);
}

let answer = 'yes';
while (answer[0] === 'y') {
  playBestOfFive();

  prompt('Do you want to play again (y/n)?');
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
}

