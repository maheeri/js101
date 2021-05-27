function letterPercentages(str) {
  let tokens = str.split('');
  let counts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  aggregateCounts(tokens, counts);

  let percentages = {};
  for (let key in counts) {
    let percentage = (counts[key] / tokens.length * 100).toFixed(2);
    percentages[key] = percentage;
  }
  return percentages;
}

function aggregateCounts(tokens, counts) {
  tokens.forEach(token => {
    if (token >= 'a' && token <= 'z') {
      counts.lowercase += 1;
    } else if (token >= 'A' && token <= 'Z') {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  });
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }