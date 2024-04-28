const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your favourite flavour ? ', (answer) => {
  const lowerCaseAnswer = answer.toLocaleLowerCase();
const ischocolateOrVanilla = lowerCaseAnswer === 'chocolate' || lowerCaseAnswer === 'vanilla';
  console.log(`Your favourite flaovour is : ${ischocolateOrVanilla}`);

  rl.close();
});