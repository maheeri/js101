let munstersDescription = "The Munsters are creepy and spooky.";

let result = '';
for (let idx = 0; idx < munstersDescription.length; idx += 1) {
  if (munstersDescription[idx] >= 'a' && munstersDescription[idx] <= 'z') {
    result += munstersDescription[idx].toUpperCase();
  } else {
    result += munstersDescription[idx].toLowerCase();
  }
}
console.log(result);

