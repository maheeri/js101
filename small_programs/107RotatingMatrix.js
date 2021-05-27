function rotate90(matrix) {
  let newMatrix = [];
  let newNumCols = matrix.length;
  let newNumRows = matrix[0].length;

  for (let rowNum = 0; rowNum < newNumRows; rowNum++) {
    newMatrix.push([]);
    for (let colNum = newNumCols - 1; colNum >= 0; colNum--) {
      // Go down rows for each column in the original matrix
      newMatrix[rowNum].push(matrix[colNum][rowNum]);
    }
  }

  return newMatrix;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]