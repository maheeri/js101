function buyFruit(groceryList) {
  let result = [];
  for (let idx1 = 0; idx1 < groceryList.length; idx1++) {
    let [fruit, count] = groceryList[idx1];
    for (let idx2 = 0; idx2 < count; idx2++) {
      result.push(fruit);
    }
  }
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]