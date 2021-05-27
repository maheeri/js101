function transpose(matrix) {
  let copiedMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      copiedMatrix[col][row] = matrix[row][col];
    }
  }

  return copiedMatrix;
}

function inPlaceTranspose(matrix) {
  for (let row = 0; row < 3; row++) {
    for (let col = row; col < 3; col++) {
      [matrix[col][row], matrix[row][col]] =
        [matrix[row][col], matrix[col][row]];
    }
  }
  return matrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

inPlaceTranspose(matrix);
console.log(matrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
