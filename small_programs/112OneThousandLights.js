function lightsOn(switches) {
  let lights = [];
  for (let index = 0; index < switches; index++) {
    lights.push(false);
  }

  let count = 1;
  while (count <= switches) {
    toggleLights(count, lights);
    count += 1;
  }

  let result = [];
  lights.forEach((curr, idx) => {
    if (curr) {
      result.push(idx + 1);
    }
  });

  return result;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

function toggleLights(count, states) {
  for (let index = count - 1; index < states.length; index += count) {
    states[index] = !states[index];
  }
}
