let rlSync = require('readline-sync');

const SUITS = ['H', 'D', 'C', 'S'];
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
  'J', 'Q', 'K', 'A'];
const HIT = 'hit';
const STAY = 'stay';
const BUST_SCORE = 21;
const DEALERS_MINIMUM = 17;
const PLAYER_WIN_MESSAGE = 'You win!';
const DEALER_WIN_MESSAGE = 'Dealer won!';
const TIED_MESSAGE = 'Game was tied!';

function play() {
  let keepPlaying = true;
  while (keepPlaying) {
    playSingleGame();

    let keepPlayingResponse = rlSync.question('Would you like to keeping playing? (Y/N): ');
    if (keepPlayingResponse.toLowerCase() === 'y') {
      keepPlaying = true;
    } else {
      keepPlaying = false;
    }
  }
}

function playSingleGame() {
  // We only need to care about keeping the ranks
  let deck = createShuffledDeck();
  let playerCards = deck.splice(0, 2);
  let dealerCards = deck.splice(0, 2);
  let dealersDisplayedCard = dealerCards[0];
  let playerScore = playersTurn(deck, playerCards, dealersDisplayedCard);
  if (playerScore === -1) {
    displayResults(playerCards, dealerCards, -1, 0);
    return;
  }

  let dealerScore = dealersTurn(deck, dealerCards);
  displayResults(playerCards, dealerCards, playerScore, dealerScore);
}

function displayResults(playerCards, dealerCards, playerScore, dealerScore) {
  console.clear();
  displayHands(playerCards, dealerCards);
  displayWinner(playerScore, dealerScore);
}

function createShuffledDeck() {
  let deck = createDeck();
  for (let index = deck.length - 1; index > 0; index--) {
    let indexToSwap = Math.ceil(Math.random() * index);
    swap(index, indexToSwap, deck);
  }
  return deck;
}

function createDeck() {
  let deck = [];
  RANKS.forEach(rank => {
    SUITS.forEach(suit => {
      deck.push([rank, suit]);
    });
  });
  // We only care about keeping the rank
  return deck.map(card => card[0]);
}

function swap(idx1, idx2, array) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

function playersTurn(deck, playerCards, dealersDisplayedCard) {
  while (true) {
    console.clear();
    console.log("Dealer's visible card: " + dealersDisplayedCard);
    console.log("Your cards: " + playerCards.join(', '));
    let playersMove = rlSync.question('What would you like to do? (hit or stay) ');
    if (playersMove.toLowerCase() === HIT) {
      let newCard = deck.splice(0, 1)[0];
      playerCards.push(newCard);
      let playerScore = calculateScore(playerCards);
      if (playerScore > BUST_SCORE) {
        return -1;
      }
    } else if (playersMove.toLowerCase() === STAY) {
      return calculateScore(playerCards);
    } else {
      continue;
    }
  }
}

function dealersTurn(deck, dealerCards) {
  while (true) {
    let dealerScore = calculateScore(dealerCards);
    if (dealerScore >= BUST_SCORE) {
      return -1;
    }
    if (dealerScore >= DEALERS_MINIMUM) {
      return dealerScore;
    }

    let newCard = deck.splice(0, 1)[0];
    dealerCards.push(newCard);
  }
}

function calculateScore(playerCards) {
  let score = 0;
  playerCards.forEach(card => {
    if (['J', 'Q', 'K'].includes(card)) {
      score += 10;
    } else if (card === 'A') {
      score += 11;
    } else {
      score += Number(card);
    }
  });

  playerCards.filter(card => card === "A").forEach(_ => {
    if (score > BUST_SCORE) score -= 10;
  });

  return score;
}

function displayHands(playerCards, dealerCards) {
  console.log("Your cards: " + playerCards.join(', '));
  console.log("Dealer's cards: " + dealerCards.join(', '));
}

function displayWinner(playerScore, dealerScore) {
  if (playerScore > dealerScore) {
    console.log(PLAYER_WIN_MESSAGE);
  } else if (dealerScore > playerScore) {
    console.log(DEALER_WIN_MESSAGE);
  } else {
    console.log(TIED_MESSAGE);
  }
}

play();