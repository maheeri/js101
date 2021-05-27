function diamond(lengthOfGrid) {
  let diamondsPerLine = 1;
  while (diamondsPerLine < lengthOfGrid) {
    displayLine(diamondsPerLine, lengthOfGrid);
    diamondsPerLine += 2;
  }

  displayLine(diamondsPerLine, lengthOfGrid);

  while (diamondsPerLine >= 3) {
    diamondsPerLine -= 2;
    displayLine(diamondsPerLine, lengthOfGrid);
  }
}

function displayLine(numDiamonds, lengthOfGrid) {
  let numSpaces = Math.floor((lengthOfGrid - numDiamonds) / 2);
  let spaces = ' '.repeat(numSpaces);
  if (numDiamonds === 1) {
    console.log(spaces + '*'.repeat(numDiamonds) + spaces);
  } else {
    let hollowSpaces = ' '.repeat(numDiamonds - 2);
    console.log(spaces + '*' + hollowSpaces + '*' + spaces);
  }
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *