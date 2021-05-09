function logInBox(message) {
  let dashes = '+' + '-'.repeat(message.length + 2) + '+\n';
  let spaces = '| ' + ' '.repeat(message.length) + ' |\n';
  let messageLine = '| ' + message + ' |\n';

  console.log(dashes + spaces + messageLine + spaces + dashes);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');