//find the copy of the animal array
const animal =['zebra','lion','elephant','penguin','whale'];
const copyOfanimal = animal.slice();
console.log(copyOfanimal,animal,`These are two different : ${animal !== copyOfanimal}`);

//get the copy of the animal but the last 2
//using the array from part 2 add any animal onto the end and store the resulting array into ANOTHER array

let animalPart = animal.slice(0,-2);
console.log(animalPart); 

console.log('---------------------------');

animalPart.push('monkey');
console.log(animalPart);
console.log('-------------------------------------------------------');

const middleOfanimalpart = animalPart.slice(1,-1);
console.log(middleOfanimalpart);
