let cards =["dimond","club","hearts","spade"];
let currentCard = "club";
while(currentCard != "spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);