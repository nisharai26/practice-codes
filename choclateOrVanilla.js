//write a program which says "YUM" if its the favourite flavour and "EW" if its not.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your favourite flavour ? ', (answer) => {
  const lowerCaseAnswer = answer.toLocaleLowerCase();

    if (lowerCaseAnswer === 'chocolate' || lowerCaseAnswer === 'vanilla'){

         console.log('YUM');
        } else {
         console.log('EW');
      }

  rl.close();
});