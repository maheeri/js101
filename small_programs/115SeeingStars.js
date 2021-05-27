function star(size) {
  let middleSpaceNum = (size - 3) / 2;
  let maxMiddleSpaceNum = middleSpaceNum;
  let sideSpaceNum = 0;
  while (middleSpaceNum >= 0) {
    displayLine(middleSpaceNum, sideSpaceNum);
    middleSpaceNum -= 1;
    sideSpaceNum += 1;
  }

  console.log('*'.repeat(size));

  while (middleSpaceNum < maxMiddleSpaceNum) {
    middleSpaceNum += 1;
    sideSpaceNum -= 1;
    displayLine(middleSpaceNum, sideSpaceNum);
  }
}

function displayLine(middleSpaceNum, sideSpaceNum) {
  let middle = ' '.repeat(middleSpaceNum);
  let side = ' '.repeat(sideSpaceNum);
  let line = side + '*' + middle + '*' + middle + '*' + side;
  console.log(line);
}


star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *