let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function processEntry(entry) {
  if (entry.type === 'fruit') {
    return entry.colors.map(color => capitalize(color));
  }
  return entry.size.toUpperCase();
}

console.log(Object.values(obj).map(entry => processEntry(entry)));