let fish =['sowrdfish','octopus','whale','shark','squid','starfish'];

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What fish are you looking for ? ', (answer) => {
 console.log(`searching for the: ${answer.toUpperCase()}`);
 answer =answer.toLocaleLowerCase();
 let matchFish = -1;
 for(let i =0;i<fish.length;i++){
     if (fish[i]=== answer){
         matchFish = i;
         break;
     }

 }
 if(matchFish === -1){
     console.log(`Apologies but we couldn't find the fish ${answer}`)
 } else {
console.log(`we found your fish ${answer} at index ${matchFish}`)
 }
 console.log(fish ,answer,fish.indexOf(answer));
  rl.close();
});