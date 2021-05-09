let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split("").reduce((acc, curr) => acc + (curr === 't'), 0));
console.log(statement2.split("").reduce((acc, curr) => acc + (curr === 't'), 0));