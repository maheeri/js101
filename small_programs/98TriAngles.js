const ACUTE = 'acute';
const RIGHT = 'right';
const OBTUSE = 'obtuse';
const INVALID = 'invalid';

function triangle(angle1, angle2, angle3) {
  if (!isValid(angle1, angle2, angle3)) {
    return INVALID;
  }

  if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    return RIGHT;
  }

  if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
    return ACUTE;
  }

  return OBTUSE;
}

function isValid(angle1, angle2, angle3) {
  if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    return false;
  }

  if (angle1 + angle2 + angle3 !== 180) {
    return false;
  }

  return true;
}

console.log(triangle(60, 70, 50) === "acute");       // "acute"
console.log(triangle(30, 90, 60) === "right");       // "right"
console.log(triangle(120, 50, 10) === "obtuse");      // "obtuse"
console.log(triangle(0, 90, 90) === "invalid");        // "invalid"
console.log(triangle(50, 50, 50) === "invalid");       // "invalid"