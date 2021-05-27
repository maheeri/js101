const EQUILATERAL = "equilateral";
const ISOSCELES = "isosceles";
const SCALENE = "scalene";
const INVALID = "invalid";

function triangle(len1, len2, len3) {
  let sortedHeights = [len1, len2, len3].sort((a, b) => a - b);

  let longest = sortedHeights[2];
  let [shortest, secondShortest] = [sortedHeights[0], sortedHeights[1]];

  if (!isValid(shortest, secondShortest, longest)) {
    return INVALID;
  }

  if (shortest === secondShortest && secondShortest === longest) {
    return EQUILATERAL;
  }

  if (shortest === secondShortest || secondShortest === longest) {
    return ISOSCELES;
  }

  return SCALENE;
}

function isValid(shortest, secondShortest, longest) {
  if (shortest <= 0 || secondShortest <= 0 || longest <= 0) {
    return false;
  }

  return shortest + secondShortest > longest;
}

console.log(triangle(3, 3, 3) === "equilateral");        // "equilateral"
console.log(triangle(3, 3, 1.5) === "isosceles");      // "isosceles"
console.log(triangle(3, 4, 5) === "scalene");        // "scalene"
console.log(triangle(0, 3, 3) === "invalid");        // "invalid"
console.log(triangle(3, 1, 1) === "invalid");        // "invalid"