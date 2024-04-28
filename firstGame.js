var readlineSync = require('readline-sync');
 
// ask the user for their player name.
var userName = readlineSync.question(`Enter player name!`);
console.log(`Welcome!${userName}!!`);
//make the player board.
const board = [];
const rowCount = 3;
const columnCount = 3;
 // add rows
 for(let i =0;i <rowCount;i++){
     board.push([]);
     //add columns
     for(let j=0;j<columnCount;j++){
         board[i].push('');
     }
 }
 
 //ask user to guess certain number of times
 let maxGuesses = 3;
 let userGuessesremaining  = maxGuesses;

 //place sghip randomly

 const rowShip = Math.floor(Math.random()*rowCount)+0;
const columnShip = Math.floor(Math.random()*columnCount)+0;
 
 //loop until the game is over

 while (userGuessesremaining  > 0){
     console.log(`Guess is remaining : ${userGuessesremaining}`);
     //ask the user for their next move.
     let nextMove = readlineSync.question(`Enter your next move:(1,2 means row 1 column 2)`).split('');
    
     // extract guesses for array indexing 

     let rowGuess = +nextMove[0];
     let columnGuess = +nextMove[1];
        // check if user has hit the ship

      const hitShip = rowShip === rowGuess && columnShip === columnGuess;
     //check if user have hit the ship
     if(hitShip){
        console.log('YOU HAVE HIT THE SHIP!!');
        //mark the user guess on the board
        board[rowGuess][columnGuess] = 'S';
       
    } else {
        console.log('YIKES!THAT WAS A MISS');
        board[rowGuess][columnGuess] = 'X';
    }

      //print out the board row by row
 for(let i = 0;i <rowCount;i++){
    console.log(board[i]);
 }
console.log(`row is ${rowGuess},column is ${columnGuess}`)
     //turn is over now decrease guess every time 1 by 1 untill 3.
     //mark the user guess on the row
    
   
    //finish game right away if user hit the ship
    if(hitShip){
        break;
    }
   
     userGuessesremaining --;
 }
 if(userGuessesremaining >0){
     console.log('YOU WIN!')

 }
 else {
    board[rowShip][columnShip]='S';
      
     console.log('YOU LOSE :(');
      //print out the board row by row
 for(let i = 0;i <rowCount;i++){
    console.log(board[i]);
    }
}