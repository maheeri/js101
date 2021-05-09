let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let result = '';
for (let idx = 0; idx < munstersDescription.length; idx += 1) {
  if (idx === 0) {
    result += munstersDescription[idx].toUpperCase();
  } else {
    result += munstersDescription[idx].toLowerCase();
  }
}
console.log(result);