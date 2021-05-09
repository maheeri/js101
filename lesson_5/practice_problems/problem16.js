let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

function toObject(array) {
  let obj = {};
  for (let index = 0; index < array.length; index++) {
    let [key, value] = array[index];
    obj[key] = value;
  }
  return obj;
}

console.log(toObject(arr));