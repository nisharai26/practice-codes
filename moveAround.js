

var readlineSync = require('readline-sync');
const worldwidth = 3;
const world = ' '.repeat(worldwidth).split('');
console.log('Empty World');
console.log(world);
let position = Math.floor(worldwidth / 2);
console.log('player position :'+position);
const worldCopy = world.slice();
worldCopy[position] = 'P';
console.log('Player joined');
console.log(worldCopy);

 
// ask the user for their player name.


//assume user wishes to play

let userWishestoPlay = true;

while(userWishestoPlay)
{

    var nextDirection = readlineSync.question(`What direction would you like to go?`);

//nullify player current position
world[position]=' ';

//move the player to the right if thay say so or else

if(nextDirection === 'right'){
    position +=1;
}
else if(nextDirection === 'left'){
    if(position >0){
    position -=1;
    }
}

//put back player into the world
world[position]='P';
console.log(world);
  const userInput = readlineSync.question(`would you like to continue?`);

if(userInput !== 'yes')
{
    userWishestoPlay = false;
}
}
console.log('Thanks for Playing');