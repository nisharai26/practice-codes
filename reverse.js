const flavour =['Choclate','Vanilla','Strawberry'];
/*for(let i =0;i<20;i++){
    flavour.push(i);
} */
const flavourReverse = [];

for(let i=0;i< flavour.length;i++){
    flavourReverse.unshift(flavour[i]);
}


console.log(flavourReverse);
console.log(flavour);