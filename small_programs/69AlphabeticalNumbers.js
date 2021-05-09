const NUMS_TO_NAMES = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
];

function compare(num1, num2) {
  let name1 = NUMS_TO_NAMES[num1];
  let name2 = NUMS_TO_NAMES[num2];
  if (name1 === name2) {
    return 0;
  } else if (name1 > name2) {
    return 1;
  } else {
    return -1;
  }
}

function alphabeticNumberSort(numbers) {
  numbers.sort((num1, num2) => compare(num1, num2));
  return numbers;
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]