let rlSync = require('readline-sync');

const BOARD_SIZE = 3;
const EMPTY = ' ';
const HUMAN = 'X';
const COMPUTER = 'O';
const DRAWN_MARKER = 'D';
const SCORE_TO_WIN_MATCH = 1;
const CHOOSE_MOVER = "choose";
const HUMAN_MOVER = "player";
const COMPUTER_MOVER = "computer";
const FIRST_MOVER = CHOOSE_MOVER;

function play() {
  let keepPlaying = true;
  while (keepPlaying) {
    let firstMover = determineFirstMover();

    let result = runMatch(firstMover);
    if (result === HUMAN) {
      console.log('You win!');
    } else {
      console.log('Computer wins!');
    }

    let keepPlayingResponse = rlSync.question('Would you like to keeping playing? (Y/N): ');
    if (keepPlayingResponse.toLowerCase() === 'y') {
      keepPlaying = true;
    } else {
      keepPlaying = false;
    }
  }
}

function determineFirstMover() {
  let firstMover = FIRST_MOVER;
  if (firstMover === CHOOSE_MOVER) {
    firstMover = rlSync.question('Who should move first? (computer/player): ');
  }
  return firstMover;
}

function runMatch(firstMover) {
  let humanWins = 0;
  let computerWins = 0;

  while (humanWins < SCORE_TO_WIN_MATCH && computerWins < SCORE_TO_WIN_MATCH) {
    let board = [
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY]
    ];

    let result = runGame(board, firstMover, humanWins, computerWins);
    if (result === HUMAN) {
      humanWins += 1;
    } else if (result === COMPUTER) {
      computerWins += 1;
    }
  }
  return humanWins === SCORE_TO_WIN_MATCH ? HUMAN : COMPUTER;
}

function runGame(board, firstMover, humanWins, computerWins) {
  let currentMarker = firstMover === HUMAN_MOVER ? HUMAN : COMPUTER;
  while (true) {
    displayBoard(board, humanWins, computerWins);

    chooseMove(board, currentMarker);
    if (isWinner(board, currentMarker)) {
      return currentMarker;
    }
    currentMarker = alernatePlayer(currentMarker);

    if (isFull(board)) {
      break;
    }
  }
  return DRAWN_MARKER;
}

function displayBoard(board, humanWins, computerWins) {
  console.clear();

  console.log(`You are ${HUMAN}. Computer is ${COMPUTER}`);

  console.log(`Human score: ${humanWins}, Computer score: ${computerWins}. ` +
                  `Needed to win: ${SCORE_TO_WIN_MATCH}`);

  console.log('      |     |     ');
  console.log(`   ${board[0][0]}  |  ${board[0][1]}  |  ${board[0][2]}  `);
  console.log(' _____|_____|_____');
  console.log('      |     |     ');
  console.log(`   ${board[1][0]}  |  ${board[1][1]}  |  ${board[1][2]}  `);
  console.log(' _____|_____|_____');
  console.log('      |     |     ');
  console.log(`   ${board[2][0]}  |  ${board[2][1]}  |  ${board[2][2]}  `);
  console.log('      |     |     ');
}

function chooseMove(board, currentMarker) {
  if (currentMarker === HUMAN) {
    humansChoice(board);
  } else {
    computersChoice(board);
  }
}

function isFull(board) {
  return board.every(row =>
    row.every(col => col !== EMPTY));
}

function alernatePlayer(currentMarker) {
  currentMarker = currentMarker === HUMAN ? COMPUTER : HUMAN;
  return currentMarker;
}

function humansChoice(board) {
  let [row, col] = chooseRowAndColumn();

  while (board[row][col] !== EMPTY) {
    console.log('The chosen row and column are not empty.');
    [row, col] = chooseRowAndColumn();
  }

  board[row][col] = HUMAN;
}

function chooseRowAndColumn() {
  let row = Number(rlSync.question("Choose row for your next move from 0, 1 or 2: "));
  while (!(Number.isInteger(row) && row >= 0 && row < BOARD_SIZE)) {
    row = Number(rlSync.question("Choose valid row for your next move from 0, 1 or 2: "));
  }

  let col = Number(rlSync.question("Choose column for your next move from 0, 1 or 2: "));
  while (!(Number.isInteger(col) && col >= 0 && col < BOARD_SIZE)) {
    col = Number(rlSync.question("Choose valid column for your next move from 0, 1 or 2: "));
  }
  return [row, col];
}

function computersChoice(board) {
  let emptySlots = computeEmptySlots(board);

  let [winningRow, winningCol] = findWinningSquare(board, emptySlots, COMPUTER);
  if (winningRow > -1) {
    board[winningRow][winningCol] = COMPUTER;
    return;
  }

  let [threatRow, threatCol] = findWinningSquare(board, emptySlots, HUMAN);
  if (threatRow > -1) {
    board[threatRow][threatCol] = COMPUTER;
    return;
  }

  if (board[1][1] === ' ') {
    board[1][1] = COMPUTER;
    return;
  }

  let choice = Math.floor(Math.random() * emptySlots.length);
  let [computerRow, computerCol] = emptySlots[choice];
  board[computerRow][computerCol] = COMPUTER;
}

function computeEmptySlots(board) {
  let emptySlots = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board[row][col] === EMPTY) {
        emptySlots.push([row, col]);
      }
    }
  }
  return emptySlots;
}

function findWinningSquare(board, emptySlots, marker) {
  let boardCopy = board.slice().map(row => row.slice());

  for (let index = 0; index < emptySlots.length; index++) {
    let [emptyRow, emptyCol] = emptySlots[index];
    boardCopy[emptyRow][emptyCol] = marker;
    if (isWinner(boardCopy, marker)) {
      return [emptyRow, emptyCol];
    }
    boardCopy[emptyRow][emptyCol] = EMPTY;
  }

  return [-1, -1];
}

function isWinner(board, player) {
  return winsHorizontally(board, player) ||
    winsVertically(board, player) ||
    winsDiagonally(board, player);
}

function winsHorizontally(board, player) {
  let horizontalCount = 0;
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board[row][col] === player) {
        horizontalCount += 1;
        if (horizontalCount === 3) {
          return true;
        }
      }
    }
    horizontalCount = 0;
  }
  return false;
}

function winsVertically(board, player) {
  let verticalCount = 0;
  for (let col = 0; col < BOARD_SIZE; col++) {
    for (let row = 0; row < BOARD_SIZE; row++) {
      if (board[row][col] === player) {
        verticalCount += 1;
        if (verticalCount === 3) {
          return true;
        }
      }
    }
    verticalCount = 0;
  }
  return false;
}

function winsDiagonally(board, player) {
  let diagonal1Count = 0;
  let diagonal2Count = 0;
  for (let idx = 0; idx < BOARD_SIZE; idx++) {
    if (board[idx][idx] === player) {
      diagonal1Count += 1;
      if (diagonal1Count === 3) {
        return true;
      }
    }
    if (board[idx][BOARD_SIZE - 1 - idx] === player) {
      diagonal2Count += 1;
      if (diagonal2Count === 3) {
        return true;
      }
    }
  }

  return false;
}

play();