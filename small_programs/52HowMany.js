function countOccurrences(array) {
  let counts = {};
  for (let idx = 0; idx < array.length; idx++) {
    let elem = array[idx].toLowerCase();
    if (counts[elem]) {
      counts[elem] += 1;
    } else {
      counts[elem] = 1;
    }
  }

  for (const key in counts) {
    console.log(`${key} => ${counts[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'suv', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);