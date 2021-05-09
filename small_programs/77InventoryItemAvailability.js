function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction.id === id);
}

function quantityChange(transaction) {
  if (transaction.movement === 'in') {
    return transaction.quantity;
  }
  return -transaction.quantity;
}

function isItemAvailable(id, transactions) {
  return transactionsFor(id, transactions).reduce(function(acc, transaction) {
    return acc + quantityChange(transaction);
  }, 0) > 0;
}

let transactions = [{ id: 101, movement: 'in', quantity: 5 },
  { id: 105, movement: 'in', quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in', quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in', quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in', quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true