let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' }
};

let age = 0;
for (let name in munsters) {
  if (munsters[name].gender === 'male') {
    age += munsters[name].age;
  }
}
console.log(age);