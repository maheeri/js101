let rlSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

let length = parseInt(rlSync.question("Enter the length of the room in meters:\n"));
let width = parseInt(rlSync.question("Enter the width of the room in meters:\n"));
let unit = rlSync.question("Enter units meters or feet:\n");

let areaSquareMeters = length * width;
let areaSquareFeet = areaSquareMeters * SQMETERS_TO_SQFEET;
switch (unit) {
  case "meters":
    console.log(`The area of the room is ${areaSquareMeters} square meters`);
    break;
  case "feet":
    console.log(`The area of the room is ${areaSquareFeet} square feet`);
    break;
  default:
    console.log("Please specify units for conversion");
}